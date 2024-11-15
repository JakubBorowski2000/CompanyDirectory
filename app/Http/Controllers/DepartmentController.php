<?php

namespace App\Http\Controllers;
use App\Models\Department;

use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function show()
    {
        $tableHeadNames = ["Department", "Location", "Action"];

        return view('departments', ["tableHeadNames" => $tableHeadNames, "tableClass" => "tableRowDep", "page" => "departments"]);
    }
    public function getDepartments(Request $request)
    {
        try{
            $postData = $request->all();
            // var_dump($postData); die; // Dumps and dies, displaying all POST data
            $departments = Department::select(
                "department.name as department_name",
                "location.name as location_name",
                )
            ->join('location', 'location.id', '=', 'department.locationID');
    
            if(isset($postData['department'])){
                $departments = $departments->where("department.name", "=", $postData['department']);
            }
    
            if(isset($postData['location'])){
                $departments = $departments->where("location.name", "=", $postData['location']);
            }
    
            if(isset($postData['search'])){ //p.lastName, p.firstName, p.jobTitle, p.email, d.name, l.name
                $search = $postData['search'];
                $departments = $departments->where(function($query) use ($search) {
                    $query->Where('department.name', 'LIKE', "%{$search}%")
                          ->orWhere('location.name', 'LIKE', "%{$search}%");
                });
            }
    
            //$departments = $departments->toRawSql();
            $departments = $departments->get();
        }catch(e){
            return json_encode(["status" => 500, "data" => "There has been an error"]);
        }


        return json_encode(["status" => 200, "data" => $departments]);
    }
}

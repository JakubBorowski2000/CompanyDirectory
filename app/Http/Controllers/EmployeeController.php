<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function show()
    {
        $tableHeadNames = ["Name", "Job Title", "Email", "Department", "Location", "Action"];

        return view('employees', ["tableHeadNames" => $tableHeadNames, "tableClass" => "tableRowEmp"]);
    }

    public function getEmployees(Request $request)
    {
        $postData = $request->all();
        // var_dump($postData); die; // Dumps and dies, displaying all POST data
        $employees = Employee::select(
            "personnel.id","personnel.firstName","personnel.lastName","personnel.jobTitle","personnel.email","personnel.departmentID",
            "department.name as department_name",
            "location.name as location_name",
            )
        ->join('department', 'department.id', '=', 'personnel.departmentID')
        ->join('location', 'location.id', '=', 'department.locationID');

        if(isset($postData['department'])){
            $employees = $employees->where("department.name", "=", $postData['department']);
        }

        if(isset($postData['location'])){
            $employees = $employees->where("location.name", "=", $postData['location']);
        }

        if(isset($postData['search'])){ //p.lastName, p.firstName, p.jobTitle, p.email, d.name, l.name
            $search = $postData['search'];
            $employees = $employees->where(function($query) use ($search) {
                $query->where('personnel.firstName', 'LIKE', "%{$search}%")
                      ->orWhere('personnel.lastName', 'LIKE', "%{$search}%")
                      ->orWhere('personnel.jobTitle', 'LIKE', "%{$search}%")
                      ->orWhere('personnel.email', 'LIKE', "%{$search}%")
                      ->orWhere('department.name', 'LIKE', "%{$search}%")
                      ->orWhere('location.name', 'LIKE', "%{$search}%");
            });
        }

        //$employees = $employees->toRawSql();
        $employees = $employees->get();


        return json_encode($employees);
    }
}

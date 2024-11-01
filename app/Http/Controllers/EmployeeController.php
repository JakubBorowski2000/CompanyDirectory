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

    public function getEmployees()
    {
        $employees = Employee::select(
            "personnel.id","personnel.firstName","personnel.lastName","personnel.jobTitle","personnel.email","personnel.departmentID",
            "department.name as department_name",
            "location.name as location_name",
            )
        ->join('department', 'department.id', '=', 'personnel.departmentID')
        ->join('location', 'location.id', '=', 'department.locationID')
        ->get();


        return json_encode($employees);
    }
}

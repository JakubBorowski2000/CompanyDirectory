<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function show()
    {

        return view('employees');

        // tableRowEmp
        // <th scope="col">Name</th>
        // <th scope="col">Job Title</th>
        // <th scope="col">Email</th>
        // <th scope="col">Department</th>
        // <th scope="col">Location</th>
        // <th scope="col">Action</th>
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

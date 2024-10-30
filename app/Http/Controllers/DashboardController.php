<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showEmployees()
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
    public function showDepartments()
    {
        return view('departments');


        // tableRowDep
        // <th scope="col">Department</th>
        // <th scope="col">Location</th>
        // <th scope="col">Action</th>

    }

    public function showLocations()
    {
        return view('locations');

        // tableRowLoc
        // <th scope="col">Location</th>
        // <th scope="col">Action</th>
    }
}

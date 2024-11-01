<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function show()
    {
        return view('departments');


        // tableRowDep
        // <th scope="col">Department</th>
        // <th scope="col">Location</th>
        // <th scope="col">Action</th>

    }
}

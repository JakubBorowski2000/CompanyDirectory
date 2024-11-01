<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function show()
    {
        $tableHeadNames = ["Department", "Location", "Action"];

        return view('departments', ["tableHeadNames" => $tableHeadNames, "tableClass" => "tableRowDep"]);
    }
}

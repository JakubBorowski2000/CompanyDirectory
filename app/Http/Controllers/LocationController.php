<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function show()
    {
        $tableHeadNames = ["Location", "Action"];

        return view('locations', ["tableHeadNames" => $tableHeadNames, "tableClass" => "tableRowLoc"]);
    }
}

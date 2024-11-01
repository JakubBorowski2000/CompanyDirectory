<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function show()
    {
        return view('locations');

        // tableRowLoc
        // <th scope="col">Location</th>
        // <th scope="col">Action</th>
    }
}

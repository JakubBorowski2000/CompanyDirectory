<?php

namespace App\Http\Controllers;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function show()
    {
        $tableHeadNames = ["Location", "Action"];

        return view('locations', ["tableHeadNames" => $tableHeadNames, "tableClass" => "tableRowLoc", "page" => "locations"]);
    }
    public function getLocations(Request $request)
    {
        try{
            $postData = $request->all();
            // var_dump($postData); die; // Dumps and dies, displaying all POST data
            $locations = Location::select(
                "location.name as location_name",
            );
    
            if(isset($postData['search'])){ //p.lastName, p.firstName, p.jobTitle, p.email, d.name, l.name
                $search = $postData['search'];
                $locations = $locations->Where('location.name', 'LIKE', "%{$search}%");
            }
    
            //$departments = $departments->toRawSql();
            $locations = $locations->get();
        }catch(e){
            return json_encode(["status" => 500, "data" => "There has been an error"]);
        }


        return json_encode(["status" => 200, "data" => $locations]);
    }
}

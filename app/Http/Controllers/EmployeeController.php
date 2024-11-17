<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function show()
    {
        $tableHeadNames = ["Name", "Job Title", "Email", "Department", "Location", "Action"];

        return view('employees', ["tableHeadNames" => $tableHeadNames, "tableClass" => "tableRowEmp", "page" => "employees"]);
    }

    public function getEmployees(Request $request)
    {
        try{
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
        }catch(e){
            return json_encode(["status" => 500, "data" => "There has been an error"]);
        }


        return json_encode(["status" => 200, "data" => $employees]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:50',
            'lastName' => 'required|string|max:50',
            'jobTitle' => 'required|string|max:50',
            'email' => 'required|email',
            'departmentID' => 'required|exists:department,id',
        ]);
        
        try {
            // Attempt to create the employee
            $employee = Employee::create([
                'firstName' => $validatedData['firstName'],
                'lastName' => $validatedData['lastName'],
                'jobTitle' => $validatedData['jobTitle'],
                'email' => $validatedData['email'],
                'departmentID' => $validatedData['departmentID'],
            ]);
    
            // Return success response
            return response()->json(['message' => 'Employee created successfully.'], 201);
        } catch (\Exception $e) {
            // Log the error if needed
            \Log::error('Employee creation failed: ' . $e->getMessage());
    
            // Return error response with status code
            return response()->json([
                'error' => 'Failed to create employee.',
                'details' => $e->getMessage(), // Optionally include error details
            ], 500); // HTTP status 500: Internal Server Error
        }

    }
}

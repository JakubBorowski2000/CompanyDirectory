<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\LocationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/getAllEmployees', [EmployeeController::class, 'getEmployees'])->name("getAllEmployees");
Route::get('/getAllDepartments', [DepartmentController::class, 'getDepartments'])->name("getAllDepartments");
Route::get('/getAllLocations', [LocationController::class, 'getLocations'])->name("getAllLocations");
Route::post('/storeEmployees', [EmployeeController::class, 'store'])->name("storeEmployees");
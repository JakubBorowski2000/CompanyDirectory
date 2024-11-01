<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\Auth\CustomAuthController;


Route::get('/register', [CustomAuthController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [CustomAuthController::class, 'register']);

Route::get('/login', [CustomAuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [CustomAuthController::class, 'login']);

Route::post('/logout', [CustomAuthController::class, 'logout'])->name('logout');


Route::middleware(['auth'])->group(function () {

    Route::get('/employees', [EmployeeController::class, 'show']);

    Route::get('/departments', [DepartmentController::class, 'show']);

    Route::get('/locations', [LocationController::class, 'show']);
});
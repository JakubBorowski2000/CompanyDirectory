<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\CustomAuthController;


Route::get('/register', [CustomAuthController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [CustomAuthController::class, 'register']);

Route::get('/login', [CustomAuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [CustomAuthController::class, 'login']);

Route::post('/logout', [CustomAuthController::class, 'logout'])->name('logout');

Route::get('/home', function () {
    return 'Welcome to the Home Page!';
})->middleware('auth');
@extends('app')
@section('content')

<div class="container d-flex justify-content-center align-items-center min-vh-100">
    <form action="{{ route('register') }}" method="POST" class="w-50 bg-dark text-white bg-gradient rounded-2 px-3 py-3">
    @csrf
    <h1>Register</h1>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email"  name="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="password_confirmation" name="password_confirmation">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>
@endsection
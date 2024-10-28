@extends('app')
@section('content')

<div class="container d-flex justify-content-center align-items-center min-vh-100">
    <form action="{{ route('login') }}" method="POST" class="w-50 bg-dark text-white bg-gradient rounded-2 px-3 py-3">
    @csrf
        <h1>Login</h1>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email"  name="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>
@endsection
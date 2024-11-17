@extends('app')
@section('content')

<div id="preloader"></div>

@include('includes/nav')

<!-- EMPLOYEE INFO-->
<div id="employeeInfo" class="container bg-dark">
    <div class="row g-3 bg-dark text-white px-2 py-3">

    <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
        @include('includes/filters/location')
    </div>
        
    <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
        @include('includes/filters/department')
    </div>

    <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
        @include('includes/search')
    </div>

    <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-end">
    <button
        id="addNew"
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#addEditModal"
        >
        Add new
    </button>
    </div>

    </div>
    @include('includes/table')
</div>

@include('includes/modals/addEdit')

@include('includes/modals/delete')

@endsection
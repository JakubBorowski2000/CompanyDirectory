@extends('app')
@section('content')

<div id="preloader"></div>

@include('includes/nav')

<!-- DEPARTMENTS INFO-->
<div id="departmentLocationInfo" class="container bg-dark">
    <div class="row g-3 bg-dark text-white px-2 py-3">

    <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center">
        @include('includes/filters/location')
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center">
        @include('includes/search')
    </div>

    <div class="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
        @include('includes/addNew')
    </div>

    </div>
    @include('includes/table')
</div>

@include('includes/modals/addEdit')

@include('includes/modals/delete')

@endsection
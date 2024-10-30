@extends('app')
@section('content')

<div id="preloader"></div>

@include('includes/nav')


<!-- Locations INFO-->
<div id="locationsInfo" class="container bg-dark">
  <div class="row g-3 bg-dark text-white px-2 py-3">

    <div class="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center">
      @include('includes/search')
    </div>

    <div class="col-lg-4">

    </div>

    <div class="col-lg-4 col-md-12  col-sm-12 d-flex align-items-center justify-content-end">
      @include('includes/addNew')
    </div>

  </div>
  @include('includes/table')
</div>

@endsection
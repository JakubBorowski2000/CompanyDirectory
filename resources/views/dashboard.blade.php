@extends('app')
@section('content')

<div id="preloader"></div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div class="container">
        <a class="navbar-brand" href="#">Company Directory</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a id="employees" class="nav-link" href="">Employees</a>
            </li>
            <li class="nav-item">
              <a id="departments" class="nav-link" href="">Departments</a>
            </li>
            <li class="nav-item">
              <a id="locations" class="nav-link" href="">Locations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- EMPLOYEE INFO-->
    <div id="employeeInfo" class="container bg-dark">
      <div class="row g-3 bg-dark text-white px-2 py-3">
        <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
          <div class="">
            <label class="labelMinWidth" for="locationFilter">Location:</label>
          </div>
          <div class="ms-4 filterMax">
            <select
              id="locationFilter"
              class="form-select bg-secondary text-white"
            ></select>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
          <div class="">
            <label class="labelMinWidth" for="departmentFilter">Department:</label>
          </div>
          <div class="ms-4 filterMax">
            <select
              id="departmentFilter"
              class="form-select bg-secondary text-white"
            ></select>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
          <div class="inputMax">
            <input
              id="employeeInput"
              class="form-control me-2 bg-secondary text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <button id="employeeSearch" class="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-end">
          <button
            id="addNewEmployee"
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#addEditEmployeeModal"
          >
            Add new
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 overflow-auto tableRowEmp">
          <table
          id="employeeTable"
          class="display nowrap table table-striped table-dark text-white"
          style="width: 100%"
          >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- DEPARTMENTS INFO-->
    <div id="departmentLocationInfo" class="container bg-dark">
      <div class="row g-3 bg-dark text-white px-2 py-3">
        <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center">
          <div class="">
            <label for="locationFilter">Location:</label>
          </div>
          <div class="ms-4 filterMax">
            <select
              id="departmentLocationFilter"
              class="form-select bg-secondary text-white"
            ></select>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center">
          <div class="inputMax">
            <input
              id="departmentInput"
              class="form-control me-2 bg-secondary text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <button id="departmentSearch" class="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
          <button
            id="addNewDepartment"
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#addEditDepartmentModal"
          >
            Add new
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 overflow-auto tableRowDep">
          <table
          id="departmentTable"
          class="display nowrap table table-striped table-dark text-white"
          style="width: 100%"
        >
          <thead>
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        </div>
      </div>
    </div>
    <!-- Locations INFO-->
    <div id="locationsInfo" class="container bg-dark">
      <div class="row g-3 bg-dark text-white px-2 py-3">
        <div class="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center">
          <div class="inputMax">
            <input
              id="locationsInput"
              class="form-control me-2 bg-secondary text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <button id="locationsSearch" class="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4 col-md-12  col-sm-12 d-flex align-items-center justify-content-end">
          <button
            id="addNewLocations"
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#addEditLocationsModal"
          >
            Add new
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 overflow-auto tableRowLoc">
          <table
          id="locationsTable"
          class="display nowrap table table-striped table-dark text-white"
          style="width: 100%"
        >
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        </div>
      </div>
    </div>


    <div
      class="modal fade"
      id="addEditEmployeeModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark bg-gradient text-white">
          <form id="employeeForm" method="POST">
            <div class="modal-header">
              <h5 class="modal-title" id="addEditEmployeeModalTitle"></h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer justify-content-end">
              <button type="submit" class="btn btn-success">Save</button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addEditDepartmentModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark bg-gradient text-white">
          <form id="departmentForm" method="POST">
            <div class="modal-header">
              <h5 class="modal-title" id="addEditDepartmentModalTitle"></h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-success">Save</button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addEditLocationsModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark bg-gradient text-white">
          <form id="locationsForm" method="POST">
            <div class="modal-header">
              <h5 class="modal-title" id="addEditLocationsModalTitle"></h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-success">Save</button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


    <div
      class="modal fade"
      id="deleteEmployeeConfirmation"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark bg-gradient text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteEmployeeConfirmationModalTitle">Delete Employee</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">

          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="deleteDepartmentConfirmation"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark bg-gradient text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteDepartmentConfirmationModalTitle">Delete Depertment</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">

          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="deleteLocationsConfirmation"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark bg-gradient text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteLocationsConfirmationModalTitle">Delete Location</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">

          </div>
        </div>
      </div>
    </div>
@endsection
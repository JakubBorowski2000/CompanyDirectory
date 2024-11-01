async function getPersonnelByID(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getPersonnelByID.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function deletePersonnelByID(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/deletePersonnelByID.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function getAllFiltered(filter) {
    let result;
    try {
      result = await $.ajax({
        url: "libs/php/getAllFiltered.php",
        type: "POST",
        dataType: "json",
        data: {
            ...filter
        },
      });
      return result;
    } catch (error) {
      console.error(error);
    }
}
async function getAllDepartments() {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getAllDepartments.php",
      type: "POST",
      dataType: "json",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function getDepartmentByID(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getDepartmentByID.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function checkDepartmentDependancies(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/checkDepartmentDependancies.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function deleteDepartmentByID(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/deleteDepartmentByID.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function getAllDepartmentsFiltered(filter) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getAllDepartmentsFiltered.php",
      type: "POST",
      dataType: "json",
      data: {
          ...filter
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function getAllLocations() {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getAllLocations.php",
      type: "POST",
      dataType: "json",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function getAllLocationsFiltered(filter) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getAllLocationsFiltered.php",
      type: "POST",
      dataType: "json",
      data: {
          ...filter
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function getLocationsByID(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/getLocationsByID.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function checkLocationDependancies(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/checkLocationDependancies.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function deleteLocationsByID(id) {
  let result;
  try {
    result = await $.ajax({
      url: "libs/php/deleteLocationsByID.php",
      type: "POST",
      dataType: "json",
      data: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
var departments;
var locations;
$("#employeeTable").on( "click", "tr", function() {
  addOnClickEditDelete();
});
async function displayAllEmployees(filter){
  let [result, departmentsTemp, locationsTemp] = await Promise.all([getAllFiltered(filter), getAllDepartments(), getAllLocations()]);
  departments = departmentsTemp;
  locations = locationsTemp;
  //Populate location filter
  if(locations){
    $('#locationFilter').empty();
    let locationsOptions = "<option value='all'>All</option>";
    for (const [key, value] of Object.entries(locations.data)) {
      let selected = "";
      if(employeeFilter.location  == value.name){
        selected = "selected";
      }
      locationsOptions += `<option value='${value.name}' ${selected}>${value.name}</option>`;
    }
    $('#locationFilter').append(locationsOptions);
  }
  //Populate department filter
  if(departments){
    $('#departmentFilter').empty();
    let departmentsOptions = "<option value='all'>All</option>";
    for (const [key, value] of Object.entries(departments.data)) {
      let selected = "";
      if(employeeFilter.department  == value.name){
        selected = "selected";
      }
      departmentsOptions += `<option value='${value.name}' ${selected}>${value.name}</option>`;
    }
    $('#departmentFilter').append(departmentsOptions);
  }
  //Clear and Populate Table
  employeeTable.clear().draw();
  if(result){
    if(result.status.code == "200"){
      for (const [key, value] of Object.entries(result.data)) {
        employeeTable.row.add( [
          `${value.lastName}, ${value.firstName}`,
          value.jobTitle,
          value.email,
          value.department,
          value.location,
          `<div class="d-flex justify-content-end"><button type="button" value="${value.id}" class="editButton btn btn-warning" data-bs-toggle="modal" data-bs-target="#addEditEmployeeModal">Edit</button><button value="${value.firstName}-${value.lastName}-${value.id}" class="ms-2 deleteButton btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeeConfirmation">Delete</button></div>`
        ] ).draw( false );
      }
    }
  }
  addOnClickEditDelete();
  window.dispatchEvent(new Event('resize')); //Absolutely necessary so table doesnt clip after data is added
}
$("#departmentTable").on( "click", "tr", function() {
  addOnClickEditDeleteDepartment();
});
async function displayAllDepartments(filter){
  let [departmentsFiltered, locationsTemp] = await Promise.all([getAllDepartmentsFiltered(departmentFilter), getAllLocations()]);
  locations = locationsTemp;
  //Populate location filter
  if(locations){
    $('#departmentLocationFilter').empty();
    let locationsOptions = "<option value='all'>All</option>";
    for (const [key, value] of Object.entries(locations.data)) {
      let selected = "";
      if(departmentFilter.location  == value.name){
        selected = "selected";
      }
      locationsOptions += `<option value='${value.name}' ${selected}>${value.name}</option>`;
    }
    $('#departmentLocationFilter').append(locationsOptions);
  }
  //Clear and Populate Table
  departmentTable.clear().draw();
  if(departmentsFiltered && locations){
    if(departmentsFiltered.status.code == "200" && locations.status.code == "200"){
      for (const [key, value] of Object.entries(departmentsFiltered.data)) {
        departmentTable.row.add( [
          value.name,
          value.location,
          `<div class="d-flex justify-content-end"><button type="button" value="${value.id}" class="editDepartmentButton btn btn-warning" data-bs-toggle="modal" data-bs-target="#addEditDepartmentModal">Edit</button><button value="${value.name}-${value.id}" class="ms-2 deleteDepartmentButton btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteDepartmentConfirmation">Delete</button></div>`
        ] ).draw( false );
      }
    }
  }
  addOnClickEditDeleteDepartment();
  window.dispatchEvent(new Event('resize')); //Absolutely necessary so table doesnt clip after data is added
}

async function displayAllLocations(filter){
  let locations = await getAllLocationsFiltered(filter);
  //Clear and Populate Table
  loationsTable.clear().draw();
  if(locations){
    if(locations.status.code == "200"){
      for (const [key, value] of Object.entries(locations.data)) {
        loationsTable.row.add( [
          value.name,
          `<div class="d-flex justify-content-end"><button type="button" value="${value.id}" class="editLocationsButton btn btn-warning" data-bs-toggle="modal" data-bs-target="#addEditLocationsModal">Edit</button><button value="${value.name}-${value.id}" class="ms-2 deleteLocationsButton btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteLocationsConfirmation">Delete</button></div>`
        ] ).draw( false );
      }
    }
  }
  addOnClickEditDeleteLocations();
  window.dispatchEvent(new Event('resize')); //Absolutely necessary so table doesnt clip after data is added
}

////////////////////////// NAV Buttons //////////////////////////


$('#employees').on("click", function( event ) {
  $('#employees').addClass("active");
  $('#departments').removeClass("active");
  $('#locations').removeClass("active");
  $("#employeeInfo").show();
  $("#departmentLocationInfo").hide();
  $("#locationsInfo").hide();

  $("#employeeInput").val("");
  employeeFilter = {
    location: "",
    department: "",
    search: ""
  }

  event.preventDefault();
  if(tableSelected != "employees"){
    displayAllEmployees(employeeFilter);
    tableSelected = "employees";
  }
});

$('#departments').on("click", function( event ) {
  $('#departments').addClass("active");
  $('#employees').removeClass("active");
  $('#locations').removeClass("active");
  $("#departmentLocationInfo").show();
  $("#employeeInfo").hide();
  $("#locationsInfo").hide();

  $("#departmentInput").val("");
  departmentFilter = {
    location: "",
    search: "",
  }

  event.preventDefault();
  if(tableSelected != "departments"){
    displayAllDepartments(departmentFilter);
    tableSelected = "departments";
  }
});

$('#locations').on("click", function( event ) {
  $('#departments').removeClass("active");
  $('#employees').removeClass("active");
  $('#locations').addClass("active");
  $("#departmentLocationInfo").hide();
  $("#employeeInfo").hide();
  $("#locationsInfo").show();

  $("#locationsInput").val("");
  locationsFilter = {
    search: "",
  }

  event.preventDefault();
  if(tableSelected != "locations"){
    displayAllLocations(locationsFilter);
    tableSelected = "locations";
  }
});

////////////////////////// Employee Filters //////////////////////////
var employeeFilter = {
  location: "",
  department: "",
  search: "",
  limit: "" //TODO
}
var departmentFilter = {
  location: "",
  search: "",
  limit: "" //TODO
}
var locationsFilter = {
  search: "",
  limit: "" //TODO
}
var tableSelected = "";

var employeeSearch = function() {
  employeeFilter.search = $('#employeeInput').val();
  displayAllEmployees(employeeFilter);
}
var departmentSearch = function() {
  departmentFilter.search = $('#departmentInput').val();
  displayAllDepartments(departmentFilter);
}

var locationsSearch = function() {
  locationsFilter.search = $('#locationsInput').val();
  displayAllLocations(locationsFilter);
}

$( "#locationFilter" ).change(function() {
  if( $( this ).val() == "all" ){
    employeeFilter.location = "";
  }else{
    employeeFilter.location = $( this ).val();
  }
  displayAllEmployees(employeeFilter);
});
$( "#departmentFilter" ).change(function() {
  if( $( this ).val() == "all" ){
    employeeFilter.department = "";
  }else{
    employeeFilter.department = $( this ).val();
  }
  displayAllEmployees(employeeFilter);
});
$( "#employeeInput" ).on("input", function() {
  if( $( this ).val() == "" ){
    employeeFilter.search = "";
    displayAllEmployees(employeeFilter);
  }
});
$('#employeeInput').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    employeeSearch();
  }
});
$('#employeeSearch').on("click", employeeSearch);
$( "#departmentLocationFilter" ).change(function() {
  if( $( this ).val() == "all" ){
    departmentFilter.location = "";
  }else{
    departmentFilter.location = $( this ).val();
  }
  displayAllDepartments(departmentFilter);
});
$( "#departmentInput" ).on("input", function() {
  if( $( this ).val() == "" ){
    departmentFilter.search = "";
    displayAllDepartments(departmentFilter);
  }
});
$('#departmentInput').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    departmentSearch();
  }
});
$('#departmentSearch').on("click", departmentSearch);
$( "#locationsInput" ).on("input", function() {
  if( $( this ).val() == "" ){
    locationsFilter.search = "";
    displayAllLocations(locationsFilter);
  }
});
$('#locationsInput').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    locationsSearch();
  }
});
$('#locationsSearch').on("click", locationsSearch);

////////////////////////// Add/edit employee Modal form //////////////////////////
function resetForm(){
  $(".form-control").removeClass("is-invalid");
  $(".invalid-feedback").remove();
}
function createForm(){
  $("#addEditEmployeeModal .modal-body").empty();
  $("#addEditEmployeeModal .modal-body").append(`
      <div id="firstName-group" class="form-group my-2">
        <label for="firstName">First Name</label>
        <input class="form-control bg-secondary text-white" id="firstName"/>
      </div>
      <div id="lastName-group" class="form-group my-2">
        <label for="lastName">Last Name</label>
        <input class="form-control bg-secondary text-white" id="lastName"/>
      </div>
      <div id="jobTitle-group" class="form-group my-2">
        <label for="jobTitle">Job Title</label>
        <input class="form-control bg-secondary text-white" id="jobTitle"/>
      </div>
      <div id="email-group" class="form-group my-2">
        <label for="email">Email address</label>
        <input type="email" class="form-control bg-secondary text-white" id="email"/>
      </div>
      <div id="department-group" class="form-group my-2">
        <label for="departmentModalFilter">Department</label>
        <select id="departmentModalFilter" class="form-select bg-secondary text-white"></select>
      </div>`);
    $("#addEditEmployeeModal .modal-footer").show();
}
function createDepartmentForm(){
  $("#addEditDepartmentModal .modal-body").empty();
  $("#addEditDepartmentModal .modal-body").append(`
      <div id="departmentName-group" class="form-group my-2">
        <label for="departmentName">Department Name</label>
        <input class="form-control bg-secondary text-white" id="departmentName"/>
      </div>
      <div id="departmentLocation-group" class="form-group my-2">
        <label for="departmentLocationModalFilter">Location</label>
        <select id="departmentLocationModalFilter" class="form-select bg-secondary text-white"></select>
      </div>`);
    $("#addEditDepartmentModal .modal-footer").show();
}
function createLocationsForm(){
  $("#addEditLocationsModal .modal-body").empty();
  $("#addEditLocationsModal .modal-body").append(`
      <div id="locationsName-group" class="form-group my-2">
        <label for="locationsName">Location Name</label>
        <input class="form-control bg-secondary text-white" id="locationsName"/>
      </div>`);
  $("#addEditLocationsModal .modal-footer").show();
}
$('#addNewEmployee').on("click", function() {
  createForm();
  $("#personnelID").remove();
  $('#addEditEmployeeModalTitle').text("Add new Employee");
  $('#firstName').val("");
  $('#lastName').val("");
  $('#jobTitle').val("");
  $('#email').val("");
  $('#departmentModalFilter').empty();
  let departmentsOptions = "";
  for (const [key, value] of Object.entries(departments.data)) {
    departmentsOptions += `<option value='${value.id}'>${value.name}</option>`;
  }
  $('#departmentModalFilter').append(departmentsOptions);
});
function addOnClickEditDelete(){
  $('.editButton').off();
  $('.editButton').on("click", async function() {
    createForm();
    $("#personnelID").remove();
    $('#addEditEmployeeModalTitle').text("Edit Employee");
    let result = await getPersonnelByID($(this).val());
    if(result){
      if(result.data.personnel.length > 0){
        let chosenPersonnel = result.data.personnel[0];
        $('#firstName').val(chosenPersonnel.firstName);
        $('#lastName').val(chosenPersonnel.lastName);
        $('#jobTitle').val(chosenPersonnel.jobTitle);
        $('#email').val(chosenPersonnel.email);
        $('#employeeForm').append(`<input type="hidden" id="personnelID" name="personnelID" value="${chosenPersonnel.id}">`);
        $('#departmentModalFilter').empty();
        let departmentsOptions = "";
        let departmentIDtemp = chosenPersonnel.departmentID;
        var departmentName = "";
        result.data.department.forEach(dep => {
          if(dep.id == departmentIDtemp){
            departmentName = dep.name;
          }
        });
        for (const [key, value] of Object.entries(departments.data)) {
          let selected = "";
          if(departmentName  == value.name){
            selected = "selected";
          }
          departmentsOptions += `<option value='${value.id}' ${selected}>${value.name}</option>`;
        }
        $('#departmentModalFilter').append(departmentsOptions);
      }else{
        $('#addEditEmployeeModal .modal-body').empty();
        $('#addEditEmployeeModal .modal-body').append("<h5 class='text-center'>This employee does not exist.</h5>");
      }
    }
  });
  $('.deleteButton').off();
  $('.deleteButton').on("click", function() {
    const [employeeFirstName, employeeLastName, employeeId] = $(this).val().split("-");
    $("#deleteEmployeeConfirmation .modal-body").empty();
    $("#deleteEmployeeConfirmation .modal-body").append(`
      <h5 class="mb-3">Are you sure you want to delete employee ${employeeFirstName} ${employeeLastName}?</h5>
      <button id="deleteEmployee" class="btn btn-success">Yes</button>
      <button class="btn btn-danger" data-bs-dismiss="modal">No</button>
    `);
    $('#deleteEmployee').on("click", async function() {
      let result = await deletePersonnelByID(employeeId);
      if(result){
        if(result.status.code == "200"){
          $("#deleteEmployeeConfirmation .modal-body").empty();
          $("#deleteEmployeeConfirmation .modal-body").append(`<div class="alert alert-success">Employee has been successfully deleted.</div>`);
        }else{
          $("#deleteEmployeeConfirmation .modal-body").empty();
          $("#deleteEmployeeConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this employee. Please try again later.</div>`);
        }
      }else{
        $("#deleteEmployeeConfirmation .modal-body").empty();
        $("#deleteEmployeeConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this employee. Please try again later.</div>`);
      }
      displayAllEmployees(employeeFilter);
    });
  });
}
$('#addNewDepartment').on("click", function() {
  createDepartmentForm();
  $("#departmentID").remove();
  $('#addEditDepartmentModalTitle').text("Add new Department");
  $('#departmentName').val("");
  $('#departmentLocationModalFilter').empty();
  let locationOptions = "";
  for (const [key, value] of Object.entries(locations.data)) {
    locationOptions += `<option value='${value.id}'>${value.name}</option>`;
  }
  $('#departmentLocationModalFilter').append(locationOptions);
});
function addOnClickEditDeleteDepartment(){
  $('.editDepartmentButton').off();
  $('.editDepartmentButton').on("click", async function() {
    createDepartmentForm();

    $("#departmentID").remove();
    $('#addEditDepartmentModalTitle').text("Edit Department");
    let result = await getDepartmentByID($(this).val());
    if(result){
      if(result.data.length > 0){
        let chosenDepartment = result.data[0];
        $('#departmentName').val(chosenDepartment.name);
        $('#departmentForm').append(`<input type="hidden" id="departmentID" name="departmentID" value="${chosenDepartment.id}">`);
        $('#departmentLocationModalFilter').empty();
        let locationOptions = "";
        let locationIDtemp = chosenDepartment.locationID;
        var locationName = "";
        locations.data.forEach(dep => {
          if(dep.id == locationIDtemp){
            locationName = dep.name;
          }
        });
        for (const [key, value] of Object.entries(locations.data)) {
          let selected = "";
          if(locationName  == value.name){
            selected = "selected";
          }
          locationOptions += `<option value='${value.id}' ${selected}>${value.name}</option>`;
        }
        $('#departmentLocationModalFilter').append(locationOptions);
      }else{
        $('#addEditDepartmentModal .modal-body').empty();
        $('#addEditDepartmentModal .modal-body').append("<h5 class='text-center'>This employee does not exist.</h5>");
      }
    }
  });
  $('.deleteDepartmentButton').off();
  $('.deleteDepartmentButton').on("click", async function() {
    const [departmentName, departmentId] = $(this).val().split("-");
    let checkDependancies = await checkDepartmentDependancies(departmentId);
    if(checkDependancies.status.code == "400"){
      if(checkDependancies.data.personnel){
        $("#deleteDepartmentConfirmation .modal-body").empty();
        $("#deleteDepartmentConfirmation .modal-body").append(`<div class="alert alert-danger">A department cannot be deleted if there are still employees associated with it. Please edit or delete corresponding employees and try again later.</div>`);
      }else{
        $("#deleteDepartmentConfirmation .modal-body").empty();
        $("#deleteDepartmentConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error please try again later.</div>`);
      }
    } else {
      $("#deleteDepartmentConfirmation .modal-body").empty();
      $("#deleteDepartmentConfirmation .modal-body").append(`
        <h5 class="mb-3">Are you sure you want to delete department ${departmentName}?</h5>
        <button id="deleteDepartment" class="btn btn-success">Yes</button>
        <button class="btn btn-danger" data-bs-dismiss="modal">No</button>
      `);
      $('#deleteDepartment').on("click", async function() {
        let result = await deleteDepartmentByID(departmentId);
        if(result){
          if(result.status.code == "200"){
            $("#deleteDepartmentConfirmation .modal-body").empty();
            $("#deleteDepartmentConfirmation .modal-body").append(`<div class="alert alert-success">Department has been successfully deleted.</div>`);
          } else if (result.status.code == "400") {
            if(result.data.personnel){
              $("#deleteDepartmentConfirmation .modal-body").empty();
              $("#deleteDepartmentConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this department. A department cannot be deleted if there are still employees associated with it. Please edit or delete corresponding employees and try again later.</div>`);
            }
          }else{
            $("#deleteDepartmentConfirmation .modal-body").empty();
            $("#deleteDepartmentConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this department. Please try again later.</div>`);
          }
        }else{
          $("#deleteDepartmentConfirmation .modal-body").empty();
          $("#deleteDepartmentConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this department. Please try again later.</div>`);
        }
        displayAllDepartments(departmentFilter);
      });
    }
  });
}
$('#addNewLocations').on("click", function() {
  createLocationsForm();
  $("#locationsID").remove();
  $('#addEditLocationsModalTitle').text("Add new Location");
  $('#locationsName').val("");
});
function addOnClickEditDeleteLocations(){
  $('.editLocationsButton').off();
  $('.editLocationsButton').on("click", async function() {
    createLocationsForm();

    $("#locationsID").remove();
    $('#addEditLocationsModalTitle').text("Edit Location");
     let result = await getLocationsByID($(this).val());
    if(result){
      if(result.data.length > 0){
        let chosenLocations = result.data[0];
        $('#locationsName').val(chosenLocations.name);
        $('#locationsForm').append(`<input type="hidden" id="locationsID" name="locationsID" value="${chosenLocations.id}">`);
      }else{
        $('#addEditDepartmentModal .modal-body').empty();
        $('#addEditDepartmentModal .modal-body').append("<h5 class='text-center'>This location does not exist.</h5>");
      }
    }
  });
  $('.deleteLocationsButton').off();
  $('.deleteLocationsButton').on("click", async function() {
    const [locationsName, locationsId] = $(this).val().split("-");
    let checkDependancies = await checkLocationDependancies(locationsId);
    if(checkDependancies.status.code == "400"){
      if(checkDependancies.data.personnel){
        $("#deleteLocationsConfirmation .modal-body").empty();
        $("#deleteLocationsConfirmation .modal-body").append(`<div class="alert alert-danger">A location cannot be deleted if there are still departments associated with it. Please edit or delete corresponding departments and try again later.</div>`);
      }else{
        $("#deleteLocationsConfirmation .modal-body").empty();
        $("#deleteLocationsConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error please try again later.</div>`);
      }
    } else {
      $("#deleteLocationsConfirmation .modal-body").empty();
      $("#deleteLocationsConfirmation .modal-body").append(`
        <h5 class="mb-3">Are you sure you want to delete location ${locationsName}?</h5>
        <button id="deleteLocations" class="btn btn-success">Yes</button>
        <button class="btn btn-danger" data-bs-dismiss="modal">No</button>
      `);
      $('#deleteLocations').on("click", async function() {
        let result = await deleteLocationsByID(locationsId);
        if(result){
          if(result.status.code == "200"){
            $("#deleteLocationsConfirmation .modal-body").empty();
            $("#deleteLocationsConfirmation .modal-body").append(`<div class="alert alert-success">Location has been successfully deleted.</div>`);
          } else if (result.status.code == "400") {
            if(result.data.personnel){
              $("#deleteLocationsConfirmation .modal-body").empty();
              $("#deleteLocationsConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this location. A location cannot be deleted if there are still departments associated with it. Please edit or delete corresponding departments and try again later.</div>`);
            }
          }else{
            $("#deleteLocationsConfirmation .modal-body").empty();
            $("#deleteLocationsConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this location. Please try again later.</div>`);
          }
        }else{
          $("#deleteLocationsConfirmation .modal-body").empty();
          $("#deleteLocationsConfirmation .modal-body").append(`<div class="alert alert-danger">There has been an error when deleting this location. Please try again later.</div>`);
        }
        displayAllLocations(locationsFilter);
      });
    }
  });
}


$("#employeeForm").submit(function (event) {
  resetForm();
  let formData = {
    action: "insert",
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    jobTitle: $("#jobTitle").val(),
    email: $("#email").val(),
    departmentID: $("#departmentModalFilter").val(),
  };
  //If user is editing existing personnel
  let successMessage = "Employee has been successfully added.";
  if($("#personnelID").length != 0){
    formData.action = "update";
    formData.id = $("#personnelID").val();
    successMessage = "Employee has been successfully updated.";
  }
  $.ajax({
    type: "POST",
    url: "libs/php/insertEditPersonnel.php",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if (data.status.code == "400") {
      let errors = data.data[0];
      if (errors.firstName) {
        $("#firstName").addClass("is-invalid");
        $("#firstName-group").append(
          `<div class="invalid-feedback">${errors.firstName}</div>`
        );
      }
      if (errors.lastName) {
        $("#lastName").addClass("is-invalid");
        $("#lastName-group").append(
          `<div class="invalid-feedback">${errors.lastName}</div>`
        );
      }
      if (errors.jobTitle) {
        $("#jobTitle").addClass("is-invalid");
        $("#jobTitle-group").append(
          `<div class="invalid-feedback">${errors.jobTitle}</div>`
        );
      }
      if (errors.email) {
        $("#email").addClass("is-invalid");
        $("#email-group").append(
          `<div class="invalid-feedback">${errors.email}</div>`
        );
      }
      if (errors.department) {
        $("#departmentModalFilter").addClass("is-invalid");
        $("#department-group").append(
          `<div class="invalid-feedback">${errors.department}</div>`
        );
      }
    } else {
      $("#addEditEmployeeModal .modal-body").empty();
      $("#addEditEmployeeModal .modal-body").append(`<div class="alert alert-success">${successMessage}</div>`);
      $("#addEditEmployeeModal .modal-footer").hide();
      displayAllEmployees(employeeFilter);
    }
  }).fail(function (data) {
    $("#addEditEmployeeModal .modal-body").empty();
    $("#addEditEmployeeModal .modal-body").append(`<div class="alert alert-danger">Employee could not be changed, please try again later.</div>`);
    $("#addEditEmployeeModal .modal-footer").hide();
  });
  event.preventDefault();
});

$("#departmentForm").removeAttr('onsubmit').submit(function (event) {
  resetForm();
  let formData = {
    action: "insert",
    name: $("#departmentName").val(),
    locationID: $("#departmentLocationModalFilter").val(),
  };
  //If user is editing existing personnel
  let successMessage = "Department has been successfully added.";
  if($("#departmentID").length != 0){
    formData.action = "update";
    formData.id = $("#departmentID").val();
    successMessage = "Department has been successfully updated.";
  }
  $.ajax({
    type: "POST",
    url: "libs/php/insertEditDepartment.php",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if (data.status.code == "400") {
      let errors = data.data[0];
      if (errors.name) {
        $("#departmentName").addClass("is-invalid");
        $("#departmentName-group").append(
          `<div class="invalid-feedback">${errors.name}</div>`
        );
      }
      if (errors.location) {
        $("#departmentLocationModalFilter").addClass("is-invalid");
        $("#departmentLocation-group").append(
          `<div class="invalid-feedback">${errors.location}</div>`
        );
      }
    } else {
      $("#addEditDepartmentModal .modal-body").empty();
      $("#addEditDepartmentModal .modal-body").append(`<div class="alert alert-success">${successMessage}</div>`);
      displayAllDepartments(departmentFilter);
      $("#addEditDepartmentModal .modal-footer").hide();
    }
  }).fail(function (data) {
    $("#addEditDepartmentModal .modal-body").empty();
    $("#addEditDepartmentModal .modal-body").append(`<div class="alert alert-danger">Department could not be changed, please try again later.</div>`);
    $("#addEditDepartmentModal .modal-footer").hide();
  });
  event.preventDefault();
});

$("#locationsForm").removeAttr('onsubmit').submit(function (event) {
  resetForm();
  let formData = {
    action: "insert",
    name: $("#locationsName").val()
  };
  //If user is editing existing personnel
  let successMessage = "Location has been successfully added.";
  if($("#locationsID").length != 0){
    formData.action = "update";
    formData.id = $("#locationsID").val();
    successMessage = "Location has been successfully updated.";
  }
  $.ajax({
    type: "POST",
    url: "libs/php/insertEditLocations.php",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if (data.status.code == "400") {
      let errors = data.data[0];
      if (errors.name) {
        $("#locationsName").addClass("is-invalid");
        $("#locationsName-group").append(
          `<div class="invalid-feedback">${errors.name}</div>`
        );
      }
    } else {
      $("#addEditLocationsModal .modal-body").empty();
      $("#addEditLocationsModal .modal-body").append(`<div class="alert alert-success">${successMessage}</div>`);
      $("#addEditLocationsModal .modal-footer").hide();
      displayAllLocations(locationsFilter);
    }
  }).fail(function (data) {
    $("#addEditLocationsModal .modal-body").empty();
    $("#addEditLocationsModal .modal-body").append(`<div class="alert alert-danger">Location could not be changed, please try again later.</div>`);
    $("#addEditLocationsModal .modal-footer").hide();
  });
  event.preventDefault();
});

////////////////////////// JQUERY Table //////////////////////////
paginationType = "simple_numbers";
if ($(window).width() < 440) {
  paginationType = "simple";
}
var employeeTable = $('#employeeTable').DataTable({
  // scrollY: "800px",
  // scrollCollapse: true,
  colReorder: false,
  responsive: {
    details: {
      type: 'column',
      target: 'tr'
    }
  },
  searching: false, 
  paging: false,
  // "pagingType": paginationType,
  // "lengthMenu": [ 5, 10, 20, 50, 100 ],
  info: false
});

var departmentTable = $('#departmentTable').DataTable({
  // scrollY: "400px",
//  scrollCollapse: true,
  colReorder: false,
  responsive: {
    details: {
      type: 'column',
      target: 'tr'
    }
  },
  searching: false, 
  paging: false,
  // "pagingType": paginationType,
  // "lengthMenu": [ 5, 10, 20, 50, 100 ],
  info: false,
  "columns": [
    null,
    null,
    {"width": "200px"}
  ]
});

var loationsTable = $('#locationsTable').DataTable({
  // scrollY: "400px",
 // scrollCollapse: true,
  colReorder: false,
  responsive: {
    details: {
      type: 'column',
      target: 'tr'
    }
  },
  searching: false, 
  paging: false,
  // "pagingType": paginationType,
  // "lengthMenu": [ 5, 10, 20, 50, 100 ],
  info: false,
  "columns": [
    null,
    {"width": "200px"}
  ]
});


////////////////////////// On FIRST ENTRY GO TO EMPLOYEES //////////////////////////
$('#employees').trigger("click");

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

createForm();
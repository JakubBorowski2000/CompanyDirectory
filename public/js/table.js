filter = {
    location: "",
    department: "Legal",
    search: ""
}

async function displayData(filter){
    result = await getAllEmployees(filter);
    console.log(result.data);


    //Clear and Populate Table
    table.clear().draw();
    if(result){
        if(result.status == "200"){
            for (const [key, value] of Object.entries(result.data)) {
                table.row.add( [
                    `${value.lastName}, ${value.firstName}`,
                    value.jobTitle,
                    value.email,
                    value.department_name,
                    value.location_name,
                    `<div class="d-flex justify-content-end"><button type="button" value="${value.id}" class="editButton btn btn-warning" data-bs-toggle="modal" data-bs-target="#addEditEmployeeModal">Edit</button><button value="${value.firstName}-${value.lastName}-${value.id}" class="ms-2 deleteButton btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeeConfirmation">Delete</button></div>`
                ] ).draw( false );
            }
        }
    }
    //window.dispatchEvent(new Event('resize')); //Absolutely necessary so table doesnt clip after data is added

}


displayData(filter);



























////////////////////////// JQUERY Table //////////////////////////
paginationType = "simple_numbers";
if ($(window).width() < 440) {
  paginationType = "simple";
}

if( $('#employeeTable').length ){
    var table = $('#employeeTable').DataTable({
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
}

if( $('#departmentTable').length ){
    var table = $('#departmentTable').DataTable({
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
}

if( $('#locationsTable').length ){
    var table = $('#locationsTable').DataTable({
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
}
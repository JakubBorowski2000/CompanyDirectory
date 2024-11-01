async function getAllEmployees(filter) {
    let result;
    try {
      result = await $.ajax({
        url: getAllEmployeesUrl,
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

employeeFilter = {
    location: "",
    department: "",
    search: ""
  }

async function get(employeeFilter){
    result = await getAllEmployees(employeeFilter);
    console.log(result);
}

get(employeeFilter);

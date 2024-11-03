async function getAllEmployees(filter = {}) {
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

async function getAllDepartments(filter = {}) {
    let result;
    try {
      result = await $.ajax({
        url: getAllDepartmentsUrl,
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

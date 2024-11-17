async function getAllEmployees(filter = {}) {
    let result;
    try {
      result = await $.ajax({
        url: getAllEmployeesUrl,
        type: "GET",
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
        type: "GET",
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

async function getAllLocations(filter = {}) {
    let result;
    try {
      result = await $.ajax({
        url: getAllLocationsUrl,
        type: "GET",
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


async function storeEmployee(filter = {}) {
  let result;
  try {
    result = await $.ajax({
      url: storeEmployees,
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

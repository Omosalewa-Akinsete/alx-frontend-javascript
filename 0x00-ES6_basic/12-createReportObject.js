export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [key, value] of Object.entries(employeesList)) {
    allEmployees[key] = [...value];
  }

  function getNumberOfDepartments() {
    const keys = Object.keys(employeesList);
    return keys.length;
  }

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}

// Write your solution in this file!
const employee = {
    name: '1',
    streetAddress: '2',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = {...employee };
    newEmp[key] = value
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const deleteEmp = {...employee};
    delete deleteEmp[key]
    return deleteEmp; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee
    delete newEmployee[key]
    return newEmployee
}
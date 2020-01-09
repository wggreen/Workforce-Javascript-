import { getEmployees } from "./EmployeeProvider.js"
import { getComputers } from "./ComputerProvider.js"
import EmployeeList from "./EmployeeList.js"
import { getDepartments } from "./DepartmentProvider.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList)
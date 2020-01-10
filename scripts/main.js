import { getEmployees } from "./EmployeeProvider.js"
import { getComputers } from "./ComputerProvider.js"
import EmployeeList from "./EmployeeList.js"
import { getDepartments } from "./DepartmentProvider.js"
import { getLocations } from "./LocationProvider.js"
import { getCustomers } from "./CustomerProvider.js"
import { getEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import { CustomerList } from "./CustomerList.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)
import { useEmployees } from "./EmployeeProvider.js"
import { useComputers } from "./ComputerProvider.js"
import { useDepartments } from "./DepartmentProvider.js"
import { useLocations } from "./LocationProvider.js"
import { useCustomers } from "./CustomerProvider.js"
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import Employee from "./Employee.js"

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find the computer assigned to this employee
            const computer = computers.find(
                computer => computer.id === employee.computerId
            )
            // Find the department that the employee works in
            const department = departments.find(
                department => department.id === employee.departmentId
            )
            // Find the location that the employee works at
            const location = locations.find(
                location => location.id === employee.locationId
            )
            // Find all customer relationships for the current employee
            const relatedCustomers = empCust.filter(ec => 
                ec.employeeId === employee.id
            )

            // For each relationship, find the corresponding company
            const foundCustomersArray = relatedCustomers.map(
                rc => {
                    const foundCustomer = customers.find(
                        customer => 
                            customer.id === rc.customerId
                    )
                return foundCustomer
                }
            )

            // Get HTML representation of product
            const html = Employee(employee, computer, department, location, foundCustomersArray)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList
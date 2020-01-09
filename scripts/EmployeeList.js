import { useEmployees } from "./EmployeeProvider.js"
import { useComputers } from "./ComputerProvider.js"
import { useDepartments } from "./DepartmentProvider.js"
import Employee from "./Employee.js"

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this product's type
            const computer = computers.find(
                computer => computer.id === employee.computerId
            )
            const department = departments.find(
                department => department.id === employee.departmentId
            )

            // Get HTML representation of product
            const html = Employee(employee, computer, department)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList
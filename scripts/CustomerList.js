import { useEmployees } from "./EmployeeProvider.js"
import { useCustomers } from "./CustomerProvider.js"
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import Customer from "./Customer.js"

const contentTarget = document.querySelector(".companies_info")

export const CustomerList = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = customers.map(customer => {

            let companyInfo = {}

            // Find all employee relationships for the current customer
            const relatedEmployees = empCust.filter(
                currentEC => 
                    currentEC.customerId === customer.id
            )

            // For each relationship, find the corresponding employee
            const foundEmployeesArray = relatedEmployees.map(
                currentRE => {
                    const foundEmployee = employees.find(
                        employee => {
                            return employee.id === currentRE.employeeId
                        }
                    )
                return foundEmployee
                }
            )

            companyInfo.number = foundEmployeesArray.length
            companyInfo.name = customer.name

            // Get HTML representation of product
            const html = Customer(companyInfo)

            return html
        }).join("")
    }

    render()
}

export default CustomerList
const Employee = (employee, computer, department, location, customers) => {
    return `
        <section class="employee">
            <header>
                <h2>${employee.firstName} ${employee.lastName}</h2>
            </header>
            <div>
                Computer model: ${computer.model}
            </div>
            <div>
                Computer year: ${computer.year}
            </div>
            <div>
                Department: ${department.name}
            </div>
            <div>
                Location: ${location.name}
            </div>
            <div>
                <h1>Currently working for...</h1>
                <ol>
                    ${
                        customers.map(customer => {
                            return `<li>${customer.name}</li>`
                        }).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default Employee
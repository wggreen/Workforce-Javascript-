const Employee = (employee, computer, department) => {
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
        </section>
    `
}

export default Employee
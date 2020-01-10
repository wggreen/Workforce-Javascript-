const Customer = (companyInfo) => {
    return `
        <section class="companyInfo">
            <header>
                <h2>${companyInfo.name}</h2>
            </header>
            <div>
                Number of employees assigned: <br> ${companyInfo.number}
            </div>
        </section>
    `
}

export default Customer
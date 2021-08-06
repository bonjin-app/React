const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId',
}

export const getDepartmentCollection = () => {
    return [
        {id: 1, title: 'Development'},
        {id: 2, title: 'Marketing'},
        {id: 3, title: 'Accounting'},
        {id: 4, title: 'HR'},
    ]
}

export const insertEmployee = (data) => {
    let employees = getEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export const updateEmployee = (data) => {
    let employees = getEmployees();
    let recordIndex = employees.findIndex(x => x.id === data.id);
    employees[recordIndex] = { ...data };
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}    

export const generateEmployeeId = () => {
    if (localStorage.getItem(KEYS.employeeId) == null) {
        localStorage.setItem(KEYS.employeeId, '0');
    }
    let id = parseInt(localStorage.getItem(KEYS.employeeId));
    console.log(id)
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}

export const getEmployees = () => {
    if (localStorage.getItem(KEYS.employees) === null) {
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    }
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));

    let departments = getDepartmentCollection();
    console.log(employees)
    return employees.map(x => ({
        ...x,
        department: departments[x.departmentId-1].title
    }))
}
enum role{

    developer='developer', designer="designer", manager="manager"
}

interface Employee{

    ID:number,
    name:string,
    Role:role,
    intern:boolean,
}

let array:Employee[] = [{
    ID: 1,
    name: "John",
    Role: role.developer,
    intern: false
},{
    ID: 2,
    name: "Jane",
    Role: role.designer,
    intern: true
}];

function showEmployeeDetails(employee: Employee): void {
    console.log(employee.name)
    console.log(employee.Role);
}


//enum

enum ProjectStatus{

    Pending, InProgess, Completed
}
// interface generic
interface project<T>{

    name:string,
    status:ProjectStatus,
    data:T
}

let project:project<string[]>={

    name: "Project A",
    status: ProjectStatus.Pending,
    data: ["typeSCript", "git"]
}

//function check Employee

function checkManager(Employee:Employee):boolean{

    if(Employee.Role=="manager"){
        return true
    }else{
        return false
    }
}

checkManager({ID: 1, name: "John", Role: role.manager, intern: false})
console.log(checkManager({ID: 1, name: "John", Role: role.manager, intern: false}));
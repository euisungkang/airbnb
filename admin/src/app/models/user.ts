export class User {
    Id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;

    constructor(Id, name, surname, email, password, role) {
        this.Id = Id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
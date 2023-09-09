import { Employee } from "./employee";

export class Driver {
    licence_number: string;
    job_description: string;
    employee : Employee;

    constructor(private employees : Employee) {
        this.licence_number = "";
        this.job_description = "";
        this.employee = employees;
    }
}
import { Employee } from "./employee";

export class Driver {
    licence_number: string;
    job_description: string;
    employee : Employee;

    constructor(licence_number: string, job_description: string, employee: Employee) {
        this.licence_number = licence_number;
        this.job_description = job_description;
        this.employee = employee;
    }
}
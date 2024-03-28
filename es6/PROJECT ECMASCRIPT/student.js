// student.js
import { ENDPOINT } from "./configuredb.js";

export default class Student {
    static MAX_NOTE = 20;

    constructor(name, age, note) {
        this.name = name;
        this.age = age;
        this.note = note;
    }

    getAge = () => (new Date().getFullYear() - new Date(this.age).getFullYear());

    isAdmitted = () => this.note >= 10;

    static allStudent = async function() {
        const response = await fetch(ENDPOINT);
        return await response.json();
    }

    addStudent = async function() {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name,
                date: this.age,
                note: parseFloat(this.note)
            })
        });
        return response;
    }

    static deleteStudent = async function (id) {
        const response = await fetch(`${ENDPOINT}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
}

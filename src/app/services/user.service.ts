import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:8090/api/user';

    constructor() { }

    getUser(documentType: string, documentNumber: string) {
        const endpoint = `${this.apiUrl}?documentType=${documentType}&documentNumber=${documentNumber}`;
        return axios.get(endpoint);
    }
}

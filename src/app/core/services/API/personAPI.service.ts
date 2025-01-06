import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PersonApiService {
	private baseUrl = 'http://localhost:5000/persons';

	constructor(private http: HttpClient) {}

	getPersons(): Observable<any> {
		return this.http.get(`${this.baseUrl}`);
	}

	getPersonByID(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	// postPerson(endpoint: string, data: any): Observable<any> {
	// 	return this.http.post(`${this.baseUrl}/${endpoint}`, data);
	// }

	// putData(endpoint: string, data: any): Observable<any> {
	// 	return this.http.put(`${this.baseUrl}/${endpoint}`, data);
	// }

	// deleteData(endpoint: string): Observable<any> {
	// 	return this.http.delete(`${this.baseUrl}/${endpoint}`);
	// }
}

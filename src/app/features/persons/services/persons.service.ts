import { Injectable } from '@angular/core';
import { PersonApiService } from '../../../core/services/API/personAPI.service';

@Injectable({
	providedIn: 'root',
})
export class PersonsService {
	// TODO : refaire les types quelque part
	constructor(private personApiService: PersonApiService) {}

	getPersonsList(): { id: number; name: string }[] {
		// ici
		let persons: { id: number; name: string }[] = [];
		this.personApiService.getPersons().subscribe((data) => {
			persons = data;
		});

		return persons;
	}

	getPersonByID(id: number) {
		// ici
		let person;
		this.personApiService.getPersonByID(id).subscribe((data) => {
			person = data;
		});

		return person;
	}

	// creation

	// update

	// delete
}

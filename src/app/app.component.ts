import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './shared/components/buttons/button/button.component';
import { PersonApiService } from './core/services/API/personAPI.service';

@Component({
	selector: 'app-root',
	imports: [CommonModule, RouterModule, ButtonComponent],
	// sert de template a toute l'application
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	title = 'TestV17';
	list: { id: number; name: string }[] = [];
	personOne = null;

	constructor(private personService: PersonApiService) {}

	ngOnInit(): void {
		this.personService.getPersons().subscribe((data) => {
			this.list = data;
		});
		// this.personService.getPersonByID(1).subscribe((data) => {
		// 	this.personOne = data;
		// });
	}

	// users = await fetch('https://api.publicapis.org/').then() ...
}

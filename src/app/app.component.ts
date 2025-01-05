import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { PersonApiService } from './services/personAPI.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, ButtonComponent],
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	title = 'TestV17';
	list: { id: number; name: string }[] = [];
	personOne = null;

	constructor(private personService: PersonApiService) {}

	ngOnInit(): void {
		// this.personService.getPersons().subscribe((data) => {
		// 	this.list = data;
		// });
		// this.personService.getPersonByID(1).subscribe((data) => {
		// 	this.personOne = data;
		// });
	}

	// users = await fetch('https://api.publicapis.org/').then() ...
}

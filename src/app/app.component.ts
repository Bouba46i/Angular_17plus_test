import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, ButtonComponent],
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'TestV17';

	// users = await fetch('https://api.publicapis.org/').then() ...
}

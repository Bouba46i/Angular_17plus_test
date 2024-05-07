import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [RouterLink, RouterLinkActive, ButtonComponent],
	templateUrl: './home-page.component.html',
	styles: ``,
})
export class HomePageComponent {
	title = 'TestV17';

	// users = await fetch('https://api.publicapis.org/').then() ...
}

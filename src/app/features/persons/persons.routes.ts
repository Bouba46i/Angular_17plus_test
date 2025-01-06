import { Route, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { PersonsPageComponent } from './pages/persons-page/persons-page.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';

export const personsModuleRouteConfig: Route = {
	path: 'persons',
	component: PersonsPageComponent,
	title: 'Persons list page',
	children: [
		{
			path: ':id',
			component: PersonPageComponent,
			title: 'Person detail page',
		},
	],
};

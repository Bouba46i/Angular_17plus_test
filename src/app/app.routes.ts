import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonsPageComponent } from './features/persons/pages/persons-page/persons-page.component';
import { PersonPageComponent } from './features/persons/pages/person-page/person-page.component';

export const routeConfig: Routes = [
	// si pas en commentaire, page en double
	// {
	// 	path: '',
	// 	component: AppComponent,
	// 	title: 'Home page',
	// },
	// personsModuleRouteConfig
	{
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
	},
	// TODO: une page 404 & une home page
	// {
	// 	path: '',
	// 	redirectTo: '/', pathMatch: 'full'
	// },
	// {
	// 	path: '**',
	// 	redirectTo: '/',
	// 	pathMatch: 'full',
	// },
	// {
	// 	path: '**',
	// 	component: PageNotFoundComponent,
	// 	title: 'Oups, page not found',
	// },
];

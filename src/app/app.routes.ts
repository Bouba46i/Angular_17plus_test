import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';

export const routes: Routes = [
	{
		path: '',
		title: 'home page of the app',
		component: HomePageComponent,
		// children: [
		//   {
		//     path: 'users',
		//     title: 'users of the app',
		//     component: ChildAComponent,
		//   },
		//   {
		//     path: 'films',
		//     title: 'films on the app',
		//     component: ChildBComponent,
		//   },
		// ]
	},
	// { path: '', redirectTo: '/home', pathMatch: 'full' },
	// { path: 'home', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: '**', component: PageNotFoundPageComponent }, // 404 ici
];

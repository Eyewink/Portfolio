import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./start/start.module').then(m => m.StartModule), data: { animation: 'Start' } },
	{ path: 'disclaimer', loadChildren: () => import('./disclaimer/disclaimer.module').then(m => m.DisclaimerModule), data: { animation: 'Disclaimer', state: 1 } },
	{ path: 'examples', loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule), data: { animation: 'Examples', state: 2 } },
	{ path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule), data: { animation: 'Contacts', state: 5 } },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}

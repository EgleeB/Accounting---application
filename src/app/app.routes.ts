import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';
import { AccountListComponent } from './account-list/account-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AccountComponent
    },
    {
        path: 'accounts',
        component: AccountListComponent
    },
    {
        path: 'accountname/:searchQuery',
        component: AccountListComponent
    },
    {
        path: 'account/:accountNumber',
        component: AccountComponent
    },
    {
        path: 'contacts', 
        component: ContactsComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];

import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';
import { AccountListComponent } from './account-list/account-list.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccountComponent,
  },
  {
    path: 'userzone',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'accounts',
    component: AccountListComponent,
  },
  {
    path: 'accountname/:searchQuery',
    component: AccountListComponent,
  },
  {
    path: 'account/:accountNumber',
    component: AccountComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

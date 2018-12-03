import { RouterModule, Routes } from '@angular/router';
//components

import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component'
import { UserRegisterComponent } from './user-register/user-register.component';
import { MemberListComponent } from './members-list/members-list.component';

const app_routers: Routes = [
    { path: 'home', component: UsersListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: UserRegisterComponent },
    { path: 'members', component: MemberListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
    
export const app_routing = RouterModule.forRoot(app_routers);
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  //{ path: 'newuser', component: NewContactComponent },
  //{ path: 'contact', component: ContactComponent },
  //{ path: 'edit/:id', component: EditContactComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

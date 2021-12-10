import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddContactComponent } from './pages/add-contact/add-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddContactComponent
  },
  {
    path: '**',
    redirectTo: 'add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

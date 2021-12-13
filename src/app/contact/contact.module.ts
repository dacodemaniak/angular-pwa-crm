import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddContactComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: []
})
export class ContactModule { }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressInterface } from '../../interfaces/address-interface';
import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() public size: number = 5;
  @Output() public emitAddress: EventEmitter<AddressInterface> = new EventEmitter();


  public address: string = '';
  public addresses: any[] = [];

  constructor(
    private addressApiService: AddressApiService
  ) { }

  ngOnInit(): void {}

  public getAddress(): void {
    this.addressApiService.getAddress(this.address, this.size)
      .subscribe((results: any[]) => {
        this.addresses = results;
      });
  }

  public onClick(address: any): void {
    const addressObject: AddressInterface = {
      name: address.name,
      postcode: address.postcode,
      city: address.city
    }
    this.emitAddress.emit(addressObject);

    this.addresses = [];

    this.address = '';
  }

  public clearList() {
    this.addresses = [];
    this.address = '';
  }
}

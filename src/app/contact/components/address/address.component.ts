import { Component, OnInit } from '@angular/core';
import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  public address: string = '';

  constructor(
    private addressApiService: AddressApiService
  ) { }

  ngOnInit(): void {}

  public getAddress(): void {
    this.addressApiService.getAddress(this.address)
      .subscribe((results: any) => {
        console.log(JSON.stringify(results));
      });
  }

}

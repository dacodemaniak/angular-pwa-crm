import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AddressInterface } from '../../interfaces/address-interface';
import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {
  @Input() public size: number = 5;
  @Output() public emitAddress: EventEmitter<AddressInterface> = new EventEmitter();

  private search$: Subject<string> = new Subject();

  public address: string = '';
  public addresses: any[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private addressApiService: AddressApiService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchTerm: string) => {
      this.getAddress()
    }));
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      })
  }
  public addressChange(e: any): void {
    const search: string = e.target.value.trim();
    if (search.length >= 10) {
      this.search$.next(search);
    }
  }

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

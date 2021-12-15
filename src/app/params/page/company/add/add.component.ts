import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CompanyService } from 'src/app/params/services/company.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public companyForm: FormGroup = new FormGroup({});

  constructor(
    private companyService: CompanyService
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this.companyForm.controls;
  }

  ngOnInit(): void {
    const control: FormControl = new FormControl(
      '',
      [
        Validators.required
      ]
    );
    this.companyForm.addControl('name', control);
  }

  public onSubmit(): void {
    if (this.companyForm.valid) {
      this.companyService.add(
        this.companyForm.value
      ).pipe(
        take(1)
      ).subscribe((response: HttpResponse<any>) => {
        console.log(response);
      })
    }
  }
}

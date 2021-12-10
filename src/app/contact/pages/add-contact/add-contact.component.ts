import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  public contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      lastName: [
        '',
        Validators.required
      ],
      firstName: [
        '',
        Validators.required
      ]
    })
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.httpClient.post<any>(
        'http://localhost:5000/person',
        this.contactForm.value,
        {
          observe: 'response'
        }
      ).subscribe((response: HttpResponse<any>) => {
        console.log(JSON.stringify(response));
      })
    }
  }

}

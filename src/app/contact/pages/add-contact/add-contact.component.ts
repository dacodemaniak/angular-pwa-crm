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

  public occupations: string[] = [
    'Teacher',
    'Mathematician',
    'Developer'
  ];

  public companies: string[] = [
    'Airbus',
    'Pierre Favre',
    'Aelion'
  ];

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
      ],
      occupation : [
        '',
        Validators.required
      ],
      company: [
        ''
      ],
      zipCode: [
        ''
      ],
      city: [
        ''
      ],
      streetName: [
        ''
      ]
    })

    this.contactForm.controls.zipCode.disable();
    this.contactForm.controls.city.disable();
    this.contactForm.controls.streetName.disable();
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

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

function titleValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidTitle: true };
  }
}

function linkValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^456/)) {
    return { invalidLink: true };
  }
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  title: AbstractControl;
  link: AbstractControl;

  titleString: string;
  linkString: string;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'title': ['', Validators.compose([
        Validators.required, titleValidator
      ])],
      'link': ['', Validators.compose([
        Validators.required, linkValidator
      ])]
    });

    this.title = this.form.controls['title'];
    this.link = this.form.controls['link'];

    this.title.valueChanges.subscribe(
      (value: string) => {
        console.log('title changed to:', value);
      }
    );

    this.link.valueChanges.subscribe(
      (value: string) => {
        console.log('link changed to:', value);
      }
    );
    // or use in template:
    // myForm.controls['title']

    this.form.valueChanges.subscribe(
      (value: string) => {
        console.log('form changed to:', value);
      }
    )
  }

  ngOnInit() {
    this.titleString = '';
    this.linkString = ''; 
  }

  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }



}

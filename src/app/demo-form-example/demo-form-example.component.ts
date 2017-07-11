import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-example',
  templateUrl: './demo-form-example.component.html',
  styleUrls: ['./demo-form-example.component.css']
})
export class DemoFormExampleComponent implements OnInit {

  	myForm: FormGroup;

  	constructor(fb: FormBuilder) { 
	  	this.myForm = fb.group({
	  		'sku': ['ABC123'],

	  	});
	  }

  ngOnInit() {
  }

  person: string;

   onSubmit(form: any): void {
    form.name  = '11';

  	console.log('El dato: ', form);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
})
export class NgStyleExampleComponent implements OnInit {
	color: string;
	fontSize: number;
	style: {
		'background-color': string,
		'border-radius': string,
		border?: string,
		width?: string,
		height?: string
	}

  constructor() { }

  ngOnInit() {
  	this.fontSize = 46;
  	this.color = 'salmon';
  	this.style = {
  		'background-color': '#ccc',
		'border-radius': '50px',
		'width': '30px',
		'height': '30px'
  	}
  }

  apply(color: string, fontSize: number):void {
  	this.color = color;
  	this.fontSize = fontSize;
  }
}

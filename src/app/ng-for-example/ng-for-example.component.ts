import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html'
})
export class NgForExampleComponent implements OnInit {

	cities: string[];
	people: Object[];
	peopleByCity: Object[];

  constructor() { }

  ngOnInit() {
  	this.cities = ['Lima', 'CDMX', 'Santiago', 'Berlin'];
  	this.people = [
  		{name: 'Visho', city: 'Lima', age: 25},
  		{name: 'Wilson', city: 'Berlin', age: 24},
  		{name: 'Edson', city: 'Santiago', age: 23},
  		{name: 'Shonatan', city: 'CDMX', age: 19}
  	];

  	this.peopleByCity = [
  		{
  			city: 'Berlin',
  			people: [
  				{name: 'Wilson', city: 'Berlin', age: 24},
  				{name: 'Gemerson', city: 'Berlin', age: 30}
  			]
  		},
  		{
  			city: 'Lima',
  			people: [
  				{name: 'Visho', city: 'Lima', age: 24},
  				{name: 'Katia', city: 'Lima', age: 25}
  			]
  		},

  		{
  			city: 'Loundres',
  			people: [
  				{name: 'Jhon', city: 'Loundres', age: 24},
  				{name: 'Cesar', city: 'Loundres', age: 25},
  				{name: 'Oscar', city: 'Loundres', age: 18}
  			]
  		},

  	];
  }

}

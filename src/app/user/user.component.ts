import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	userName: string;

  	constructor(private UserService: UserService) { }

  	signIn(): void {
  		this.UserService.setUser({
  			name: 'Luis Reyes'
  		});

  		this.userName = this.UserService.getUser().name;
  	}


  ngOnInit() {
  }

}

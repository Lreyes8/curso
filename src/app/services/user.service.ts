import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	user: any;

	setUser(newUser) {
		this.user = newUser;
		return this;
	}

	getUser(): any {
		return this.user;
	}
}

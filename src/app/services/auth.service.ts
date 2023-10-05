import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor() {}

	authUser(user: User) {
		let userArray = [];
		if (localStorage.getItem("users")) {
			userArray = JSON.parse(localStorage.getItem("users") as string);
		}
		return userArray.find(
			(p: { email: string; password: string }) =>
				p.email === user.email && p.password === user.password
		);
	}

	isLoggedIn() {
		return !!localStorage.getItem("token");
	}
}

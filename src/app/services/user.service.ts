import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
	providedIn: "root",
})
export class UserService {
	constructor() {}
	registerUser(user: User) {
		let users: User[];
		let localItem: string | null;

		localItem = localStorage.getItem("users");
		if (localItem == null) {
			users = [];
		} else {
			users = JSON.parse(localItem);
		}
		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));
	}
}

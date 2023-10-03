import { Component } from "@angular/core";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
})
export class LoginComponent {
	socials = ["facebook", "twitter", "google"];
	showPassword = false;
}

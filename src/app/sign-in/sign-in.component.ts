import { Component } from "@angular/core";

@Component({
	selector: "app-sign-in",
	templateUrl: "./sign-in.component.html",
})
export class SignInComponent {
	socials = ["facebook", "twitter", "google"];
	showPassword = false;
}

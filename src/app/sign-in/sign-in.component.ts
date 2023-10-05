import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-sign-in",
	templateUrl: "./sign-in.component.html",
})
export class SignInComponent {
	socials = ["facebook", "twitter", "google"];
	showPassword = false;
	hasSubmitted = false;
	signInForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {
		this.signInForm = this.fb.group({
			email: ["", Validators.compose([Validators.required, Validators.email])],
			password: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(6),
					Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
				]),
			],
		});
	}
	get f() {
		return this.signInForm.controls;
	}
	onSubmit() {
		this.hasSubmitted = true;
		const token = this.authService.authUser(this.signInForm.value);
		if (this.signInForm.valid) {
			if (token) {
				localStorage.setItem("token", token.email);
				alert("You have signned in successfully");
				this.signInForm.reset();
				this.router.navigate(["/"]);
			} else {
				alert("Username or Password is wrong");
			}
			this.hasSubmitted = false;
		}
	}
}

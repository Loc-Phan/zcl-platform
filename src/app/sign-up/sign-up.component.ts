import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: "app-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent {
	showPassword = false;
	countries = ["Việt Nam", "Japan", "China"];
	signInForm = this.fb.group({
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
	hasSubmitted = false;
	constructor(private fb: FormBuilder) {}
	get f() {
		return this.signInForm.controls;
	}

	ngOnInit(): void {}

	onSubmit(): void {
		console.log(this.signInForm.controls.password.errors);
	}
}

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ICountries, RegService } from "../services/reg.service";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";

@Component({
	selector: "app-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent {
	showPassword = false;
	hasSubmitted = false;
	public countries: ICountries[] = [];
	signUpForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private userService: UserService,
		private regService: RegService,
		private router: Router
	) {
		this.signUpForm = this.fb.group({
			firstName: ["", Validators.required],
			lastName: ["", Validators.required],
			email: ["", Validators.compose([Validators.required, Validators.email])],
			password: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(6),
					Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
				]),
			],
			country: ["", Validators.required],
			agree: [false, Validators.requiredTrue],
		});
	}
	get f() {
		return this.signUpForm.controls;
	}

	ngOnInit(): void {
		this.regService.getCountries().subscribe((data) => (this.countries = data));
	}

	onSubmit(): void {
		this.hasSubmitted = true;
		if (this.signUpForm.valid) {
			this.userService.registerUser(this.signUpForm.value);
			this.signUpForm.reset();
			this.hasSubmitted = false;
			alert("You have signned up successfully");
			this.router.navigate(["/sign-in"]);
		}
	}
}

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ICountries, SignService } from "../services/sign-up.service";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

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
		private signUpService: SignService,
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
		this.signUpService
			.getCountries()
			.subscribe((data) => (this.countries = data));
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

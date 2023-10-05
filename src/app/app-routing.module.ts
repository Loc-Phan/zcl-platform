import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
	{ path: "", component: HomeComponent, canActivate: [AuthGuard] },
	{ path: "sign-in", component: SignInComponent },
	{ path: "sign-up", component: SignUpComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

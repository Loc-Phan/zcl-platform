import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DetailAppComponent } from "./detail-app/detail-app.component";
import { AuthGuard } from "../shared/guards/auth.guard";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "",
				component: HomeComponent,
			},
			{
				path: "application/:slug",
				component: DetailAppComponent,
			},
		],
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [HomeComponent],
	exports: [RouterModule],
})
export class HomeRoutingModule {}

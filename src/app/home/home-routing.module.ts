import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProjectBuzzComponent } from "./project-buzz/project-buzz.component";
import { AuthGuard } from "../shared/guards/auth.guard";
import { StoriesComponent } from "./stories/stories.component";
import { TeamComponent } from "./team/team.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { DocumentsComponent } from "./documents/documents.component";
import { EnviromentsComponent } from "./enviroments/enviroments.component";
import { LogsComponent } from "./logs/logs.component";
import { AppMenuComponent } from "../shared/app-menu/app-menu.component";
import { AppHeaderComponent } from "../shared/app-header/app-header.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "",
				component: HomeComponent,
			},
			{
				path: "application/:slug/buzz",
				component: ProjectBuzzComponent,
			},
			{
				path: "application/:slug/stories",
				component: StoriesComponent,
			},
			{
				path: "application/:slug/team",
				component: TeamComponent,
			},
			{
				path: "application/:slug/feedback",
				component: FeedbackComponent,
			},
			{
				path: "application/:slug/documents",
				component: DocumentsComponent,
			},
			{
				path: "application/:slug/enviroments",
				component: EnviromentsComponent,
			},
			{
				path: "application/:slug/logs",
				component: LogsComponent,
			},
		],
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [
		HomeComponent,
		ProjectBuzzComponent,
		StoriesComponent,
		TeamComponent,
		FeedbackComponent,
		DocumentsComponent,
		EnviromentsComponent,
		LogsComponent,
		AppMenuComponent,
		AppHeaderComponent,
	],
	exports: [RouterModule],
})
export class HomeRoutingModule {}

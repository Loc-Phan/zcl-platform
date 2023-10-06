import { Component } from "@angular/core";

@Component({
	selector: "team-app",
	templateUrl: "./stories.component.html",
})
export class StoriesComponent {
	activeTab: number = 1;
	tabs = [
		{
			idx: 1,
			value: "Overview",
		},
		{
			idx: 2,
			value: "Sprint Status",
		},
		{
			idx: 3,
			value: "Story Archive",
		},
	];
}

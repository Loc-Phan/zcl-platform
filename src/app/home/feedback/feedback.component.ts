import { Component } from "@angular/core";

@Component({
	selector: "team-app",
	templateUrl: "./feedback.component.html",
	styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent {
	activeTab: number = 1;
	tabs = [
		{
			idx: 1,
			value: "Open",
		},
		{
			idx: 2,
			value: "Handled",
		},
		{
			idx: 3,
			value: "Accepted",
		},
		{
			idx: 4,
			value: "Closed",
		},
	];
}

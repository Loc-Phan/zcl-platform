import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
})
export class HomeComponent {
	activeTab: number = 1;
	tabs = [
		{
			idx: 1,
			value: "All",
		},
		{
			idx: 2,
			value: "Pinned",
		},
	];
	apps = [
		{
			name: "SLA_Task",
			url: "",
			src: "1",
		},
		{
			name: "SLA_Task",
			url: "",
			src: "2",
		},
		{
			name: "SLA_Task",
			url: "",
			src: "3",
		},
		{
			name: "SLA_Task",
			url: "",
			src: "4",
		},
		{
			name: "SLA_Task",
			url: "",
			src: "5",
		},
		{
			name: "SLA_Task",
			url: "",
			src: "6",
		},
	];
}

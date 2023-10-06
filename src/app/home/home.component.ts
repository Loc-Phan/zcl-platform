import { Component } from "@angular/core";
import { HomeService, IApps } from "../services/home.service";

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
	public apps: IApps[] = [];

	constructor(private homeService: HomeService) {}

	ngOnInit(): void {
		this.homeService.getApps().subscribe((data) => (this.apps = data));
	}
}

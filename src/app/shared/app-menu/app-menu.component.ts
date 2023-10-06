import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export interface IAppHeader {
	id: number;
	menu: string;
	subMenuList: {
		id: number;
		subMenu: string;
		url: string;
	}[];
}

@Component({
	selector: "app-menu-app",
	templateUrl: "./app-menu.component.html",
})
export class AppMenuComponent implements OnInit {
	slug: string | null = "0";
	menuList: IAppHeader[] = [];
	url: string = "";
	constructor(private route: ActivatedRoute, private router: Router) {}
	ngOnInit(): void {
		this.slug = this.route.snapshot.paramMap.get("slug");
		this.menuList = [
			{
				id: 1,
				menu: "Collaborate",
				subMenuList: [
					{
						id: 1,
						subMenu: "Project Buzz",
						url: `/application/${this.slug}/buzz`,
					},
					{
						id: 2,
						subMenu: "Stories",
						url: `/application/${this.slug}/stories`,
					},
					{ id: 3, subMenu: "Team", url: `/application/${this.slug}/team` },
					{
						id: 4,
						subMenu: "Feedback",
						url: `/application/${this.slug}/feedback`,
					},
					{
						id: 5,
						subMenu: "Documents",
						url: `/application/${this.slug}/documents`,
					},
				],
			},
			{
				id: 2,
				menu: "Deploy",
				subMenuList: [
					{
						id: 1,
						subMenu: "Enviroments",
						url: `/application/${this.slug}/enviroments`,
					},
					{ id: 2, subMenu: "Logs", url: `/application/${this.slug}/logs` },
				],
			},
		];
		this.url = this.router.url;
	}
}

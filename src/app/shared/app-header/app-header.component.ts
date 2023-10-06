import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HomeService, IApps } from "src/app/services/home.service";

@Component({
	selector: "app-header-app",
	templateUrl: "app-header.component.html",
})
export class AppHeaderComponent {
  slug: string | null = "0";
  app: IApps | undefined;
	constructor(
		private route: ActivatedRoute,
		private homeService: HomeService
	) {}
	ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    // fake data respone
    this.homeService.getApps().subscribe((data) => {
      this.app = data.find((item)=>String(item.id)===this.slug)
    });
  }
}

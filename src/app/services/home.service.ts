import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IApps {
	id: number;
	name: string;
	src: string;
	des: string;
}

@Injectable({
	providedIn: "root",
})
export class HomeService {
	private appsURL: string = "/assets/json/apps.json";

	constructor(private http: HttpClient) {}

	getApps(): Observable<IApps[]> {
		return this.http.get<IApps[]>(this.appsURL);
	}
}

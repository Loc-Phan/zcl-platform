import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface ICountries {
	country: String;
}

@Injectable({
	providedIn: "root",
})
export class RegService {
	private _countriesURL: string = "/assets/countries.json";

	constructor(private http: HttpClient) {}

	getCountries(): Observable<ICountries[]> {
		return this.http.get<ICountries[]>(this._countriesURL);
	}
}

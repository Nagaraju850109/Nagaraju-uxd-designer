import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Experience} from "../../models/experience";
import {Degree} from "../../models/degree";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BasicProcess} from "../../models/basic-process";

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

    experiences: Array<Experience> = [];
    degrees: Array<Degree> = [];
    basicProcess: Array<BasicProcess> = [];
    private experiencesURL: string = 'assets/information-data/experiences.json';
    private degreesURL: string = 'assets/information-data/degrees.json';
    private basicProcessURL: string = 'assets/information-data/basic-process.json';

    constructor(private http: HttpClient) {
        this.loadExperiences();
        this.loadDegrees();
        this.loadBasicProcess();
    }

    loadExperiences = (): void => {
        this.http.get(this.experiencesURL).subscribe((res: any) => this.experiences = res.map((x: any): Experience => Object.assign<Experience, any>(new Experience(), x)));
    }

    loadDegrees = (): void => {
        this.http.get(this.degreesURL).subscribe((res: any) => this.degrees = res.map((x: any): Degree => Object.assign<Degree, any>(new Degree(), x)));
    }

    loadBasicProcess = (): void => {
        this.http.get(this.basicProcessURL).subscribe((res: any) => this.basicProcess = res.map((x: any): BasicProcess => Object.assign<BasicProcess, any>(new BasicProcess(), x)));
    }

}

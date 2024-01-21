import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {CaseStudy} from "../../models/case-study";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgbDropdownModule, NgbNav, NgbNavContent, NgbNavItem, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
    selector: 'app-work',
    standalone: true,
    imports: [CommonModule, HttpClientModule, NgIf, NgbDropdownModule, NgbNav, NgbNavItem, NgbNavOutlet, NgbNavContent, RouterLink],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})
export class WorkComponent implements OnInit {

    workActiveId = 'case-studies';

    contentSwitch: boolean = true;
    caseStudiesData: Array<CaseStudy> = [];
    galleryData: Array<{ id: number, imageUrl: string }> = [];
    private caseStudiesDataURL: string = 'assets/information-data/case-studies.json';
    private galleryDataURL: string = 'assets/information-data/gallery-images.json';

    constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
        this.loadCaseStudiesData();
        this.loadGalleryData();
    }

    ngOnInit(): void {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['switch']) {
                this.contentSwitch = params['switch'].toLowerCase() === 'true';
            }
            this.workActiveId = params['tab'] ?? 'case-studies';
        });
    }

    loadCaseStudiesData = () => {
        this.http.get(this.caseStudiesDataURL).subscribe((res: any): void => {
            this.caseStudiesData = res.map((x: any): CaseStudy => {
                const caseStudy: CaseStudy = new CaseStudy();
                caseStudy.id = x.id ?? -1;
                caseStudy.imageUrl = x.imageUrl ?? '';
                caseStudy.title = x.title ?? '';
                caseStudy.subTitle = x.subTitle ?? '';
                caseStudy.tenure = x.tenure ?? '';
                caseStudy.referenceLink= x.referenceLink ?? '';
                return caseStudy;
            });
        });
    }

    loadGalleryData = () => {
        this.http.get(this.galleryDataURL).subscribe((res: any): void => {
            this.galleryData = res.map((x: any): { id: number, imageUrl: string } => ({id: x.id ?? -1, imageUrl: x.imageUrl ?? ''}));
        });
    }

  openInNewTab = (url: string): void => {
    if (url.trim().length > 0) {
      window.open(url, '_blank');
    }
  }
}

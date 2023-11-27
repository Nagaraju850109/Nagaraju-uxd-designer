import {Component} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {Testimonial} from "../../models/testimonial";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FeaturedWork} from "../../models/featured-work";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HttpClientModule, NgForOf, NgIf],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    testimonials: Array<Testimonial> = [];
    featuredWorks: Array<FeaturedWork> = [];
    private testimonialsURL: string = '/assets/information-data/testimonials.json';
    private featuredWorksURL: string = '/assets/information-data/featured-works.json';

    constructor(private http: HttpClient, private router: Router) {
        this.loadFeaturedWorks();
        this.loadTestimonials();
    }

    loadTestimonials = (): void => {
      this.http.get(this.testimonialsURL).subscribe((res: any) => this.testimonials = res.map((x: any): Testimonial => Object.assign<Testimonial, any>(new Testimonial(), x)));
    }

    loadFeaturedWorks = (): void => {
        this.http.get(this.featuredWorksURL).subscribe((res: any) => this.featuredWorks = res.map((x: any): FeaturedWork => Object.assign<FeaturedWork, any>(new FeaturedWork(), x)));
    }

    routeToWork = (): void => {
        this.router.navigateByUrl('/work').then(r => console.log("Navigation to /work is " + (r ? "Successful." : "Unsuccessful.")));
    }

}

import {Component} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {Testimonial} from "../../models/testimonial";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FeaturedWork} from "../../models/featured-work";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgForOf, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private testimonialsURL: string = '/assets/information-data/testimonials.json';
  private featuredWorksURL: string = '/assets/information-data/featured-works.json';
  testimonials: Array<Testimonial> = [];
  featuredWorks: Array<FeaturedWork> = [];

  constructor(private http: HttpClient) {
    this.loadFeaturedWorks();
    this.loadTestimonials();
  }

  loadTestimonials = () => {
    this.http.get(this.testimonialsURL).subscribe((res: any) => {
      this.testimonials = res.map((x: any) => {
        const testimonial: Testimonial = new Testimonial();
        testimonial.id = x.id ?? -1;
        testimonial.companyName = x.companyName ?? '';
        testimonial.name = x.name ?? '';
        testimonial.comments = x.comments ?? '';
        testimonial.position = x.position ?? '';
        return testimonial;
      });
    });
  }

  loadFeaturedWorks = () => {
    this.http.get(this.featuredWorksURL).subscribe((res: any) => {
      this.featuredWorks = res.map((x: any) => {
        const work: FeaturedWork = new FeaturedWork();
        work.id = x.id ?? -1;
        work.title = x.title ?? '';
        work.subTitle = x.subTitle ?? '';
        work.jobTitle = x.jobTitle ?? '';
        work.tenure = x.tenure ?? '';
        work.description = x.description?? '';
        work.imageUrl = x.imageUrl ?? '';
        work.caseStudyURL = x.caseStudyURL ?? '';
        return work;
      });
      console.log(this.featuredWorks);
    });
  }


}

import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {WorkComponent} from "./components/work/work.component";
import {ContactMeComponent} from "./components/contact-me/contact-me.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutMeComponent},
    {path: 'work', component: WorkComponent},
    {path: 'contact-me', component: ContactMeComponent}
];

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-contact-me',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

    contactMeForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        subject: new FormControl('', [Validators.required, Validators.minLength(6)]),
        message: new FormControl('', [Validators.required, Validators.minLength(15)]),
    })

    get name() {
        return this.contactMeForm.get("name");
    }

    get email() {
        return this.contactMeForm.get("email");
    }

    get subject() {
        return this.contactMeForm.get("subject");
    }

    get message() {
        return this.contactMeForm.get("message");
    }

    onSubmit = () => {
        console.warn(this.contactMeForm.value);
    }



}

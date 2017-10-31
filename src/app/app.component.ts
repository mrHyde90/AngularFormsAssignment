import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f') signupForm: NgForm;
	submitted = false;
	defaultSubscription = "Advanced";
	user = {
		email: "",
		subscription: "",
		password: ""
	};

	onSubmit(){
		this.submitted = true;
		this.user.email = this.signupForm.value.email;
		this.user.password = this.signupForm.value.password;
		this.user.subscription = this.signupForm.value.subscription;
		console.log("email: " + this.user.email);
		console.log("password: " + this.user.password);
		console.log("Subscription: " + this.user.subscription);
		this.signupForm.reset();
	}
}

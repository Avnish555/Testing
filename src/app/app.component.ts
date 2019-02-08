import { Component } from '@angular/core';
import { Binding } from './Binding'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  binding: Binding = {
    fname: 'xyz',
    lname: 'pqr',
    password: 'avn',
    email: 'eaaa@gmail.com'
      };
  
 
}

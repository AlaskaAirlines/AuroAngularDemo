import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orion-angular';
  buttonText = 'Click me';
  buttonDisabled = false;
  selectedOptions = [];

  handleInput(value) {
    this.selectedOptions = value;
  }

  handleClick() {
    this.buttonText = "I've been clicked :("
  }
}

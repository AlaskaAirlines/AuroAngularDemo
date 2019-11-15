import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orion-angular';
  buttonText = 'Click me';
  buttonType = 'primary';
  buttonDisabled = false;
  selectedOptions = [];
  componentData = [
    { "id": "radio1", "value": "yes", "label": "Yes" },
    { "id": "radio2", "value": "no", "label": "No" },
    { "id": "radio3", "value": "maybe", "label": "Maybe" }
  ];

  handleInput(value) {
    this.selectedOptions = value;
  }

  handleClick() {
    this.buttonText = "I've been clicked :(";
    this.buttonType = 'secondary';
  }
}

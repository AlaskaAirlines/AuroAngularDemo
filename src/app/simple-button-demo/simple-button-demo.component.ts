import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-button-demo',
  templateUrl: './simple-button-demo.component.html',
  styleUrls: ['./simple-button-demo.component.scss']
})
export class SimpleButtonDemoComponent {

  disabled = false;
  lastClicked = '';


  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  changeLastClicked(val: string) {
    this.lastClicked = val;
  }
}

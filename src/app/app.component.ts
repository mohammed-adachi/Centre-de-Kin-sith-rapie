import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone : false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
showBox: any;
hideBox() {
  this.showBox = false;
}
  title = 'centre';
}


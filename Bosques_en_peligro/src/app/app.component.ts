import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componetes/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './componetes/footer/footer.component';
import { NoticiasComponent } from './page/noticias/noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

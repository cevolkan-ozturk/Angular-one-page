import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Header, Main, Footer
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';



// Dikkat: Çalışabilmesi için bütün componentleri buraya eklemek zorundayız !!!!!  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    OnepageHeaderComponent,
    OnepageMainComponent,
    OnepageFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name ="Volkan";
  surname ="OZTURK"
  projectName = 'my-app';
}

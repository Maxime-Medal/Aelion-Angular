import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from 'my-lib'; // import du composant de la librairie
import { HeaderComponent, MenuComponent, Menu } from 'shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  menu: Menu = [
    { title: "page 1", link: 'home' },
    { title: "page 2", link: 'form' },
    { title: "page 3", link: '' }
  ];
}

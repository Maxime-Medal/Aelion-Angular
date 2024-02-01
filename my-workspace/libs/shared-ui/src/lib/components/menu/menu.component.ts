import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({ required: true }) menu: Menu = [{ title: "item1", link: 'aa' }, { title: "item2", link: 'aa' }, { title: "item3", link: 'aa' }];
}

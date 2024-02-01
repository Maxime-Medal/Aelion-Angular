import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from '../../public-api';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input({ required: true }) title: string = "NoName";

}

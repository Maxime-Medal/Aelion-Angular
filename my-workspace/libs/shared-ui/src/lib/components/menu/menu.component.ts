import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../../models/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  @Input({ required: true }) menu!: Menu;

  @ViewChild('ul') ul!: HTMLUListElement;

  // pour les ingection de dépendances ou du static
  constructor() {
    console.log("Display ViewChild from constructor", this.ul);

  }

  ngOnInit(): void {
    console.log("Display ViewChild from onInit", this.ul);
  }

}

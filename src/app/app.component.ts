import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import groupedProducts from './data/grouped.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'baro';
  public scrolled: boolean = false;
  public groupedProducts = groupedProducts;
  public productsKeys: string[];
  public menuOpen: boolean = false;
  public menuFolded: boolean = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.adjustScrolls();
  }

  public handleMenuClick() {
    this.menuOpen = !this.menuOpen;
  }

  public ngOnInit() {
    this.productsKeys = Object.keys(groupedProducts);
    this.adjustScrolls();
  }

  public adjustScrolls() {
    this.scrolled = window.scrollY > 145;
    this.menuFolded = window.scrollY > 90;
  }

  public navigate(category: string) {
    const element = document.getElementById(category);
    element.scrollIntoView({behavior: 'smooth'});
    this.menuOpen = false;
  }
}

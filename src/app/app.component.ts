import { Component, OnInit } from '@angular/core';
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

  public ngOnInit() {
    this.productsKeys = Object.keys(groupedProducts);
  }

  public handleScroll(event: any) {
    this.scrolled = event.target.scrollTop > 20;
  }
}

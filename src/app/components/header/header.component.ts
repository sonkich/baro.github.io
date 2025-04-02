import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() public scrolled: boolean = false;
  @Input() public categories: string[] = [];

  @Output() public menuClick: EventEmitter<any> = new EventEmitter<any>();

  public handleMenuClick() {
    this.menuClick.emit(true);
  }
}

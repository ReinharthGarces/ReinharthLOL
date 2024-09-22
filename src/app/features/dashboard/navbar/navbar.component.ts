import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {}

  toggleSidenav() {
    this.sidenav.toggle();
    const sidenavContainer = document.querySelector('.sidenav-container');
    if (this.sidenav.opened) {
      sidenavContainer?.classList.add('sidenav-open');
    } else {
      sidenavContainer?.classList.remove('sidenav-open');
    }
  }
  
  openSnackBar(snackBarTemplate: TemplateRef<any>) {
    this.snackBar.openFromTemplate(snackBarTemplate, {
      duration: 5000, 
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}

import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChampionsService } from '../../../core/champions.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { environment } from '../../../../environments/environmet.development';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent implements OnInit{
  cols: any;
  champions: any[] = [];
  displayedChampions: any[] = []; // Campeones que se mostrarán en la página actual
  pageSize: number = 16;
  pageIndex: number = 0;
  private champImgURL = environment.champImgURL
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.setCols(target.innerWidth);
  }

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.setCols(window.innerWidth);
    this.championsService.getAllChampions().subscribe(data => {
      this.champions = Object.values(data.data);
      this.champions.forEach(champion => {
        champion.imageUrl = `${this.champImgURL}/${champion.id}_0.jpg`;
      });
      this.updateDisplayedChampions();
    });
  }

  // Actualiza los campeones que se muestran en la página actual
  updateDisplayedChampions(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedChampions = this.champions.slice(startIndex, endIndex);
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedChampions();
  }

  //Setea las columnas que se mostraran en las vistas
  setCols(width: number) {
    if (width <= 480) {
      this.cols = 1;
    } else if (width <= 768) {
      this.cols = 2;
    } else if (width <= 1024) {
      this.cols = 3;
    } else {
      this.cols = 4;
    }
  }
}
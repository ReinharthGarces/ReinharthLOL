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
  public isLoading: boolean = true;
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
    this.isLoading = true;
    this.setCols(window.innerWidth);
    const storedPageIndex = localStorage.getItem('pageIndex');
    if (storedPageIndex) {
      this.pageIndex = parseInt(storedPageIndex, 10);
    }

    this.championsService.getAllChampions().subscribe(data => {
      this.champions = Object.values(data.data);
      this.champions.forEach(champion => {
        champion.imageUrl = `${this.champImgURL}/${champion.id}_0.jpg`;
      });
      this.updateDisplayedChampions();
      this.isLoading = false;
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
  localStorage.removeItem('pageIndex'); 
  localStorage.setItem('pageIndex', this.pageIndex.toString());
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
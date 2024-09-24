import { Component, OnInit, ViewChild } from '@angular/core';
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
  displayedChampions: any[] = [];
  pageSize: number = 16;
  pageIndex: number = 0;
  private inactivityTimer: any;
  private champImgURL = environment.champImgURL
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.isLoading = true;

    const storedPageIndex = localStorage.getItem('pageIndex');
    if (storedPageIndex) {
      this.pageIndex = parseInt(storedPageIndex, 10);
    }

    // Obtener todos los campeones del servicio
    this.championsService.getAllChampions().subscribe(data => {
      this.champions = Object.values(data.data);
      this.champions.forEach(champion => {
        champion.imageUrl = `${this.champImgURL}/${champion.id}_0.jpg`;
      });
      this.updateDisplayedChampions();
      this.isLoading = false;
    });
    this.startInactivityTimer();
  }

  updateDisplayedChampions(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedChampions = this.champions.slice(startIndex, endIndex);
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    localStorage.setItem('pageIndex', this.pageIndex.toString());

    this.updateDisplayedChampions();
    this.resetInactivityTimer();
  }

  private startInactivityTimer(): void {
    this.inactivityTimer = setTimeout(() => {
      localStorage.removeItem('pageIndex');
    }, 1800000); 
  }

  private resetInactivityTimer(): void {
    clearTimeout(this.inactivityTimer);
    this.startInactivityTimer();
  }
}
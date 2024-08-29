import { Component, OnInit, ViewChild } from '@angular/core';
import { ChampionsService } from '../../../core/champions.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent implements OnInit{
  champions: any[] = [];
  displayedChampions: any[] = []; // Campeones que se mostrarán en la página actual
  pageSize: number = 16;
  pageIndex: number = 0;
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.championsService.getAllChampions().subscribe(data => {
      this.champions = Object.values(data.data);
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
}
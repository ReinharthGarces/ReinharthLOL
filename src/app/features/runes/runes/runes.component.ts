import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../../core/runes.service';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrl: './runes.component.scss'
})

export class RunesComponent implements OnInit {
  public isLoading: boolean = true;
  runes: any[] = [];

  constructor(private runesService: RunesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.runesService.getRunes().subscribe(data => {
      this.runes = data.slice(0, 5);
      this.isLoading = false;
    });
  }

  getRuneImageUrl(runeIcon: string): string {
    return this.runesService.getRuneImageUrl(runeIcon);
  }
}
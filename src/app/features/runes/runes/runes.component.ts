import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../../core/runes.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrl: './runes.component.scss'
})

export class RunesComponent implements OnInit {
  runes: any[] = [];

  constructor(private runesService: RunesService) { }

  ngOnInit(): void {
    this.runesService.getRunes().subscribe(data => {
      this.runes = data.slice(0, 5);
    });
  }

  getRuneImageUrl(runeIcon: string): string {
    return this.runesService.getRuneImageUrl(runeIcon);
  }
}

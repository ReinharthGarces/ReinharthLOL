import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../../core/runes.service';
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
      // Aquí asumimos que las primeras 5 runas son las principales
      // Cada una tendrá un array `subRunes` que contiene las runas relacionadas
      this.runes = data.slice(0, 5);  // Las 5 runas principales
    });
  }
}

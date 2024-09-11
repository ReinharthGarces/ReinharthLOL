import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../../../core/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})

export class SpellsComponent implements OnInit {

  spells: any[] = [];

  constructor(private spellsService: SpellsService) { }

  ngOnInit(): void {
    this.spellsService.getSpells().subscribe(data => {
      // El API devuelve un objeto con las spells en un atributo llamado 'data'
      this.spells = Object.values(data.data);
    });
  }
}
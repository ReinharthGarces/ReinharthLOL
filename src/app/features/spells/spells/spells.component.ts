import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../../../core/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})

export class SpellsComponent implements OnInit {
  public isLoading: boolean = true;
  spells: any[] = [];

  constructor(private spellsService: SpellsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.spellsService.getSpells().subscribe(data => {
      this.spells = Object.values(data.data);
      this.isLoading = false;
    });
  }

  getSpellImageUrl(imageName: string): string {
    return this.spellsService.getSpellImageUrl(imageName);
  }
}
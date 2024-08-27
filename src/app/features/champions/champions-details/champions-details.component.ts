import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atropos } from 'atropos';
@Component({
  selector: 'app-champions-details',
  templateUrl: './champions-details.component.html',
  styleUrl: './champions-details.component.scss'
})
export class ChampionsDetailsComponent implements OnInit, AfterViewInit {
  public champData: any;
  public champImageUrl: any;
  public passiveData: any;
  public spellsData: { name: string; description: string; imageUrl: string }[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getChampionData();
  }

  ngAfterViewInit() {
    const myAtropos = Atropos({
      el: '.my-atropos',
      activeOffset: 50,
      shadow: false,
      rotate: true,
      rotateTouch: true,
    });
  }

  getChampionData() {
    const url = 'https://ddragon.leagueoflegends.com/cdn/14.14.1/data/es_ES/champion/Camille.json';
    
    this.http.get(url).subscribe({
      next: (data) => {
        this.champData = data;
        this.champImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.champData.data.Camille.id}_0.jpg`;
        let spells = this.champData.data.Camille.spells;

              // Extraer datos de la habilidad pasiva
      this.passiveData = {
        name: this.champData.data.Camille.passive.name,
        description: this.champData.data.Camille.passive.description,
        imageUrl: `http://ddragon.leagueoflegends.com/cdn/14.14.1/img/passive/${this.champData.data.Camille.passive.image.full}`
      };
  
        // Guarda nombres, descripciones y URLs de las imágenes de los hechizos
        this.spellsData = spells.map((spell: any) => {
          return {
            name: spell.name,
            description: spell.description,
            imageUrl: `http://ddragon.leagueoflegends.com/cdn/14.14.1/img/spell/${spell.image.full}`
          };
        });
      },
      error: (error) => {
        console.error("Error fetching champion data:", error);
      }
    });
  }
}

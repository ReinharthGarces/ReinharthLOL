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
  public spellsImageUrls: any;

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
      // highlight: false,
    });
  }

  getChampionData() {
    const url = 'https://ddragon.leagueoflegends.com/cdn/14.14.1/data/es_ES/champion/Camille.json';
    
    this.http.get(url).subscribe({
      next: (data) => {
        this.champData = data;

        // Construye la URL de la imagen usando el nombre del campeón y el número de splash art deseado
        this.champImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.champData.data.Camille.id}_0.jpg`;
        const spells = this.champData.data.Camille.spells;

        // Crea una lista de URLs para las imágenes de los hechizos
        const spellsImageUrls = spells.map((spell: any) => {
          return `http://ddragon.leagueoflegends.com/cdn/14.14.1/img/spell/${spell.id}.png`;
        });
        
        console.log(spellsImageUrls);
      },
      error: (error) => {
        console.error("Error fetching champion data:", error);
      }
    });
  }
}

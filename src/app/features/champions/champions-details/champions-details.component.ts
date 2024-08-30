import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Atropos } from 'atropos';
import { ChampionsService } from '../../../core/champions.service';
import { environment } from '../../../../environments/environmet.development';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-champions-details',
  templateUrl: './champions-details.component.html',
  styleUrl: './champions-details.component.scss'
})
export class ChampionsDetailsComponent implements OnInit, AfterViewInit {
  public champData: any;
  public champName!: string;
  public champImageUrl: any;
  public passiveData: any;
  public spellsData: { name: string; description: string; imageUrl: string }[] = [];
  private imgURL = environment.imgURL
  private champImgURL = environment.champImgURL

  constructor(private championsService: ChampionsService, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const championName = params.get('name');
      if (championName) {
        this.getChampionData(championName);
      }
    });
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

  getChampionData(championName: string) {
    this.championsService.getChampionByName(championName).subscribe({
      next: (data) => {
        this.champData = data;
        this.champName = championName
        this.champImageUrl = `${this.champImgURL}/${this.champData.data[championName].id}_0.jpg`;

        // Extraer datos de la habilidad pasiva
        this.passiveData = {
          name: this.champData.data[championName].passive.name,
          description: this.champData.data[championName].passive.description,
          imageUrl: `${this.imgURL}/passive/${this.champData.data[championName].passive.image.full}`
        };

        // Guarda nombres, descripciones y URLs de las imágenes de los hechizos
        this.spellsData = this.champData.data[championName].spells.map((spell: any) => {
          return {
            name: spell.name,
            description: spell.description,
            imageUrl: `${this.imgURL}/spell/${spell.image.full}`
          };
        });
      },
      error: (error) => {
        console.error("Error fetching champion data:", error);
      }
    });
  }
}
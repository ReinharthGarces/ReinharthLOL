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
  public isLoading: boolean = true;
  public champData: any;
  public champName!: string;
  public champImageUrl: any;
  public passiveData: any;
  public spellsData: { name: string; letter: string; description: string; imageUrl: string }[] = [];
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

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof Atropos !== 'undefined') {
        Atropos({
          el: '.my-atropos',
          activeOffset: 50,
          shadow: false,
          rotate: true,
          rotateTouch: true,
        });
      } else {
        console.error('Atropos is not defined.');
      }
    }, 100);
  }

  getChampionData(championName: string) {
    this.isLoading = true;
    this.championsService.getChampionByName(championName).subscribe({
      next: (data) => {
        this.champData = data;
        this.champName = championName;
        this.champImageUrl = `${this.champImgURL}/${this.champData.data[championName].id}_0.jpg`;

        // Usa el servicio para extraer datos de la habilidad pasiva
        this.passiveData = this.championsService.extractPassiveData(this.champData.data[championName]);

        // Usa el servicio para extraer datos de los hechizos
        this.spellsData = this.championsService.extractSpellsData(this.champData.data[championName]);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error fetching champion data:", error);
        this.isLoading = false;
      }
    });
  }
}
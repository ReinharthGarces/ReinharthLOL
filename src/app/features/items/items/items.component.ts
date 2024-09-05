import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../core/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})

export class ItemsComponent implements OnInit {
  items: any[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((data) => {
      this.items = Object.values(data.data);
    });
  }
}

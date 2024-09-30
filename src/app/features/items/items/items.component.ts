import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../core/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})

export class ItemsComponent implements OnInit {
  public isLoading: boolean = true;
  items: any[] = [];
  selectedItem: any = null;
  uniqueTags: Set<string> = new Set();

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.itemsService.getItems().subscribe((data) => {
      this.items = Object.values(data.data);
      this.isLoading = false;
      
      // Extract unique tags from all items
      this.items.forEach(item => {
        if (item.tags) {
          item.tags.forEach((tag: string) => this.uniqueTags.add(tag));
        }
      });
      // Convert Set to Array if needed
      // console.log([...this.uniqueTags]);
    });
  }

  getItemImageUrl(imageName: string): string {
    return `${this.itemsService.getItemImageUrl(imageName)}`;
  }

  toggleExpand(item: any) {
    if (this.selectedItem === item) {
      this.selectedItem = null;  // Si hace clic en la misma, la cierra
    } else {
      this.selectedItem = item;  // Si hace clic en otra, la abre
    }
  }
}
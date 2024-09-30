import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items) {
      return [];
    }

    const excludeList = [
      'Piedra de visión inquieta',
      'Filo de obsidiana', 
      'Salvavidas',
      'Espada de los dioses',
      'Juicio de Atma',
      'Tenaza de muerte ígnea',
      'Medallón estimulante',
      'Sable-pistola hextech',
      'Sable espectral',
      'Calzado ligeramente mágico',
      'Espátula dorada'
    ];

    // Filtrar los items que no están en la lista de exclusión, cuesten más de 0 y estén disponibles en los mapas 11 o 21
    const filteredItems = items.filter(item => 
      !excludeList.includes(item.name) && 
      item.gold.total > 0 && // Filtrar ítems que tengan oro total mayor que 0
      (item.maps[11] || item.maps[21]) // Verifica si están disponibles en los mapas 11 (Grieta del Invocador) o 21 (Abismo de los Lamentos)
    );

    // Eliminar duplicados por nombre
    const uniqueItems = filteredItems.filter((item, index, self) =>
      index === self.findIndex((i) => i.name === item.name)
    );

    // Ordenar los items por precio total (de menor a mayor)
    const sortedItems = uniqueItems.sort((a, b) => a.gold.total - b.gold.total);

    return sortedItems;
  }
}


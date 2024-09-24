import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSpells'
})
export class FilterSpellsPipe implements PipeTransform {

  transform(spells: any[]): any[] {
    if (!spells) {
      return [];
    }

    const excludeList = [
      '¡Al Rey!', 
      'Por determinar', 
      'Provisional', 
      'Aplastar automático', 
      'Porolanzamiento',
      'Provisional y Aplastar automático'
    ];

    // Filtrar los hechizos que no están en la lista de exclusión
    const filteredSpells = spells.filter(spell => !excludeList.includes(spell.name));

    // Eliminar duplicados
    const uniqueSpells = filteredSpells.filter((spell, index, self) =>
      index === self.findIndex((s) => s.name === spell.name)
    );

    // Ordenar los hechizos de forma alfabética por el nombre
    const sortedSpells = uniqueSpells.sort((a, b) => a.name.localeCompare(b.name));

    return sortedSpells;
  }
}
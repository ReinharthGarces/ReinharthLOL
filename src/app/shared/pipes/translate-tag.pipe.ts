import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateTag'
})
export class TranslateTagPipe implements PipeTransform {

  private tagTranslations: { [key: string]: string } = {
    'Fighter': 'Luchador',
    'Tank': 'Tanque',
    'Mage': 'Mago',
    'Assassin': 'Asesino',
    'Support': 'Soporte',
    'Marksman': 'Tirador',
    'Bruiser': 'Combatiente',
    'Controller': 'Controlador'
  };

  transform(tag: string): string {
    return this.tagTranslations[tag] || tag;
  }

}
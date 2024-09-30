import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanText'
})
export class CleanTextPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Reemplazar etiquetas de salto de línea (<br>, <hr>) antes de eliminar otras etiquetas HTML
    value = value.replace(/<br\s*\/?>/gi, '\n'); // Cambia <br> por un salto de línea
    value = value.replace(/<hr\s*\/?>/gi, '\n'); // Cambia <hr> por un salto de línea

    // Remover otras etiquetas HTML
    let clean = value.replace(/<\/?[^>]+(>|$)/g, "");

    // Eliminar secuencias como "<lol-uikit-tooltipped-keyword ...>" y "<trueDamage>"
    clean = clean.replace(/<lol-uikit-tooltipped-keyword[^>]*>/g, "");
    clean = clean.replace(/<\/lol-uikit-tooltipped-keyword>/g, "");
    clean = clean.replace(/<trueDamage>/g, "");
    clean = clean.replace(/<\/trueDamage>/g, "");

    // Eliminar espacios múltiples
    clean = clean.replace(/\s\s+/g, ' ');

    return clean.trim(); // Eliminar espacios al inicio y al final
  }
}
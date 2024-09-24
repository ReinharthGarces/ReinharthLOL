import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanText'
})
export class CleanTextPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Remover etiquetas HTML
    let clean = value.replace(/<\/?[^>]+(>|$)/g, "");

    // Eliminar secuencias como "<lol-uikit-tooltipped-keyword ...>" y "<trueDamage>"
    clean = clean.replace(/<lol-uikit-tooltipped-keyword[^>]*>/g, "");
    clean = clean.replace(/<\/lol-uikit-tooltipped-keyword>/g, "");
    clean = clean.replace(/<trueDamage>/g, "");
    clean = clean.replace(/<\/trueDamage>/g, "");

    // Reemplazar etiquetas de salto de línea (<br>, <hr>)
    clean = clean.replace(/<br\s*\/?>/gi, "\n");
    clean = clean.replace(/<hr\s*\/?>/gi, "\n");

    // Eliminar espacios múltiples
    clean = clean.replace(/\s\s+/g, ' ');

    return clean.trim(); // Eliminar espacios al inicio y al final
  }
}
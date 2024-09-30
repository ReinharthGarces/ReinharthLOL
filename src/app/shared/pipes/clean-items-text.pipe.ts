import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanItemsText'
})

export class CleanItemsTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Reemplazar las etiquetas <attention> con <b> para negritas
    let formattedText = value.replace(/<attention>(.*?)<\/attention>/g, '<b>$1</b>');

    // Reemplazar las etiquetas <passive> con <b> y agregar ":"
    formattedText = formattedText.replace(/<passive>(.*?)<\/passive>/g, '<b>$1</b>:');

    // Reemplazar las etiquetas <active> con <b> y agregar ":"
    formattedText = formattedText.replace(/<active>(.*?)<\/active>/g, '<b>$1</b>');

    return formattedText;
  }
}

  // transform(value: string): string {
  //   if (!value) return ''; // Maneja el caso de un valor nulo o vacío

  //   // Reemplaza <br> por saltos de línea
  //   value = value.replace(/<br\s*\/?>/gi, '\n');

  //   // Pone en negrita las palabras 'utilizar' y 'activa' si están al inicio del texto
  //   value = value.replace(/^(Activa - Consumir:)/i, (match) => `<strong>${match}</strong>`);
  //   value = value.replace(/^(Utilizar|Activar|Activa)/i, (match) => `<strong>${match}: </strong>`);

  //   // Limpia otras etiquetas HTML (si es necesario, ajusta esto según tus necesidades)
  //   value = value.replace(/<[^>]*>/g, '');

  //   return value.trim();
  // }
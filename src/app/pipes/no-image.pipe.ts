import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): any {
      
    return (!images || images.length > 1 ) ? images[0].url : 'assets/img/noimage.png';
  }

}

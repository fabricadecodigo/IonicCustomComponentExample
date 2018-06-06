import { Component, Input } from '@angular/core';
import { Artigo } from '../../models/artigo';

@Component({
  selector: 'artigo',
  templateUrl: 'artigo.html'
})
export class ArtigoComponent {

  @Input()
  artigo: Artigo;

  constructor() { }

}

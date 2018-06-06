import { NgModule } from '@angular/core';
import { ArtigoComponent } from './artigo/artigo';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ArtigoComponent],
	imports: [IonicModule],
	exports: [ArtigoComponent]
})
export class ComponentsModule {}

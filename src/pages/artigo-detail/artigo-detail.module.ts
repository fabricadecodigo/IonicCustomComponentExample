import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtigoDetailPage } from './artigo-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArtigoDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ArtigoDetailPage),
  ],
})
export class ArtigoDetailPageModule {}

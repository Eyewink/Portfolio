import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { GalleryComponent } from './gallery.component';


@NgModule({
  declarations: [ExamplesComponent, GalleryComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }

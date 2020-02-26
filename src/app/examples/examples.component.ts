import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../navigation.service";
import { GalleryComponent } from './gallery.component';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.less'],
  providers: [ GalleryComponent ]
})
export class ExamplesComponent implements OnInit {

  constructor(public nav:NavigationService, public gallery:GalleryComponent) {}

  ngOnInit (): void {
  }

}

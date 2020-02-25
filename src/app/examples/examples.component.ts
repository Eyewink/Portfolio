import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../navigation.service";

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.less']
})
export class ExamplesComponent implements OnInit {

  constructor(public nav:NavigationService) {}

  ngOnInit (): void {
  }

}

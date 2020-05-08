import { Component, AfterViewInit, OnInit, OnDestroy  } from '@angular/core';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'RecruitProcess';
  constructor() {

  }

  ngAfterViewInit() {
    Feather.replace();
  }

  
}

import { Component, AfterViewInit  } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'RecruitProcess';

  ngAfterViewInit() {
    Feather.replace();
  }
}

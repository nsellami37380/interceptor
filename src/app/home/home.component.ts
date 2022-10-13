import { Component, OnInit } from '@angular/core';
import { LogInterceptor } from '../core/log.interceptor';
import { MonServiceService } from '../shared/mon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public diff: number = 3;
  constructor(private monS: MonServiceService,
    public lgI: LogInterceptor) { }

  ngOnInit(): void {
     this.monS.getData();
     this.diff = this.lgI.diff
  }

}

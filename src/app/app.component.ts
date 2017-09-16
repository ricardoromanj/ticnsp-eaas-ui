import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Liturgy } from './_models/index';
import { LiturgyService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LiturgyService ]
})
export class AppComponent {
  title = 'app';
  liturgy: Liturgy = new Liturgy;
  showSr = false;
  date: string;
  dateStr: any;
  lang: string;
  langOpts: any;

  constructor(private liturgyService: LiturgyService) {
		this.date = moment().format('YYYYMMDD');
    this.dateStr = moment().toDate();
		this.lang = 'AM';
		this.langOpts = [{
			name: "English",
			code: "AM"
		}, {
			name: "Español",
			code: "SP"
		}];
	}

  ngOnInit() {
    this.getNewLiturgy();
  }

  getNewLiturgy() {
		console.log(`Date: ${this.date}, Lang: ${this.lang}`);
    this.liturgyService.getLiturgy(this.date, this.lang)
      .subscribe(res => {
        console.log(res);
       this.liturgy = res.data;
       this.showSr = this.liturgy.content.sr.lt !== '  ';
      }); 
  }

  dateChanged(newDate: any) {
    console.log(`New date: $(newDate)`);
		this.date = moment(newDate).format('YYYYMMDD');
    this.getNewLiturgy();
  }

  langChanged() {
    this.getNewLiturgy();
  }

}

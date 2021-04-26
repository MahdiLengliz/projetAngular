import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {error} from 'util';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {
  bigData;
  constructor(private data: DatabaseService, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {observe: 'response'}).subscribe(alldata => {
      this.bigData = alldata;
      console.log(this.bigData);
    });
  }

  // @ts-ignore
  getEvent() {
    this.data.getData().subscribe(next => {
        console.log(next);
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        console.log(error);

      }, () => {
        console.log('done');
      }
    );
  }
}

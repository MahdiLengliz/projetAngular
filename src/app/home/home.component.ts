import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  col = 'red';
  dis = 'fixed';
  n = 2;
  firstName = 'mahdiiiiiiii';
name = 'mahdi lengliz';
link = 'assets/img.jpg';
verif = true;
tab1 = [{title: 't1', speaker: 'Brian', description: 'talk 1'},
  {title: 't2', speaker: 'Julie', description: 'talk 2'}];
tab2 = ['kelibia', 'nabeul', 'tunis', 'mahdia', 'sfax'];
  constructor() { }

  ngOnInit() {
  }
get(e) {
    console.log(e.target.value);
}
getTowayBinding() {
    console.log(this.firstName);
}
  gethachtagBinding(z) {
    console.log(z.value);
  }
}

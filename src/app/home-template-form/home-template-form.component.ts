import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template-form',
  templateUrl: './home-template-form.component.html',
  styleUrls: ['./home-template-form.component.css']
})
export class HomeTemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
get(f) {
    console.log(f.value);
}
}

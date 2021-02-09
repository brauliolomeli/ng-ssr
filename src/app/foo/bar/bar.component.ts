import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  label = 'Hey!';
  minutes = 2;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.label = '*********', 3000);
  }

}

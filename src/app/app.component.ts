import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pipes';
  myString = 'Hello world';
  myPercent = 0.15;
  myNumber = Math.PI;
  myMoney = 10.5;
  myDate = Date.now();

  searchStr = '';

  items = [
    {
      name: 'Январь',
      id: 1,
    },
    {
      name: 'Февраль',
      id: 2,
    },
    {
      name: 'Март',
      id: 3,
    },
    {
      name: 'Апрель',
      id: 4,
    },
    {
      name: 'Май',
      id: 5,
    },
    {
      name: 'Июнь',
      id: 6,
    },
    {
      name: 'Июль',
      id: 7,
    },
    {
      name: 'Август',
      id: 8,
    },
    {
      name: 'Сентябрь',
      id: 9,
    },
    {
      name: 'Октябрь',
      id: 10,
    },
    {
      name: 'Ноябрь',
      id: 11,
    },
    {
      name: 'Декабрь',
      id: 12,
    },
  ];
}

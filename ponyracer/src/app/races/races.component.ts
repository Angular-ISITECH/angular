import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  races: any[] = [
    {
      name: 'London',
      ponies: [
        { name: 'Gentle Pie', color: 'BLACK' },
        { name: 'Big Soda', color: 'BLUE' },
        { name: 'Gentle Bottle', color: 'GREEN' }
      ],
      date: '2016-02-28'
    },
    {
      name: 'Lyon',
      ponies: [
        { name: 'Gentle Pie'},
        { name: 'Big Soda'},
        { name: 'Gentle Bottle'}
      ],
      date: '2016-02-28'
    }
  ];
}

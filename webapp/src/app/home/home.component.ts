import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  //variables, but they don't tell us anything about the data in these arrays, which is why 
  //we will be using interface and typescript
  //to generate the interface - ng g i location
  // g - generate, i - interface, location - what we want to search

  city = '';
  searchResults: Location[] = [];
  housingList: Location[] = [
    {
      id: 1,
      name: 'Location One',
      description: 'Safe place',
      city: 'Chicago'
    },
    {
      id: 2,
      name: 'Location Two',
      description: 'Safe place',
      city: 'Chicago'
    },
    {
      id: 3,
      name: 'Location Three',
      description: 'Safe place',
      city: 'Chicago'
    },
  ];

  ngOnInit(): void {
  
  }

  searchHousing() {
    if (this.city !== ''){
      // filter the searchResults based on location, where typed city = location.city
      this.searchResults = this.housingList.filter(location => location.city.toLowerCase() === this.city.toLowerCase());
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  tittle="displaying Tutorial";
  imageUrl="https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg"

  constructor() { }

  ngOnInit(): void {
  }

}

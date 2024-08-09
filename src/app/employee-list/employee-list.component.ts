import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  constructor()  { }

  ngOnInit(): void {
  }

}

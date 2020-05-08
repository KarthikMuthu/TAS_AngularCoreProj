import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
declare var $ : any;


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styles: []
})
export class CandidatesComponent implements OnInit {

  userparamvalue : any;
  user_rolevalue : any;

  


  displayedColumns = ['id', 'name', 'areaexpertise', 'status'];
  dataSource: MatTableDataSource<UserData>;  

  @ViewChild(MatPaginator, {static : false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:false}) sort: MatSort;
  constructor(private candrouter : Router, private candrouted : ActivatedRoute) { 

    this.candrouted.params.subscribe(userparam =>{
      this.userparamvalue = userparam['uname'];
      this.user_rolevalue = userparam['roletitle'];
     // userparam['uname'] = null;
  });

    // const users: UserData[] = [];
    // for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

    $(document).ready(function(){
      $(".list-group-item").click(function() { 
                  
        // Select all list items 
        var listItems = $(".list-group-item"); 
        
        // Remove 'active' tag for all list items 
        for (let i = 0; i < listItems.length; i++) { 
            listItems[i].classList.remove("active"); 
        } 
          
        // Add 'active' tag for currently selected item 
        this.classList.add("active"); 
    }); 
       
    });

  }

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }
  

  // ViewCandidate()
  // {
  //   this.candrouter.navigate(['candidate']);
  // }

}



export interface UserData {
  id: number;
  name: string;
  areaexpertise: string;
  status:string;
}

const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'Muthu', areaexpertise: 'technical', status: 'Process'},
  {id: 2, name: 'Ganesan', areaexpertise: 'design', status: 'Process'},
  {id: 3, name: 'test1', areaexpertise: 'testing', status: 'Process'},
  {id: 4, name: 'test1', areaexpertise: 'testing', status: 'Process'},
  {id: 5, name: 'test1', areaexpertise: 'testing', status: 'Process'},
  {id: 6, name: 'test1', areaexpertise: 'testing', status: 'Process'},
  {id: 7, name: 'test1', areaexpertise: 'testing', status: 'Process'},
  {id: 8, name: 'test1', areaexpertise: 'testing', status: 'Selected'},
  {id: 9, name: 'test1', areaexpertise: 'testing', status: 'Selected'},
  {id: 10, name: 'test1', areaexpertise: 'testing', status: 'Selected'},
  {id: 11, name: 'test1', areaexpertise: 'testing', status: 'Selected'},
  {id: 12, name: 'test1', areaexpertise: 'testing', status: 'Selected'},
  {id: 13, name: 'test1', areaexpertise: 'testing', status: 'Selected'},
  {id: 14, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
  {id: 15, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
  {id: 16, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
  {id: 17, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
  {id: 18, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
  {id: 19, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
  {id: 20, name: 'test1', areaexpertise: 'testing', status: 'Hired'},
];
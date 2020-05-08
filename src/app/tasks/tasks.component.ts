import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Tasks } from '../TAS_Service/recruitprocess-model.service';
import { formatDate } from '@angular/common';
declare var $: any;


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  userparamvalue : any;
  user_rolevalue : any;
  public tasks : Tasks[];
  taskactivity : any;
  taskpkid : any;
  createdon : any;
  tasktype : any;
  assignor : any;
  priority : any;
  description : any;
  status : any;
  roletitle : any;
  assignee : any;


  listData: any;
  displayedColumns: string[] = ['taskid', 'createdon', 'tasktype', 'assignor', 'priority','actions'];
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  searchKey: string;
  commondate : any;

  constructor(@Inject(LOCALE_ID) private locale: string,private taskservice : RecruitprocessService,private tasksrouter : Router, 
    private tasksrouted : ActivatedRoute) { 
      this.tasksrouted.params.subscribe(userparam =>{
        this.userparamvalue = userparam['uname'];
        this.user_rolevalue = userparam['roletitle'];
      });
      this.commondate = new Date();
      const datevalue = formatDate(this.commondate,'yyyy-MM-dd','en-US'); 
     // this.taskservice.get_Tasks(this.userparamvalue);
        
        this.listData = new MatTableDataSource<Tasks>();
          // this.listData.sort = this.sort;
          // this.listData.paginator = this.paginator;
          // this.listData.filterPredicate = (data, filter) => {
          //   return this.displayedColumns.some(ele => {
          //     return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          //   });
          // }
        

    }

    ngAfterViewInit() {
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }

    Logout()
    {
      this.tasksrouter.navigate(['login']);
    }
    NavigateDash()
    {
      this.tasksrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      // this.tasksrouter.navigate(['requisitionsdet', this.userparamvalue, this.user_rolevalue]);
    }

    clickEdit(rowposterid)
    {
     // alert(rowposterid);
     //  this.taskservice.view_RequistionDetails(rowposterid,this.user_rolevalue).subscribe(
     //    res => {
           this.tasksrouter.navigate(['requisitionsdet', this.userparamvalue, this.user_rolevalue, rowposterid]);
      //   }
     //  )
    }

    clickViewDetails(rowid)
    {
      this.taskservice.get_TaskPKID(rowid).subscribe(
        resp => {
       //   alert(resp["taskid"] + "/" + resp["tasktype"]);
          this.taskpkid = resp["taskid"];
          this.taskactivity = resp["tasktype"];
          this.description = resp["description"]
          this.status = resp["status"];
          this.assignor = resp["assignor"];
          this.priority = resp["priority"];
          this.createdon =  formatDate(resp["createdon"], "MMMM d", this.locale);
          this.roletitle = resp["roletitle"];
          this.assignee = resp["assignee"];
        }
      )
    }

    RenderDatatable()
    {
      this.taskservice.get_Tasks(this.userparamvalue, this.user_rolevalue).subscribe(
        res => {
          console.log(res);
          this.listData = new MatTableDataSource();
          this.listData.data = res;
        //  console.log(this.listData.data);
          
        //  console.log(this.listData.data);

        },
        err =>{
          console.log(err);
          console.error();
        }

      )
    }

  ngOnInit() {
      this.RenderDatatable();
  }

  // PopulateTaskDetails(userparamvalue)
  // {
  //   this.taskservice.get_Tasks(this.userparamvalue);
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.listData.filter = filterValue;
  }


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.searchKey);
   // this.applyFilter();
  }

  // applyFilter() {
  //   this.listData.filter = this.searchKey.trim().toLowerCase();
  // }

}


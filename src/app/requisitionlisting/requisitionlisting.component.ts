import { Component, OnInit, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { RequisitionList } from '../TAS_Service/recruitprocess-model.service';
import { MatTableDataSource,MatSort,MatPaginator,MatTableModule } from '@angular/material';
declare var $: any;

@Component({
  selector: 'app-requisitionlisting',
  templateUrl: './requisitionlisting.component.html',
  styles: []
})
export class RequisitionlistingComponent implements OnInit {

  userparamvalue : any;
  user_rolevalue : any;
  public reqlist : RequisitionList[];

  listRequisition: any;
  displayedColumns: string[] = ['requisitionpkid','jobtitle', 'department', 'createdby', 'startdate', 'enddate','jobopeningcount','positionfilled','status'];
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  searchKey: string;
 
  constructor(private reqlistingservice : RecruitprocessService,private reqlistingrouter : Router, 
    private reqlistingrouted : ActivatedRoute) { 
      this.reqlistingrouted.params.subscribe(userparam =>{
      //  this.reqjobposterid = userparam['jobposterid'];
        this.userparamvalue = userparam['uname'];
        this.user_rolevalue = userparam['roletitle'];
        // console.log(this.reqjobposterid);
      });
      this.listRequisition = new MatTableDataSource<RequisitionList>(this.reqlist);

    }

    ngAfterViewInit() {
      this.listRequisition.sort = this.sort;
      this.listRequisition.paginator = this.paginator;
    }


  ngOnInit() {
   // this.reqlistingservice.bind_viewRequisitionListing();
   // this.reqlistingservice.BindJobTitles();
  // this.RenderDatatable();
  //  this.listRequistion.sort = this.sort;
  //  this.listRequistion.paginator = this.paginator;
  this.RenderDatatable();
  }

  NavigateTasks()
  {
    this.reqlistingrouter.navigate(['tasks', this.userparamvalue, this.user_rolevalue]); 
  }
  NavigateDash()
  {
    this.reqlistingrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]); 
  }

 

  RenderDatatable()
  {
    this.reqlistingservice.bind_viewRequisitionListing().subscribe(
      res => {
        // console.log(res);
        // console.log(this.reqlist);
        this.listRequisition = new MatTableDataSource();
        this.listRequisition.data = res;
        this.listRequisition.paginator = this.paginator;
        this.listRequisition.sort = this.sort;
      },
      err =>{
        console.log(err);
        console.error();
      }

    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.listRequisition.filter = filterValue;
  }

  NavigateCandidates()
  {
    this.reqlistingrouter.navigate(['candidates/', this.userparamvalue, this.user_rolevalue]); 

  }

  getRequisitionID(requisitionpkid : any)
  {
    this.reqlistingrouter.navigate(['requisitionlistdetails/', this.userparamvalue, this.user_rolevalue, requisitionpkid]);
  }


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.searchKey);
   // this.applyFilter();
  }


  // SearchJobTitle(name :string)
  // {
  //   let obj = this.jobtitles.filter(m=>m.JobTitleName==name);
  //   this.jobtitles = obj;
  //   return this.jobtitles;
  // }

}

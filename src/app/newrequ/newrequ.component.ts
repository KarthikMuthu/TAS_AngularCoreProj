import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TalentRequest, JobTitle, Department, RecruitmentReason, JobLevel, Shift, Travel, Status, TalentRequest_SaveDraft } from '../TAS_Service/recruitprocess-model.service';
import { formatDate } from '@angular/common';
declare const newrequist : any;
declare var $: any;


@Component({
  selector: 'app-newrequ',
  templateUrl: './newrequ.component.html',
  styles: []
})
export class NewrequComponent implements OnInit {

  userparamvalue : any;
  user_rolevalue : any;
  jobtitle : any;
  department : any;
  regions : any;
  countrys : any;
  state_new : any;
  recruitreason : any;
  employment: any;
  interviewrounds : any;
  joblevel : any;
  approver : any;
  shift : any;
  status : any;
  travel : any;
  StartDate : any;
  EndDate : any;
  commondate : any;
  startdatevalue : any;
  endatevalue : any;
  requistionid : any;
  
  savenewrequisition : TalentRequest;
  savenewreq_savedraft : TalentRequest_SaveDraft;
  @Input() assigninhtmlctrl : TalentRequest = new TalentRequest();
  @Input() assignjobtitleval : JobTitle = new JobTitle();
  @Input() assigndepartval : Department = new Department();
  @Input() assignrecreasonval : RecruitmentReason = new RecruitmentReason();
  @Input() assignjoblevelval : JobLevel = new JobLevel();
  @Input() assignshiftval : Shift = new Shift();
  @Input() assigntravelval : Travel = new Travel();
  @Input() assignstatusval : Status = new Status();
  @ViewChild('sd', {static : false}) sdate : ElementRef;
  @ViewChild('ed', {static:false}) edate : ElementRef;
  @ViewChild('jb',{static:false}) jobtit : ElementRef;
  @ViewChild('nd', {static : false}) dept : ElementRef;
  @ViewChild('nl', {static:false}) jlocation : ElementRef;
  @ViewChild('cou', {static : false}) country : ElementRef;
  @ViewChild('cit', {static : false}) statecity : ElementRef;
  @ViewChild('nr', {static:false}) recreason : ElementRef;

  @ViewChild('empltype', {static : false}) empltype : ElementRef;
  @ViewChild('njl', {static : false}) joblev : ElementRef;
  @ViewChild('ns', {static:false}) shif : ElementRef;
  @ViewChild('nt', {static:false}) trav : ElementRef;
  @ViewChild('ns', {static:false}) stat : ElementRef;
  @ViewChild('dur', {static:false}) duration : ElementRef;

  @ViewChild('selvalues', {static:false}) seljobtit : ElementRef;
  

  constructor(private reqservice : RecruitprocessService, private reqrouter : Router, 
    private reqrouted : ActivatedRoute) {      

      this.reqrouted.params.subscribe(userparam =>{
        this.userparamvalue = userparam['uname'];
        this.user_rolevalue = userparam['roletitle'];
     //   this.requistionid = userparam['requisitionid'];
        console.log(this.requistionid);      
    });

    this.BindCities_NewReq();
    this.BindCountries_NewReq();
    this.BindRegions_NewReq();
    this.BindJobTitle_NewReq();
    this.BindDepartment_NewReq();
    this.BindApprover_NewReq();
    this.BindInterviewLevel_NewReq();
    this.BindJobLevels_NewReq();
    this.BindRecruitReason_NewReq();
    this.BindStatus_NewReq();
    this.BindTravel_NewReq();
    this.BindShift_NewReq();
    this.BindEmployTypes_NewReq();
    this.BindMandSkills_NewReq();
    this.BindCollaborator_NewReq();
    this.BindDuration();

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
  
    $(document).ready(function()
  {
   var from = $( "#StartDate" )
   .datepicker({
   dateFormat: "yy-mm-dd",
   changeMonth: true,
   changeYear: true,
   })
   .on( "change", function() {
   to.datepicker( "option", "minDate", getDate( this ) );
   }),
 to = $( "#EndDate" ).datepicker({
   dateFormat: "yy-mm-dd",
   changeMonth: true
 })
 .on( "change", function() {
   from.datepicker( "option", "maxDate" );
 });



 function getDate( element ) {
 var date;
 var dateFormat = "yy-mm-dd";
 try {
   date = $.datepicker.parseDate( dateFormat, element.value );
 } catch( error ) {
   date = null;
 }

 return date;
 }

  
    $('.select2').select2();

     $("#jobtitle").select2({
      placeholder: "Select JobTitle",
      tags: true
    });
	
	 $("#department").select2(
    {
      placeholder: "Select Department",
      tags: true
    });
	
	   $("#joblocation").select2(
     {
      placeholder: "Select Region"
     });

     $("#country").select2(
      {
       placeholder: "Select Country"
      });

      $("#statecity").select2(
        {
         placeholder: "Select State"
        });

        $("#duration").select2(
          {
           placeholder: "Select Duration"
          });        
	  
	   $("#recruitreason").select2(
     {
      placeholder: "Select Recruitment Reason"
     });
		
		 $("#employment").select2(
     {
      placeholder: "Select Employment Type"
     });
    //  $("#duration").select2(
    //   {
    //    placeholder: "Select Duration"
    //   });
	  $("#joblevel").select2(
     {
      placeholder: "Select JobLevel"
     });
		$("#shift").select2(
    {
      placeholder: "Select Shift Type"
    });
		$("#travel").select2(
    {
      placeholder: "Select Travel Type"
    });
		$("#interviewrounds").select2(
    {
      placeholder: "Select Interview Rounds",
      tags: true
    });
		$("#approver").select2(
    {
      placeholder: "Select Approver",
      maximumSelectionLength: 2
    });
		$("#status").select2(
    {
      placeholder: "Select Status"
    });
    $('#mandskills').select2(
    {
        placeholder: "Select Mandatory Skills",
        tags: true
    });
    $('#goodskills').select2(
      {
          placeholder: "Select Good Skills",
          tags: true
      });
      $('#interviewlevel').select2(
        {
            placeholder: "Select Interview Level",
            tags: true
        });
        $('#collaborator').select2(
          {
              placeholder: "Select Collaborators"
          });

    $('#jobtitle').change(function(){
      var selectedoptions = $(this).find('option:selected');
      if(selectedoptions != undefined) {
        this.jobtitle = $(this).val();
      }
    });

    $('#duration').change(function(){
      var selectedoptions = $(this).find('option:selected');
      if(selectedoptions != undefined) {
        this.durationval = $(this).val();
      }
    });

     

    $('#department').change(function(){
      var selectedoptions = $(this).find('option:selected');
      if(selectedoptions != undefined) {
        this.department = $(this).val();
      }
    });

      $('#joblocation').change(function(){
        var selectedoptions = $(this).find('option:selected');
        if(selectedoptions != undefined) {
          this.regions = $(this).val();
        }
      });

      $('#country').change(function(){
        var selectedoptions = $(this).find('option:selected');
        if(selectedoptions != undefined) {
          this.countrys = $(this).val();
        }
      });

      $('#statecity').change(function(){
        var selectedoptions = $(this).find('option:selected');
        if(selectedoptions != undefined) {
          this.state_new = $(this).val();
        }
      });

        $('#recruitreason').change(function(){
          var selectedoptions = $(this).find('option:selected');
          if(selectedoptions != undefined) {
            this.recruitreason = $(this).val();
          }
        });
        
          $('#employment').change(function(){
            if(this.value === "1"){
              $("#div_duration").hide();
          } else {
              $("#div_duration").show();
          }
            
            var selectedoptions = $(this).find('option:selected');
            if(selectedoptions != undefined) {             
              this.employment = $(this).val();
            }
          });
      
            $('#joblevel').change(function(){
              var selectedoptions = $(this).find('option:selected');
              if(selectedoptions != undefined) {
                this.joblevel = $(this).val();
              }
            });
        
              $('#shift').change(function(){
                var selectedoptions = $(this).find('option:selected');
                if(selectedoptions != undefined) {
                  this.shift = $(this).val();
                }
              });

                $('#travel').change(function(){
                  var selectedoptions = $(this).find('option:selected');
                  if(selectedoptions != undefined) {
                    this.travel = $(this).val();
                  }
                });

                  $('#interviewrounds').change(function(){
                    var selectedoptions = $(this).find('option:selected');
                    if(selectedoptions != undefined) {
                      this.interviewrounds = $(this).val();
                    }
                  });
              
                    $('#approver').change(function(){
                      var select = "";
                        var select1="";
                    $("#addapprover").click(function () {
                    $("#approver option:selected").each(function(){       
                        select += "/"+$(this).text().trim();
                        select1 += "/"+$(this).val();
                    });
                    if(select != ""){
                        select = select.substr(1);
                        select1 = select1.substr(1);        
                    }
                    $("#selectedApprovers").text(select);
                      });
                    });             
                    
                    $('#collaborator').change(function(){
                      var select = "";
                        var select1="";
                    $("#addcollaborators").click(function () {
                    $("#collaborator option:selected").each(function(){       
                        select += "/"+$(this).text().trim();
                        select1 += "/"+$(this).val();
                    });
                    if(select != ""){
                        select = select.substr(1);
                        select1 = select1.substr(1);        
                    }
                    $("#selectedCollaborators").text(select);
                      });
                    });             
                
                      $('#status').change(function(){
                        var selectedoptions = $(this).find('option:selected');
                        if(selectedoptions != undefined) {
                          this.status = $(this).val();
                        }
                      });

                      $('#mandskills').change(function(){
                        var select = "";
                        var select1="";
                    $("#addmandskills").click(function () {
                    $("#mandskills option:selected").each(function(){       
                        select += "/"+$(this).text().trim();
                        select1 += "/"+$(this).val();
                    });
                    if(select != ""){
                        select = select.substr(1);
                        select1 = select1.substr(1);        
                    }
                    $("#selectedMandSKills").text(select);
                      });
                    });

                    $('#goodskills').change(function(){
                      var select = "";
                      var select1="";
                  $("#addgoodskills").click(function () {
                  $("#goodskills option:selected").each(function(){       
                      select += "/"+$(this).text().trim();
                      select1 += "/"+$(this).val();
                  });
                  if(select != ""){
                      select = select.substr(1);
                      select1 = select1.substr(1);        
                  }
                  $("#selectedGoodSkills").text(select);
                    });
                  });

                  $('#interviewlevel').change(function(){
                    var select = "";
                    var select1="";
                $("#addinterviewlevel").click(function () {
                $("#interviewlevel option:selected").each(function(){       
                    select += "/"+$(this).text().trim();
                    select1 += "/"+$(this).val();
                });
                if(select != ""){
                    select = select.substr(1);
                    select1 = select1.substr(1);        
                }
                $("#selectedInterLevels").text(select);
                  });
                });
      


    
    $("#NewRequisition").validate({
      onkeyup: false,
      errorClass: "myErrorClass",

      highlight: function (element, errorClass, validClass) {
        var elem = $(element);
        if (elem.hasClass("select2-offscreen")) {
            $("#s2id_" + elem.attr("id") + " ul").addClass(errorClass);
        } else {
            elem.addClass(errorClass);
        }
    }
  });    
  })  
  }

  ngOnInit() {

    // this.reqservice.edit_PopulateRequisition(this.requistionid, this.user_rolevalue).subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // )
  }
  Validatenewrqst() 
  {
     newrequist();
   // dropdownvalid();
  }
  
  BindCities_NewReq()
  {
    this.reqservice.BindCities_States();
  }

  BindCountries_NewReq()
  {
    this.reqservice.BindCountries();
  }

  BindRegions_NewReq()
  {
    this.reqservice.BindRegions();
  }

  BindJobTitle_NewReq()
  {
    this.reqservice.BindJobTitles();
  }
  
  BindDepartment_NewReq()
  {
    this.reqservice.BindDepartments();
  }

  BindMandSkills_NewReq()
  {
    this.reqservice.BindMandSkills();
  }

  BindRecruitReason_NewReq()
  {
    this.reqservice.BindRecruitReasons();
  }

  BindJobLevels_NewReq()
  {
    this.reqservice.BindJobLevel();
  }

  BindTravel_NewReq()
  {
    this.reqservice.BindTravel();
  }

  BindInterviewLevel_NewReq()
  {
    this.reqservice.BindInterviewLevel();
  }

  BindApprover_NewReq()
  {
    this.reqservice.BindApprover();
  }

  BindCollaborator_NewReq()
  {
    this.reqservice.BindCollaborators();
  }

  BindStatus_NewReq()
  {
    this.reqservice.BindStatus();
  }

  BindShift_NewReq()
  {
    this.reqservice.BindShift();
  }

  BindEmployTypes_NewReq()
  {
    this.reqservice.BindEmployType();
  }

  BindDuration()
  {
    this.reqservice.BindGetEmpFromStatusTab();
  }

  NavigateCandidate()
  {
    this.reqrouter.navigate(['candidates/', this.userparamvalue, this.user_rolevalue]);
  }

  SubmitNewReq_SaveasDraft(newrequform : NgForm)
  {
    this.savenewreq_savedraft = new TalentRequest_SaveDraft();
    this.commondate = new Date();
    const datevalue = formatDate(this.commondate,'yyyy-MM-dd','en-US');    

    let StartDate = this.sdate.nativeElement.value;
    let EndDate = this.edate.nativeElement.value;
    let job = this.jobtit.nativeElement.value;
    let depart = this.dept.nativeElement.value;
    let locate = this.jlocation.nativeElement.value;
    let countryval = this.country.nativeElement.value;
    let stateval = this.statecity.nativeElement.value;
    let reasonrec = this.recreason.nativeElement.value;
    let duravalue = this.duration.nativeElement.value;
  
    let emptype = this.empltype.nativeElement.value;
    let jlevel = this.joblev.nativeElement.value;
    let shiftval = this.shif.nativeElement.value;
    let travelval = this.trav.nativeElement.value;
    let statusval = this.stat.nativeElement.value;

    let start = new Date(StartDate);
    let end = new Date(EndDate);

    this.startdatevalue = formatDate(start,'yyyy-MM-dd','en-US');
    this.endatevalue = formatDate(end,'yyyy-MM-dd','en-US');
    this.savenewreq_savedraft.JobTitleFKID = job;
    this.savenewreq_savedraft.DepartmentFKID = depart;
    this.savenewreq_savedraft.RecruitReasonFKID = reasonrec;
    this.savenewreq_savedraft.JobLevelFKID = jlevel;
    this.savenewreq_savedraft.ShiftFKID = shiftval;
    this.savenewreq_savedraft.TravelFKID = travelval;
    this.savenewreq_savedraft.StatusFKID = statusval;

     var mandskills_values = document.getElementById("selectedMandSKills").innerHTML;     
    var goodskills_values = document.getElementById("selectedGoodSkills").innerHTML;
    var interlevel_values = document.getElementById("selectedInterLevels").innerHTML;
    var approver_values = document.getElementById("selectedApprovers").innerHTML;
    var collaborator_values = document.getElementById("selectedCollaborators").innerHTML;
    this.savenewreq_savedraft.GoodSkillsFKID = goodskills_values;
    this.savenewreq_savedraft.MandSkillsFKID = mandskills_values;
    this.savenewreq_savedraft.CollaboratorFKID = collaborator_values;
    this.savenewreq_savedraft.ApproverFKID = approver_values;
    this.savenewreq_savedraft.InterviewLevelFKID = interlevel_values;
    this.savenewreq_savedraft.JobOpeningsCount = newrequform.value.JobOpeningsCount;
    this.savenewreq_savedraft.Description = newrequform.value.Description;
    this.savenewreq_savedraft.EmploymentTypeFKID = emptype;
    this.savenewreq_savedraft.StartDate = this.startdatevalue;
    this.savenewreq_savedraft.EndDate = this.endatevalue;
    this.savenewreq_savedraft.LocationFKID = locate;
    this.savenewreq_savedraft.OverallExperience = newrequform.value.OverallExperience;
    this.savenewreq_savedraft.QuestionnaireFKID = newrequform.value.QuestionnaireFKID;
    this.savenewreq_savedraft.Salary = newrequform.value.Salary;
    this.savenewreq_savedraft.StateFKID =countryval;
    this.savenewreq_savedraft.CityFKID = stateval;
    if(emptype !== 1)
    {
      this.savenewreq_savedraft.DurationFKID = duravalue;
    }
    else
    {
      this.savenewreq_savedraft.DurationFKID = 0;
    }
    
    
    this.savenewreq_savedraft.AdditionalNotes = newrequform.value.AdditionalNotes;
    this.savenewreq_savedraft.JobPosterID = "001";
    this.savenewreq_savedraft.IsActive = true;
    this.savenewreq_savedraft.IsApprove = false;
    this.savenewreq_savedraft.IsReject = false;
    this.savenewreq_savedraft.TaskFKID = 1;
    this.savenewreq_savedraft.CreatedBy = this.userparamvalue;
    this.savenewreq_savedraft.UpdatedBy = this.userparamvalue;
    this.savenewreq_savedraft.ApprovedBy = this.userparamvalue;
    this.savenewreq_savedraft.CreatedDate = this.commondate;
    this.savenewreq_savedraft.UpdatedDate = this.commondate;
    this.savenewreq_savedraft.InterviewRounds = 0;
    this.savenewreq_savedraft.ViewStatus = "Draft Saved";
    this.reqservice.postNewRequisition_SaveasDraft(this.savenewreq_savedraft).subscribe(
      reqres => {
        this.reqrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      },
      err => {
        console.log(err);
        console.error();        
      });
  }
  SubmitNewRequistion(newrequform : NgForm)
  {
    this.savenewrequisition = new TalentRequest();
    this.commondate = new Date();
    const datevalue = formatDate(this.commondate,'yyyy-MM-dd','en-US');

    

    let StartDate = this.sdate.nativeElement.value;
    let EndDate = this.edate.nativeElement.value;
    let job = this.jobtit.nativeElement.value;
    let depart = this.dept.nativeElement.value;
    let locate = this.jlocation.nativeElement.value;
    let countryval = this.country.nativeElement.value;
    let stateval = this.statecity.nativeElement.value;
    let reasonrec = this.recreason.nativeElement.value;
    let duravalue = this.duration.nativeElement.value;
  
    let emptype = this.empltype.nativeElement.value;
    let jlevel = this.joblev.nativeElement.value;
    let shiftval = this.shif.nativeElement.value;
    let travelval = this.trav.nativeElement.value;
    let statusval = this.stat.nativeElement.value;

    let start = new Date(StartDate);
    let end = new Date(EndDate);

    this.startdatevalue = formatDate(start,'yyyy-MM-dd','en-US');
    this.endatevalue = formatDate(end,'yyyy-MM-dd','en-US');
    this.savenewrequisition.JobTitleFKID = job;
    this.savenewrequisition.DepartmentFKID = depart;
    this.savenewrequisition.RecruitReasonFKID = reasonrec;
    this.savenewrequisition.JobLevelFKID = jlevel;
    this.savenewrequisition.ShiftFKID = shiftval;
    this.savenewrequisition.TravelFKID = travelval;
    this.savenewrequisition.StatusFKID = statusval;

     var mandskills_values = document.getElementById("selectedMandSKills").innerHTML;     
    var goodskills_values = document.getElementById("selectedGoodSkills").innerHTML;
    var interlevel_values = document.getElementById("selectedInterLevels").innerHTML;
    var approver_values = document.getElementById("selectedApprovers").innerHTML;
    var collaborator_values = document.getElementById("selectedCollaborators").innerHTML;
    this.savenewrequisition.GoodSkillsFKID = goodskills_values;
    this.savenewrequisition.MandSkillsFKID = mandskills_values;
    this.savenewrequisition.CollaboratorFKID = collaborator_values;
    this.savenewrequisition.ApproverFKID = approver_values;
    this.savenewrequisition.InterviewLevelFKID = interlevel_values;
    this.savenewrequisition.JobOpeningsCount = newrequform.value.JobOpeningsCount;
    this.savenewrequisition.Description = newrequform.value.Description;
    this.savenewrequisition.EmploymentTypeFKID = emptype;
    this.savenewrequisition.StartDate = this.startdatevalue;
    this.savenewrequisition.EndDate = this.endatevalue;
    this.savenewrequisition.LocationFKID = locate;
    this.savenewrequisition.OverallExperience = newrequform.value.OverallExperience;
    this.savenewrequisition.QuestionnaireFKID = newrequform.value.QuestionnaireFKID;
    this.savenewrequisition.Salary = newrequform.value.Salary;
    this.savenewrequisition.StateFKID =countryval;
    this.savenewrequisition.CityFKID = stateval;
    if(emptype !== 1)
    {
      this.savenewrequisition.DurationFKID = duravalue;
    }
    else
    {
      this.savenewrequisition.DurationFKID = 0;
    }
    
    
    this.savenewrequisition.AdditionalNotes = newrequform.value.AdditionalNotes;
    this.savenewrequisition.JobPosterID = "001";
    this.savenewrequisition.IsActive = true;
    this.savenewrequisition.IsApprove = false;
    this.savenewrequisition.IsReject = false;
    this.savenewrequisition.TaskFKID = null;
    this.savenewrequisition.CreatedBy = this.userparamvalue;
    this.savenewrequisition.UpdatedBy = this.userparamvalue;
    this.savenewrequisition.ApprovedBy = this.userparamvalue;
    this.savenewrequisition.CreatedDate = this.commondate;
    this.savenewrequisition.UpdatedDate = this.commondate;
    this.savenewrequisition.InterviewRounds = 0;
    this.reqservice.postNewRequisition(this.savenewrequisition).subscribe(
      reqres => {
        this.reqrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      },
      err => {
        console.log(err);
        console.error();        
      });
  }

  
  Logout()
  {
   this.reqrouter.navigate(['login']);
  }

  clickCancel()
  {
    this.reqrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
  }

  NavigateTasks()
  {
    this.reqrouter.navigate(['tasks/', this.userparamvalue, this.user_rolevalue])
  }
 
  // Javascript function to restrict the text values
  onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  } 
}

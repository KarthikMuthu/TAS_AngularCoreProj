// import { Injectable } from '@angular/core';

import { Time } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecruitprocessModelService {

//   constructor() { }
// }

export class JobTitle
{
    JobTitlePKID : number;
    JobTitleName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Department
{
    DepartmentPKID : number;
    DepartmentName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Location
{
    LocationPKID : number;
    LocationName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Skill
{
    SkillsPKID : number;
    SkillsName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class EmploymentType
{
    EmploymentTypePKID : number;
    EmploymentTypeName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class JobLevel
{
    JobLevelPKID : number;
    JobLevelName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Shift
{
    ShiftPKID : number;
    ShiftType : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Travel
{
    TravelPKID : number;
    TravelType : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class City
{
    CityPKID : number;
    CityName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class State
{
    StatePKID : number;
    StateName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class User
 {   
    UserPKID : number;
    EmployeeID : string;
    UserName : string;
    UserEmail : string;
    OldPassword : string;
    NewPassword : string;
    IsRemember : boolean;
    Mobile : string;
    DOJ : Date;
    Address : string;
    PinCode : number;
    CityFKID : number;
    StateFKID : number;
    RoleFKID : number;
    ProfileImage : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Status
{
    StatusPKID : number;
    StatusName : string;
    FlagStatus : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class UserPermission
{
    PermissionPKID : number;
    PermissionTitle : string;
    Description : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class UserRole
{
    RolePKID : number;
    RoleTitle : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Role_Permission	
{
    RolePermissionPKID : number;
    RoleFKID : number;
    PermissionFKID : number;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Questionnaire	
{
    QuestionnairePKID : number;
    QuestionnaireName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class EducQualification		
{
    QualificationPKID : number;
    Qualification : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Notification			
{
    NotificationPKID : number;
    UserFKID : number;
    Notification_Action : string;
    Description : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    CreatedDate : Date;
}

export class InterviewLevel			
{
    InterviewLevelPKID : number;
    InterviewLevelType : string;
    LevelNumber : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Interview				
{
    InterviewPKID : number;
    InterviewDate : Date;
    CandidateFKID : number;    
    Remarks : string;
    Start_Time : Time;
    End_Time : Time;
    InterviewScheduledBy : number;
    AssignedTo : number;
    StatusFKID : number;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class InterviewResult
{
    InterviewResultsPKID : number
    InterviewFKID : number;
    CandidateFKID : number;
    ApprovedBy : number;
    StatusFKID : number;
    JobPosterID : string;
    AttendedRounds : number;
    TotalRatings : number;
    Remarks : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Designation		
{
    DesignationPKID : number;
    DesignationName : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class InterviewAssessment		
{
    InterviewAssessPKID : number;
    AssessedBy : number;
    CandidateFKID : number;
    InterviewFKID : number;
    InterviewLevelFKID : number;
    AssessmentQuesFKID : number;
    Ratings : number;
    Remarks : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class AssessmentQuestion		
{
    AssessmentQuesPKID : number;
    Questions : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Task		
{
    TasksPKID : number;
    TasksActivity : string;
    Description : string;
    ActionUserID : number;
    JobPosterID : string;
    IsCompleted : boolean;
    IsActive : boolean;
    IsDeleted : boolean;
    IsApproved : boolean;
    IsRejected : boolean;
    Remarks : string;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class Log		
{
    LogsPKID : number;
    LogsName : string;
    UserFKID : number;
    AccessType : string;
    Description : string;    
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class TalentCareerUpload		
{
    CandidatePKID : number;
    CandidateName : string;
    EmailID : string;
    MobileNumber : number;
    CurrentLocationFKID : number;
    PreferredLocationFKID : number;
    TotalExperience : number;
    CurrentCompany : string;
    DesignationFKID : number;
    ExpertSkillsFKID : number;
    TechSkillsFKID : number;
    EducQualifyFKID : number;
    JobTitleFKID : number;
    Resume : string;
    JobPosterID : string;
    JobReferenceNumber : string;
    UploadedDate : Date;   
    IsApprove : boolean;
    IsReject : boolean;  
    IsActive : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class TalentRequest		
{
    JobRequisitionPKID : number;
    JobOpeningsCount : number;
    StartDate : Date;
    EndDate : Date;
    OverallExperience : number;
    RecruitReasonFKID : string;
    Description : string;
    Salary : number;
    AdditionalNotes : string;
    JobPosterID : string;
    JobTitleFKID : string;
    DepartmentFKID : string;
    LocationFKID : number;
    StateFKID : number;
    CityFKID : number;
    DurationFKID : number;
    CollaboratorFKID : string;
    MandSkillsFKID : string;
    GoodSkillsFKID : string;
    EmploymentTypeFKID : number;
    JobLevelFKID : string;
    ShiftFKID : string;
    TravelFKID : string;
    ApproverFKID : string;
    StatusFKID : string;
    QuestionnaireFKID : string;
    InterviewRounds : number;
    InterviewLevelFKID : string;
    TaskFKID : string;
    CreatedBy : string;
    ApprovedBy : string;
    IsApprove : boolean;
    IsReject : boolean;  
    IsActive : boolean;    
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;    
}

export class EmailNotification
{
    EmailPKID : number
    MailingDate : Date;
    SenderEmail : string;
    Recepients : string;
    Subject : string;
    MessageBody : string;
    CreatedBy : string;
    CreatedDate : Date;
}

export class RecruitmentReason
{
    RecruitReasonPKID : number;
    RecruitReason : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class InsertCommonValues
{
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

export class TalentRequest_SaveDraft		
{
    JobRequisitionPKID : number;
    JobOpeningsCount : number;
    StartDate : Date;
    EndDate : Date;
    OverallExperience : number;
    RecruitReasonFKID : string;
    Description : string;
    Salary : number;
    AdditionalNotes : string;
    JobPosterID : string;
    JobTitleFKID : string;
    DepartmentFKID : string;
    LocationFKID : number;
    StateFKID : number;
    CityFKID : number;
    DurationFKID : number;
    CollaboratorFKID : string;
    MandSkillsFKID : string;
    GoodSkillsFKID : string;
    EmploymentTypeFKID : number;
    JobLevelFKID : string;
    ShiftFKID : string;
    TravelFKID : string;
    ApproverFKID : string;
    StatusFKID : string;
    QuestionnaireFKID : string;
    InterviewRounds : number;
    InterviewLevelFKID : string;
    TaskFKID : number;
    CreatedBy : string;
    ApprovedBy : string;
    IsApprove : boolean;
    IsReject : boolean;  
    IsActive : boolean;    
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
    ViewStatus : string;
}

export interface RequisitionList
{
    jobtitle : string;
    department : string;
    createdby : string;
    startdate : Date;
    enddate : Date;
    jobopeningcount : number;
    status : number;
}

export class Tasks {
    jobposterid : string;
    taskid : number;
    createdon : string;    
    tasktype: string;
    assignor: string;
    priority: string;
    // actionuserid : number;
    // approver : string;    
  }
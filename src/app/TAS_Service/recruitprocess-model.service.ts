// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecruitprocessModelService {

//   constructor() { }
// }


export class User
 {   
    UserPKID : number;
    EmployeeID : number;
    UserName : string;
    UserEmail : string;
    Mobile : number;
    DOJ : Date;
    Address : string;
    PinCode : number;
    CityFKID : number;
    StateFKID : number;
    ProfileImage : string;
    IsActive : boolean;
    IsDeleted : boolean;
    CreatedBy : string;
    UpdatedBy : string;
    CreatedDate : Date;
    UpdatedDate : Date;
}

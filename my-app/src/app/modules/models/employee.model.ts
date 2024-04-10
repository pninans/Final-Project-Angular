import { Role } from "./role.model";

export enum Type {
    MALE, FEMALE
    }   
          
   export class Employee {
      
       FirstName: string;
       LastName: string;
       TypeEmployee: Type;
       Tz:string;
       StartWork:Date;
       BirthDate:Date;
       Roles:Role[];
       constructor(
          
           FirstName: string,
           LastName: string,
           TypeEmployee: Type,
           Tz: string ,
           StartWork:Date,
           BirthDate:Date,
           Roles:Role[]       
       ) {
          
           this.FirstName = FirstName;
           this.LastName = LastName;
           this.TypeEmployee = TypeEmployee;
           this.Tz = Tz;
           this.StartWork=StartWork;
           this.BirthDate=BirthDate;
           this.Roles=Roles;
       }
   }
   
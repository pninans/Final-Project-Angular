export enum RoleName {
  TECHER, PRINCIPAL, DEVELOPER 
  }



export class Role {
    
  Name: RoleName;
  IsPrincipal:boolean;
  EnterWorking:Date;
  constructor(
      Name: RoleName,
      IsPrincipal:boolean,
      EnterWorking:Date
  ) {
     
      this.Name = Name;
      this.IsPrincipal=IsPrincipal;
      this.EnterWorking=EnterWorking;
  }
}

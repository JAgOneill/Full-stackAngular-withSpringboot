import { Country } from "./country";

export class Employee {
    /*
    1)The purpose of this class is to map the specified fields 
    with the fields of Spring entity class.
    2) This class will hold the response of Springboot REST API 
    */

   id:number ;
 country:Country[]=[];
    name:String ;
    phoneno:String ;
    departmentit:String;
    status:String;
    createddtm:Date;
    createdby:String ;
    updateddtm:Date ;
     updatedby:String ;
}

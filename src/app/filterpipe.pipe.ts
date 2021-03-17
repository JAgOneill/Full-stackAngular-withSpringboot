import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any,searchType:string) {
    if(value.length==0){
        return value;
    }

    let employee:any[]=[];
    for(let i=0;i<value.length;i++){
        let name1:string=value[i].name;
        let department1:string=value[i].departmentit;
        let status1:string=value[i].status;
        let phoneno1:string=value[i].phoneno;
        if(name1.toLowerCase().indexOf(searchType.toLowerCase())>-1){
            employee.push(value[i])
        }else if(department1.toLowerCase().indexOf(searchType.toLowerCase())>-1){
          employee.push(value[i]);

            
        }else if(status1.toLowerCase().indexOf(searchType.toLowerCase())>-1){
          employee.push(value[i]);

        }else if(phoneno1.toLowerCase().indexOf(searchType.toLowerCase())>-1){
          employee.push(value[i]);

      }
        else if(value[i].country.cname.toLowerCase().indexOf(searchType.toLowerCase())>-1){
          employee.push(value[i]);
        }
        
    }

    return employee;
     

}

}
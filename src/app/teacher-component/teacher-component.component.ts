import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ParsingServiceService} from 'src/app/parsing-service.service'
import { CompileSummaryKind } from '@angular/compiler';

@Component({
  selector: 'app-teacher-component',
  templateUrl: './teacher-component.component.html',
  styleUrls: ['./teacher-component.component.css']
})
export class TeacherComponentComponent implements OnInit {

  constructor(private http: HttpClient, private hp: ParsingServiceService) {
     
   }
  object;
  o:Object;
  surname;
  teacher="";
  help_name=[];
  teachers=[];
  subObj=[];
  condition=false;
  startSpinner=true;
  ngOnInit() { 
   // console.log("ss");
   this.as();
  }

  isEmpty(obg){
    //console.log(Object.keys(obg).length==0?true:false)
   return Object.keys(obg).length==0?false:true;
  }

  async as(){
     await this.getRasp().then(()=>{
      console.log("end");
    });
    
  }

  change(){
    this.condition=!this.condition;
  }


  async getRasp(){
    
    this.startSpinner=true;
    this.getGroupInfo().then(()=>{
      this.subObj=[];
    if(this.surname!==undefined)
    this.teacher=this.surname;//.split(" ")[0];
    for(let j=1;j<7;j++){
      this.subObj.push([]);
    }
      console.log(this.object);
      for (let i of this.object) {
        
          for(let j=1;j<7;j++){
          //  console.log(i.grid[j])
              for(let a=1;a<7;a++){
                if(i.grid[j]!==undefined){
                  let bufObj=i.grid[j]
                 
                  for (const iterator of bufObj[a]) {
                    if(!this.teachers.includes(iterator.teacher)){
                      this.teachers.push(iterator.teacher);
                    }
                    this.teachers.map((currentValue, index, array)=>{
                      if(currentValue.includes(",")){
                        if(!array.includes(currentValue.split(",")[0]))
                          array.push(currentValue.split(",")[0]);
                        else if(!array.includes(currentValue.split(",")[1]))
                          array.push(currentValue.split(",")[1]);
                        array.splice(array.indexOf(currentValue),1);
                      }
                    });
                    if(this.surname!==undefined&&iterator.teacher.toLowerCase().includes(this.surname.toLowerCase())){
                    
                      iterator.date_from=iterator.date_from.split("-").join(".");
                      iterator.date_to=iterator.date_to.split("-").join(".");
                      
                      this.subObj[j-1].push(iterator);
                      switch(a-1){
                        case 0:iterator.num="9:00-10:30"
                        break;
                        case 1:iterator.num="10:40-12:10"
                        break;
                        case 2:iterator.num="12:20-13:50"
                        break;
                        case 3:iterator.num="14:30-16:00"
                        break;
                        case 4:iterator.num="16:10-17:40"
                        break;
                        case 5:iterator.num="17:50-19:20"
                        break;
                      }
                    }
                  }
                }
              }
          }
          
      }
      this.surname="";
    }).then(res=>{
      this.startSpinner=false;
    });
  }

  async injectToinput(name){
   this.surname=name;
   this.getRasp();
   this.log(true);
  }

  log(deleted = false){
    //console.log(this.surname+" aa1")
    
    if(this.surname!==undefined&&this.surname.length===0||deleted===true){
      this.condition=false;
      this.help_name=[];
      console.log(this.condition);
    }
    else{
   
    this.help_name=[];
    for (let teacher of this.teachers) {
      //console.log(teacher.split(" ")[0].substring(0,this.surname.length-1));
      if (teacher.substring(0,this.surname.length).toLowerCase().indexOf(this.surname.toLowerCase())!==-1 ){
        
        this.help_name.push(teacher);
       this.condition=true;
       
        //break;
      }
    }
    console.log(this.condition);
  }
    // if(this.teachers.includes(this.surname))
    //   this.condition=true;
    // else
    //   this.condition=false;
  }
  async getGroupInfo(){
    this.object=await this.hp.getData("171-333");

  }

}

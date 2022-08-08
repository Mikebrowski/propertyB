import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'attribuideTest',
   template: `
   <div class="container" (click)="onDivClicked()">
   <h2>THIS ONE IS ORGINAL </h2>
   <input (keyup)="onKeyUp($event)" />
   
   <div class="container">
      <h2>THIS ONE IS DIFFRENT </h2>
      <input (keyup.enter)="onKeyUp2($event)" />    
   </div>

   <div class="container">
      <h2>THIS ONE IS WITH #EMAIL </h2>
      <input #email (keyup.enter)="onKeyUp3(email.value)" />    
   </div>

   <div class="container">
      <h2>THIS ONE IS WITH WITHOUT THE TEMPLTE VARIABLE </h2>
      <input [value]="email2" (keyup.space)="onKeyUp4()" />    
   </div>

 <!--   <div class="container">
      <h2>THIS ONE IS WITH WITHOUT THE TEMPLTE VARIABLE </h2>
      <input [value]="email2" (keyup.space)="email2 = $event.target.value; onKeyUp5()" />    
   </div>  -->

   <div class="container">
      <h2>***THIS ONE IS WITH WITH THE NG MODEL***</h2>
      <input [(ngModel)]="email2" (keyup.enter)="onKeyUp6()" />    
   </div>



   <h2 [class.active]>{{tittle}}</h2>
   <button  (click)="clicked($event)" [style.backgroundColor]="isActive ? 'brown': 'blue'" class="btn btn-primary" > save </button>
   <button  onclick="clicked2()" [style.backgroundColor]="isActive ? 'brown': 'blue'" class="btn btn-primary" > save2 </button>
   </div>
   `
})

export class CoursesComponentAT {

   email= "me@example.com";
   email2= "me@example.com";
  
  //EVENT BOBLING OCCURS WITH EVENT BINDING

   isActive= false;
   isNotActive=true;
   // CLASS BINDING DOESNT SEEM TO WORK

  //backgroundColor="black"

  tittle="displaying Tutorial";
  imageUrl="https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg"

  colSpan= 2;

  x = "https://www.treehugger.com/thmb/V2MhGaK4ChvZDatdfWIfm-wml3o=/2217x2217/smart/filters:no_upscale()/GettyImages-593450425-5176c57c7b77417f9dd01dfb43827e7b.jpg"
  // property binding works only from component to the dom

  //   <TEMPLATE VARIABLE>
  //         ----
  // <input #email (keyup.enter)="onKeyUp3(email.value)" />    


  //WHEN ADDING A NEW MODULE REMEMBER TO RESET

  
  clicked($event:any){
   $event.stopPropagation();
   console.log("buttons was clicked", $event);
   
   //counter++;
  }
  clicked2(){
   console.log("buttons was clicked");
   }
   onDivClicked(){
      console.log("div was clicked");
   }
   onKeyUp($event:any){
      if($event.keyCode === 13 ){
         console.log("ENTER was pressed",$event)
      }
   }
   onKeyUp2($event:any){
      if($event.keyCode === 13 ){
         console.log("ENTER was pressed",$event.target.value)
      }
   }
   onKeyUp3(email: any){
      {
         console.log("ENTER was pressed WITH EMAIL #EMAIL",email)
      }
   }
   onKeyUp4(){
      {
         console.log(this.email2)
      }
      //WITH OBJECTS YOU SHOULDNT PASS PARAMETERS AROUND 
   }
   onKeyUp5(){
      {
         console.log(this.email2)
      }
   }
   onKeyUp6(){
      {
         // NG MODEL EXAMPLE 
         //TWO WAY BIDNING
         /* THIS ONE IS USED to ADD something on to something*/
         console.log(this.email2)
      } 
   }
   
  constructor() { }
}



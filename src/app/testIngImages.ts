import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'imgTesting',
   template: ` <div class="container">
              <img src="{{imageUrl}}" />  
              <img [src]="x"/> 
              </div>
              `
})
export class CoursesComponentTI implements OnInit {

  //THERE ARE PROPERTIES

  //HERE IS AN EXAMPLE OF A DOM OBJECT 
  //<h1 [textContent]="tittle"]></h1>

  //the key thing here is that most attributes of HTMLS, have a one to one mapping for properties of dom objects 
  //there are however a few exepctions, attribudes that dont have a representation in the dom SUCH AS COLSPAN
  //WHEN USING A PROPRETY BIDNING REMEMBER THAT YOUR ACUTALLY OF A DOM OBEJCT 

  //EXAMPLE [colSpan]="colspan"] VS [attr.colSpan]="colspan"]


  //INTERPOLATION WORKS WELL FOR ADDING DYNAMIC VALUES


  /* THIS DONT WORK
  selector: 'imgTesting',
  template: `<h2>{{tittle}}</h2>
             <img src="{{imageUrl}}" />  
             <img [src]="x"/> 
             <table>
               <tr>
               <td [attr.colSpan]="colSpan"]></td>
              </tr>
            </table>` */

  tittle="displaying Tutorial";
  imageUrl="https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg"

  x = "https://www.treehugger.com/thmb/V2MhGaK4ChvZDatdfWIfm-wml3o=/2217x2217/smart/filters:no_upscale()/GettyImages-593450425-5176c57c7b77417f9dd01dfb43827e7b.jpg"
  // property binding works only from component to the dom
  colSpan = "3";


  constructor() { }

  ngOnInit(): void {
  }

}

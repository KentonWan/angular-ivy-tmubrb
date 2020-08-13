import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Library ';
  title = 'Kenton';
  applet = [];
  



lib = {
 categories: [
 'Performance', 'Investments', 'Operations'
 ],
 applets: [
 {
 name: 'Performance Snapshot',
 categories: ['Performance']
 },
 {
 name: 'Commitment Widget',
 categories: ['Investments','Performance']
 },
 {
 name: 'CMS',
 categories: ['Investments', 'Performance' ]
 }
 ]
 }; 

 count = this.lib.applets;

 onCategoryClick(category) {
  
  let chosenApplets = [];

  for (let i=0; i < this.lib.applets.length;i++) {
        for (let j=0; j < this.lib.applets[i].categories.length;j++) {
          if(category == this.lib.applets[i].categories[j]){
            chosenApplets.push(this.lib.applets[i].name)
            console.log(this.lib.applets[i].name)
          } else {
            console.log("no")
          }
        }
       }
   this.applet = chosenApplets
}

onSearchApplets (search){
  
  let chosenApplets =[];
  let updatedCategories =[];
  
  for(let i=0; i < this.lib.applets.length; i++){
    if(search.toLowerCase() === this.lib.applets[i].name.toLowerCase()){
      
      chosenApplets.push(this.lib.applets[i].name)
      updatedCategories = this.lib.applets[i].categories;
      this.lib.categories = updatedCategories;
      console.log("yes")
    } else if(search == "") {
      this.lib.categories = ['Performance','Investments','Operations']
      console.log("else if")
    }
  }
  this.applet = chosenApplets;

};

countCategories (category){
  
  let number = 0;
  
  for (let i=0; i < this.lib.applets.length; i++){
    for (let j=0; j < this.lib.applets[i].categories.length;j++){
      if(category === this.lib.applets[i].categories[j]){
        number++
      }
    }
  }
  return number
}
}

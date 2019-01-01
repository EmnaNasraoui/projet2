import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service';
import { Router } from '@angular/router';
declare var document;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  offers:any;
  constructor(private ApiServce:ProjetService ,  private router:Router) { }

  ngOnInit() {
  this.offers=  this.ApiServce.results;
  }
  show(id){
    console.log(id);
    let d =  document.getElementById(id);
   
   if (d.style.display === "none") {
	 d.style.display = "block";
	} else {
	  d.style.display = "none";
	}
}
gotobooknow(){
  this.router.navigate(['/Booknow']);
}
}
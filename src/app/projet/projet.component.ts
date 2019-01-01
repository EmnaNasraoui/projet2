import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  results:any;
  types: any;
  price:any;
  links: any;
  depart: string;
  dateAller: any;
  dateRetour: any;
  arrive: String;
  travelClass:any;
  adult:any;
  dictionaries: any;
  children: any;

  constructor(private ApiServce:ProjetService) { }

  ngOnInit() {
    
  }
 
 getCity(){
   this.ApiServce.getApi(this.depart, this.arrive ,this.dateAller,this.dateRetour,this.travelClass,this.adult,this.children).subscribe(file =>{
  //Read the result field from the JSON response.
  console.log(this.adult)
  console.log(file);
  this.dictionaries=file.dictionaries;
  this.results =file.data;
  this.types=this.results.offerItems;
 })
 }
}

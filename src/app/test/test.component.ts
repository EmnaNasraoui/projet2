import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
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
  constructor(private ApiServce:ProjetService, private router:Router) { }

  ngOnInit() {
  }
   getCity(){
    this.ApiServce.getApi(this.depart, this.arrive ,this.dateAller,this.dateRetour,this.travelClass,this.adult,this.children).subscribe( async file =>{
   //Read the result field from the JSON response.
   console.log(this.adult)
   console.log(file);
   this.dictionaries=file.dictionaries;
   this.results=file.data;
   this.ApiServce.results = this.results;
   this.types=this.results.offerItems;
   this.router.navigate(['/edit']);
  })
  }
  
}

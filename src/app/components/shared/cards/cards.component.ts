import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  @Input() items:any[] = [];

  constructor(private Router:Router) { }

  ngOnInit() {
  }

  getArtist(_artist:any){
      let id:string = ""
      
      if(_artist["type"] =="artist"){
        id = _artist["id"];
      }else{
        id = _artist["artists"][0].id;
      }
      this.Router.navigate(['artista',id]);
  }

}

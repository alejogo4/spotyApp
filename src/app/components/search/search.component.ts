import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any = [];
  loading:boolean;
  constructor(private SpotifyService:SpotifyService) {
      
  }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = false;
    this.SpotifyService.getArtists(termino).subscribe((data:any)=>{
      //console.log(data.artists.items);
      this.artistas = data;
      this.loading = true;
    });;
  }

}

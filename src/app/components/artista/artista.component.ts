import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artista:any = {};
  top_tracks:any = [];
  loading:boolean ;
  constructor(private Router:ActivatedRoute, private SpotifyService:SpotifyService) {
    this.loading = true;

    this.Router.params.subscribe(params =>{
      
      this.getArtista(params["id"]);
      this.getTopTracks(params["id"]);
    })
   }

  getArtista(_id:string){
      this.SpotifyService.getArtist(_id)
      .subscribe(artista=>{
         
          this.artista = artista;
          this.loading = false;
      });
  }

  getTopTracks(_id:string){
    this.SpotifyService.getTopTracks(_id)
    .subscribe(top_tracks=>{
        
        this.top_tracks = top_tracks;
        console.log(top_tracks)
    });
  }
}

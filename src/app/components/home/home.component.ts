import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nuevosLanzamientos:any = [];
  loading:boolean;

    constructor(private SpotifyService:SpotifyService) {
      this.loading = false;
      this.SpotifyService.getNewReleases().subscribe((data:any)=>{
        //console.log(data.albums.items);
        this.nuevosLanzamientos = data;
        this.loading = true;
      },error=>{
          console.log(error);
      });
    }

  

  ngOnInit() {
  }

}

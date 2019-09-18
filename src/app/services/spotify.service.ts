import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient:HttpClient) { 

  }

  getQuery(_url:String){

      let urlRequest = `https://api.spotify.com/v1${_url}`;
      const headers = new HttpHeaders({
        'Authorization':'Bearer BQBgj7ShSTziUP6IJ97IMwk3H-AuvFzJ1EvuiE1rD5pl1ucilqUnK_KCjtMtcQSahiN86aSRLu-q7kqXiwo'
      });
      
      return this.httpClient.get(urlRequest,{headers})
  }

  getNewReleases(){
      
    return this.getQuery('/browse/new-releases').pipe(map(data=> data["albums"].items ));
     
  }


  getArtists(_termino:string){
    return this.getQuery(`/search?q=${_termino}&type=artist`).pipe(map(data=> data["artists"].items ));

  }

  getArtist(_id:string){
    return this.getQuery(`/artists/${_id}`)
    
  }


  getTopTracks(_id:string){
    return this.getQuery(`/artists/${_id}/top-tracks?country=es`).pipe(map(data=> data["tracks"]));
  }
}

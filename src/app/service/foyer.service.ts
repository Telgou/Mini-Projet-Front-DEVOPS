import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/Environnement/environement';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
 private UrlBackend= environement.baseurl;


  constructor(private http:HttpClient) { }
  getAllfoyer()
  {return this.http.get(`${this.UrlBackend}/foyer/retrieve-all-foyers`);


  }
  getfoyerByID(id:number){
    return this.http.get(`${this.UrlBackend}/foyer/retrieve-foyer/`+id)
  }
 
  public updatefoyerr(foyerdata: any)
  {

return this.http.put(`${this.UrlBackend}/foyer/update-foyer`,foyerdata);
  }
}

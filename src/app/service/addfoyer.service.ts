import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/Environnement/environement';

@Injectable({
  providedIn: 'root'
})
export class AddfoyerService {
  private UrlBackend= environement.baseurl;
  constructor(private http:HttpClient) {}

  public addfoyer(foyerdata: any)
  {

return this.http.post(`${this.UrlBackend}/foyer/add-foyer`,foyerdata);

  }

  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/Environnement/environement';

@Injectable({
  providedIn: 'root'
})
export class DeletefoyerService {
  private UrlBackend= environement.baseurl;

  constructor(private http:HttpClient) { }
 deletefoyer(foyerId: number)
  {return this.http.delete(`${this.UrlBackend}/foyer/remove-foyer/${foyerId}`);


  }
}

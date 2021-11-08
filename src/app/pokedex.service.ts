import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  
 
  constructor(private http:  HttpClient) { }

  getAllTrainers() {
    return this.http.get<any>(('http://localhost:8083/trainer/'))
  }

  getTrainer(id:number){
  return this.http.get<any>(('http://localhost:8083/trainer/'+id+'/'))
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }
  addTrainer(t:Trainer): Observable<Trainer[]> {
  return this.http.post<Trainer[]>(('http://localhost:8083/trainer/'), JSON.stringify(t), this.httpOptions);
  }

  getPoke(id:number): Observable<any> {
    return this.http.get<any>(('https://pokeapi.co/api/v2/pokemon/'+id+'/'))
  }

  addPoke(p:Pokemon): Observable<Trainer[]> {
    return this.http.post<Trainer[]>(('http://localhost:8083/poke/'), JSON.stringify(p), this.httpOptions);
  }
}

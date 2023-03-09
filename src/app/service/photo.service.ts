import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  url:string="https://pixabay.com/api/";
  API_KEY:any="34099853-29226e5a431e2f7032564d03b";

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<any>(this.url+"?key="+this.API_KEY).pipe(map(res=>res.hits));
 }

 getPhotoBykeyWord(motcle:string){
  return this.http.get<any>(this.url+"?key="+this.API_KEY+"&q="+motcle).pipe(map(res=>res.hits));
}
  
}

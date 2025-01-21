import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  constructor (private http: HttpClient ) {}

  private apiurl = environment.apiurl;

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });

  listConstants() {
    return this.http.get(this.apiurl + "api/constants/");
  }
  
  getConstant(id: any) {
    return this.http.get(this.apiurl + "api/constants/" + id);
  }

  createConstant(constant: any){
    return this.http.post(this.apiurl+'api/constants/', constant);
  }

  updateConstant(id:string, data:any){
      return this.http.put(this.apiurl + 'api/constants/' + id, data, { headers: this.httpHeaders });
  }

  deleteConstant(id:string){
    return this.http.delete(this.apiurl + 'api/constants/' + id);
  }
}

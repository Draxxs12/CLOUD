import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../Models/Compra';

@Injectable({ providedIn: 'root' })
export class CompraService {
    private url = 'https://cloud1-production-f823d014.up.railway.app/api/compras';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.url);
  }
  
  getById(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.url}/${id}`);
  }

  create(c: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.url, c);
  }

  update(id: number, c: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.url}/${id}`, c);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

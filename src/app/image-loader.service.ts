import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageLoaderService {
  constructor(private http: HttpClient) {}

  loadImage(url: string) {
    return this.http.get(url, { responseType: 'blob' });
  }
}

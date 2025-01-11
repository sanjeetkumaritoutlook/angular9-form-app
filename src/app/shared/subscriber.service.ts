//Singleton service class is doing a mock delay request and returning a string containing a notification.
// You can use Angular's HttpClient to make a post request to your preferred server.

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  constructor() {}

  // Create a POST request using the url and register email in the backend
  register(url: string, email: string): Observable<string | undefined> {
    return of(
      `Please check your email (${email}) and confirm subscription`
    ).pipe(delay(500));
  }
}
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getAuthToken();

    if(token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer' + token
        }
      });
    }

    return next.handle(request);
  }
}
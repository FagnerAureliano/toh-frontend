import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessagesService } from '../services/messages.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessagesService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';
        if (err.error instanceof ErrorEvent) {
          errorMsg = `Error: ${err.error.message}`;
        } else {
          errorMsg = `Error code: ${err.status}, Message: ${err.message}`;
        }
        this.messageService.add(errorMsg)
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}

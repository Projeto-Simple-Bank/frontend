import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

// fazer uma validacao de erro melhor

// Aqui adiciona o token em todas as urls que precisam
// dele, porque ao fazer security no backend você não permite
// que um usuário não logado acesse urls confidenciais
// a que um usuário logado acessa
export const loginInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const token = sessionStorage.getItem('auth_token');

  const salvarToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(salvarToken).pipe(
    catchError((error) => {
      console.log('Token expirado');
      return throwError(() => error);
    })
  );
};

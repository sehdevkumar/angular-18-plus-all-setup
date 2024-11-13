import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  /**
   * During the Any API Request the Key "X-New-Header" will be added to the Cloned Header 
   * So make sure you have Cloned The Req header
   */
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-New-Header', 'new header value'),
  });
  return next(reqWithHeader);
};

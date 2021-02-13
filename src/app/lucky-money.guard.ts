import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {newYearDate2021} from './shared/constant';

@Injectable({
  providedIn: 'root'
})
export class LuckyMoneyGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (new Date() > newYearDate2021) {
      return false;
    }
    return true;
  }

}

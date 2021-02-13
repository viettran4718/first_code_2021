import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuoteComponent} from './quote/quote.component';
import {CountDownComponent} from './count-down/count-down.component';
import {LuckyMoneyComponent} from './lucky-money/lucky-money.component';
import {LuckyMoneyGuard} from './lucky-money.guard';
import {ExploreComponent} from './explore/explore.component';

const routes: Routes = [
  {path: '', component: CountDownComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'lucky-money', component: LuckyMoneyComponent, canActivate: [LuckyMoneyGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

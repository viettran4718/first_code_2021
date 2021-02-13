import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountDownComponent} from './count-down/count-down.component';
import {QuoteComponent} from './quote/quote.component';
import {LuckyMoneyComponent} from './lucky-money/lucky-money.component';
import {InputTextModule} from 'primeng/inputtext';
import {ExploreComponent} from './explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    QuoteComponent,
    LuckyMoneyComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

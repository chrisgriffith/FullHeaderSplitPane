import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPage }  from '../pages/main/main';
import { MercuryPage} from '../pages/mercury/mercury';
import { GeminiPage} from '../pages/gemini/gemini';
import { ApolloPage} from '../pages/apollo/apollo';
import { AstpPage} from '../pages/astp/astp';
import { SkylabPage} from '../pages/skylab/skylab';
import { ShuttlePage} from '../pages/shuttle/shuttle';
import { OrionPage} from '../pages/orion/orion';
import { NasaPage} from '../pages/nasa/nasa';

@NgModule({
  declarations: [
    MyApp,
    MainPage, MercuryPage, GeminiPage, ApolloPage, AstpPage, SkylabPage, ShuttlePage, OrionPage, NasaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     MainPage, MercuryPage, GeminiPage, ApolloPage, AstpPage, SkylabPage, ShuttlePage, OrionPage, NasaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

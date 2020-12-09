/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxFileHelpersModule } from 'ngx-file-helpers';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbButtonModule,
  NbCardModule,
  NbAccordionModule,
  NbInputModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { ColhomeComponent } from './colhome/colhome.component';
import { DetallecampeonatoComponent } from './detallecampeonato/detallecampeonato.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ColequiposComponent } from './colequipos/colequipos.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ColhomeComponent, DetallecampeonatoComponent, NoticiasComponent, ColequiposComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbInputModule,
    NbAccordionModule,
    NgxFileHelpersModule,
    NbWindowModule,
    ThemeModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

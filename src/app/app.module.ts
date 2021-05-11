import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModuleModule} from '@modules/module.module';
import {AuthentificationService} from '@services/authentification.service';
import {UserService} from '@services/user.service';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {AuthInterceptor} from './interceptors/auth.interceptor';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModuleModule,
        FontAwesomeModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatListModule,
        MatRadioModule,
    ],
    providers: [
        UserService,
        AuthentificationService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

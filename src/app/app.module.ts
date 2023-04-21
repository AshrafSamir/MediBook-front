import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { GitstartedComponent } from './components/gitstarted/gitstarted.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SelecteddoctorsComponent } from './components/selecteddoctors/selecteddoctors.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    GitstartedComponent,
    WhyusComponent,
    AppointmentComponent,
    GalleryComponent,
    ServicesComponent,
    DoctorsComponent,
    ContactusComponent,
    SelecteddoctorsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

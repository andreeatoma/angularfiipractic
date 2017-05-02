import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { WorkstoreComponent } from './components/workstore/workstore.component';
import { NewsfeeditemComponent } from './components/news/newsfeeditem/newsfeeditem.component';
import { RssfeedService } from './services/rssfeed.service';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThisdayinhistoryComponent } from './components/home/thisdayinhistory/thisdayinhistory.component';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { LoginComponent } from './components/user/login/login.component';
import { EmailComponent } from './components/user/email/email.component';
import { MembersComponent } from './components/user/members/members.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { WorkstoredataService } from './services/workstoredata.service';
import { WorkstoreitemComponent } from './components/workstore/workstoreitem/workstoreitem.component';
import { AddworkComponent } from './components/workstore/addwork/addwork.component';
import { EditworkComponent } from './components/workstore/editwork/editwork.component';
import { HoverdirectiveDirective } from './directives/hoverdirective.directive';


export const firebaseConfig = {
  apiKey: "AIzaSyA1_CnVMrfaa18k_XikMKpSm_NMbMT-iC4",
  authDomain: "historyshelf.firebaseapp.com",
  databaseURL: "https://historyshelf.firebaseio.com",
  projectId: "historyshelf",
  storageBucket: "historyshelf.appspot.com",
  messagingSenderId: "229713004215"
};


const routes : Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { path: 'workstore/:id', component: WorkstoreitemComponent},
  { path: 'workstore', component: WorkstoreComponent},
  { path: 'add-work', component: AddworkComponent},
  { path: 'edit-work', component: EditworkComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthService] },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsComponent,
    WorkstoreComponent,
    NewsfeeditemComponent,
    StripHtmlTagsPipe,
    SpinnerComponent,
    ThisdayinhistoryComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent,
    FooterComponent,
    WorkstoreitemComponent,
    AddworkComponent,
    EditworkComponent,
    HoverdirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    RssfeedService,
    AuthService,
    WorkstoredataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

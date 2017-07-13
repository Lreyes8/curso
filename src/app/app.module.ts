import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { 
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { UserModule} from './user/user.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';
import { UserComponent } from './user/user.component';

import { ExampleDef } from './example.model';



// Master List

export const examples: ExampleDef[] = [
	{label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'User', name: 'User', path: 'user', component: UserComponent},
]

// Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full'},
  { path: 'user', component: UserComponent, pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

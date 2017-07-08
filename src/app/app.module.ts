import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';

import { 
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';

import { ExampleDef } from './example.model';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgNonBindableExampleComponent } from './ng-non-bindable-example/ng-non-bindable-example.component';


// Master List

export const examples: ExampleDef[] = [
	{label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'NgFor',  name: 'nFor', path: 'ng_for', component: NgForExampleComponent},
  {label: 'NgSwitch', name: 'NgSwitch', path: 'ng_switch', component: NgSwitchExampleComponent},
  {label: 'NgStyle', name: 'NgStyle', path: 'ng_style', component: NgStyleExampleComponent},
  {label: 'NgClass', name: 'NgClass', path: 'ng_class', component: NgClassExampleComponent},
  {label: 'NgNonBindable', name: 'NgNonBindable', path: 'ng_non_bindable', component: NgNonBindableExampleComponent},
]

// Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full'},
  { path: 'ng_for', component: NgForExampleComponent, pathMatch: 'full'},
  { path: 'ng_switch', component: NgStyleExampleComponent, pathMatch: 'full'},
  { path: 'ng_style', component: NgStyleExampleComponent, pathMatch: 'full'},
  { path: 'ng_class', component: NgClassExampleComponent, pathMatch: 'full'},
  { path: 'ng_non_bindable', component: NgNonBindableExampleComponent, pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    NgStyleExampleComponent,
    NgForExampleComponent,
    NgClassExampleComponent,
    NgSwitchExampleComponent,
    NgNonBindableExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

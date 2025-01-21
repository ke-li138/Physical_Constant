import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstantComponent } from './constant/constant.component';

import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ConstantDetailComponent } from './constant-detail/constant-detail.component';
import { FormsModule } from '@angular/forms';
import { NewConstantComponent } from './new-constant/new-constant.component';


const routes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'constant/:id', component: ConstantDetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ConstantComponent,
    GalleryComponent,
    ConstantDetailComponent,
    NewConstantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @NgModule({
//   declarations: [
//     AppComponent,
//     ConstantComponent,
//     GalleryComponent,
//     ConstantDetailComponent,
//     NewConstantComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     RouterModule.forRoot(routes),
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }

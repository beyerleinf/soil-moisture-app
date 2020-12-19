import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './shared-material.module';
import { AppComponent } from './shared/components';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

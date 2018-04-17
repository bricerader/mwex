import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CensorDocumentComponent } from './censor-document/censor-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    CensorDocumentComponent,
    ViewDocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

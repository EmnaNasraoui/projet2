import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { TestComponent } from './test/test.component';
import { EditComponent } from './edit/edit.component';
import { ToPDFComponent } from './to-pdf/to-pdf.component';
import { LogInComponent } from './log-in/log-in.component';
import { BookNowComponent } from './book-now/book-now.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    TestComponent,
    EditComponent,
    ToPDFComponent,
    LogInComponent,
    BookNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

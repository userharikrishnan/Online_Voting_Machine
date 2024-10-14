import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; 
import { AppComponent } from './app.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(), 
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }    

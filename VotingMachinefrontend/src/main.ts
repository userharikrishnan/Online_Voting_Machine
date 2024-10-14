import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule


enableProdMode();


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    FormsModule, 
    CommonModule, 
  ]
})
.catch(err => console.error(err));

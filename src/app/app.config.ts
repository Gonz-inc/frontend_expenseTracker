import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ActivatedRoute } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), provideAnimationsAsync(), 
  ]
};

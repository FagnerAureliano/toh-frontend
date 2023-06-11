import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';

const COMPONENTS = [
  LoadingComponent,
  ToolbarComponent,
  MessagesComponent,
  PageNotFoundComponent,
];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, FlexLayoutModule, MaterialModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Inport this module in the AppModule.'
      );
    }
  }
}

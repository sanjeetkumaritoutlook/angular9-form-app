import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AngularMaterialModule } from './feature-material/feature-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormSimpleExampleComponent } from './dynamic-form-simple-example/dynamic-form-simple-example.component';
import { FormGroupAsControlComponent } from './form-group-as-control/form-group-as-control.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SubscriberComponent } from './subscriber/subscriber.component';

import {MaterialModule} from './feature-material/feature-material.module';

import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavKeepContentModule} from './nav-keep-content/nav-keep-content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatautoComponent } from './matauto/matauto.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ParentFormOneComponent } from './parent-form-one/parent-form-one.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { RadioInputChildComponent } from './radio-input/radio-input-child/radio-input-child.component';
// import { FormioModule } from '@formio/angular';
// import { Formio, FormioModule, FormioAppConfig } from 'angular-formio';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormioGrid } from 'angular-formio/grid';
import { FormioModule } from 'angular-formio';
import { FormRedererComponent } from './form-rederer/form-rederer.component';
import { MatFormioModule } from '@formio/angular-material';
import { FormRendererTwoComponent } from './form-renderer-two/form-renderer-two.component';
import { FormMaterialComponent } from './form-material/form-material.component';




@NgModule({
  declarations: [
    AppComponent,
    DynamicFormSimpleExampleComponent, 
    FormGroupAsControlComponent, NameEditorComponent, ProfileEditorComponent, CascadingDropdownComponent, DynamicFormQuestionComponent, DynamicFormComponent, SubscriberComponent, LoginComponent, MatautoComponent, CustomInputComponent, ParentFormOneComponent, RadioInputComponent, RadioInputChildComponent, FormRedererComponent, FormRendererTwoComponent, FormMaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NavKeepContentModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatFormioModule,
    FormioModule,
    // FlexLayoutModule,
    // FormioGrid

  ],
  providers: [],
  entryComponents: [SubscriberComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
// export class AppModule { }
export class AppModule {
  constructor(injector: Injector) {
    const SubscriberElement = createCustomElement(SubscriberComponent, {     injector    });

    customElements.define('subscriber-element', SubscriberElement);
  }

  ngDoBootstrap() {}
}
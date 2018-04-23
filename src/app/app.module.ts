import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EqualValidator } from './ui/user/equal-validator.directive';
import { AppComponent } from './app.component';
import { CounterComponent } from './ui/counter/counter.component';
import { CounterWithServiceComponent } from './ui/counter-with-service/counter-with-service.component';
import { CounterService } from './services/counter/counter.service';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ChangePasswordComponent } from './ui/user/change-password/change-password.component';
import {LoginComponent} from './ui/user/login/login.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { SuccessfulResetComponent } from './ui/user/successful-reset/successful-reset.component';

import {HttpWrapperService} from "./services/http/httpService";
import {PubSubService} from "./services/pubsub/pubsub";
import { LocalStorageModule } from 'angular-2-local-storage';
import {HttpModule} from "@angular/http";
import { TextMaskModule } from 'angular2-text-mask';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import {SocketService} from "./services/socket/socketService";
import {UsersComponentComponent} from "./ui/user/users-component/users-component.component";
import {CreateUserComponent} from "./ui/user/create-user/create-user.component";
import {ValidationExampleComponent} from "./ui/user/validation-example/validation-example.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {FileComponentComponent} from "./ui/components/file-component/file-component.component";
import {MomentModule} from "angular2-moment";


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterWithServiceComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponentComponent,
    LoginComponent,
    ChangePasswordComponent,
    CreateUserComponent,
    CategoryItemComponent,
    SuccessfulResetComponent,
    ValidationExampleComponent,
    CategoryListComponent,
    FileComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    HttpModule,
    TextMaskModule,
    Angular2SocialLoginModule,
    MomentModule
  ],
  providers: [CounterService,HttpWrapperService,PubSubService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

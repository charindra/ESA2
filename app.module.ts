import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CognitoUtilService } from './services/cognito/cognito-util.service';
import { UserLoginService } from './services/cognito/user-login.service';

// Serverside API Services //
import { AnalysisService } from './services/api/analysis.service';
import { UserProfileService } from './services/api/user-profile.service';
import { TeamManagementService } from './services/api/team-management.service';
import { ModelManagementService } from './services/api/model-management.service';
import { CommunityManagementService } from './services/api/community-management.service';
import { UtilityService } from './services/api/utility.service';
import { NotificationService } from './services/api/notification.service';
import { TenantManagementService } from './services/api/tenant-management.service';
import { AzureSsoService } from './services/azure-sso.service';
import { GroupManagementService } from './services/api/group-management.service';
import { CompetencyManagementService } from './services/api/competency-management.service';
import { AuctionManagementService } from './services/api/auction-management.service';

/** 3rd party */
// modules
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { MqttMessage, MqttModule, MqttService, MqttServiceOptions } from 'ngx-mqtt';

/** main component */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './services/authentication.service';

/** Feature modules */
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';
import { ApiInterceptor } from './services/api/interceptors/api-interceptor';
import { AnalyticsService } from './services/api/analytics.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    ImageToDataUrlModule,
    AppRoutingModule,
    PublicModule,
    SecureModule,
    SharedModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    CognitoUtilService,
    UserLoginService,
    AuthenticationService,
    AnalyticsService,
    AnalysisService,
    UserProfileService,
    TeamManagementService,
    ModelManagementService,
    CommunityManagementService,
    UtilityService,
    NotificationService,
    TenantManagementService,
    AzureSsoService,
    GroupManagementService,
    CompetencyManagementService,
    AuctionManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
  connectOnCreate: false,
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

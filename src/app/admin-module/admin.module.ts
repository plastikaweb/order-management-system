import {NgModule} from '@angular/core';
import {adminRouting} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {AdminBoxComponent} from './boxes/admin-box/admin-box.component';
import {ServicesModule} from '../services/services.module';
import {AdminHomeComponent} from './admin-home.component';
import {AdminActiveAppComponent} from './boxes/active-app-box/admin-active-app.component';

@NgModule( {
    imports: [
        CommonModule,
        ServicesModule.forAdmin(),
        adminRouting
    ],
    declarations: [
        AdminHomeComponent,
        AdminActiveAppComponent,
        AdminBoxComponent
    ],
    providers: []
} )
export class AdminModule {
}

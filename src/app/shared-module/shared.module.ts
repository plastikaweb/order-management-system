import {NgModule} from '@angular/core';
import {TouchspinComponent} from './touchspin/touchspin.component';
import {ProductCountComponent} from './product-count/product-count.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectivesModule} from '../directives/directives.module';

@NgModule({
    declarations: [
        ProductCountComponent,
        TouchspinComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DirectivesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductCountComponent,
        TouchspinComponent
    ]
})
export class SharedModule {}
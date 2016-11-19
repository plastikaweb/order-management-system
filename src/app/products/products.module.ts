import {NgModule} from '@angular/core';

import {ProductsSelectionComponent} from './products-selection/products-selection.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductFilterPipe} from './filter-pipes/product-filter.pipe';
import {ProductCategoryFilterPipe} from './filter-pipes/product-category-filter.pipe';
import {ProductActiveFilterPipe} from './filter-pipes/product-active-filter.pipe';
import {ProductSelectedFilterPipe} from './filter-pipes/product-selected-filter.pipe';
import {ProductTagsComponent} from './product-tags/product-tags.component';
import {NameFilterInputComponent} from './name-filter-input/name-filter-input.component';
import {CategoryFilterMenuComponent} from './category-filter-menu/category-filter-menu.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductCountComponent} from './product-count/product-count.component';
import {TouchspinComponent} from '../directives/touchspin/touchspin.component';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CartComponent} from './cart/cart.component';
import {StyleActiveDirective} from '../directives/style-active.directive';

@NgModule( {
    declarations: [
        ProductsListComponent,
        ProductFilterPipe,
        ProductCategoryFilterPipe,
        ProductActiveFilterPipe,
        ProductSelectedFilterPipe,
        ProductTagsComponent,
        NameFilterInputComponent,
        CategoryFilterMenuComponent,
        ProductDetailComponent,
        ProductCountComponent,
        TouchspinComponent,
        ProductsSelectionComponent,
        CartComponent,
        StyleActiveDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: []
} )
export class ProductsModule {}
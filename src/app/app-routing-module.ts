import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';

import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './services/product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './services/product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent }from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEventDetail } from './ex13/service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './ex13/service-product-image-event/service-product-image-event';
import { CatalogProduct } from './ex14/catalog-product/catalog-product';
import { GroupCustomers } from './ex18/group-customers/group-customers';
const routes: Routes = [
  {path: 'binding-property', component: BindingPropertyComponent},
  {path: 'binding-class', component: BindingClassComponent},
  {path: 'binding-style', component: BindingStyleComponent},
  {path: 'binding-event', component: BindingEventComponent},
  {path: 'binding-two-way', component: BindingTwoWayComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-dropdown-list', component: ProductDropdownListComponent},
  {path: 'product-list-call-service', component: ProductListCallServiceComponent},
  {path: 'product-list-call-http-service', component: ProductListCallHttpServiceComponent},
  {path: 'product-http-handle-error-service', component: ProductHttpHandleErrorServiceComponent},
  {path: 'service-product-image-event',component: ServiceProductImageEvent},
  {path: 'service-product-image-event/:id',component: ServiceProductImageEventDetail},
  {path: 'catalog-product',component: CatalogProduct},
  {path: 'group-customers',component: GroupCustomers}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
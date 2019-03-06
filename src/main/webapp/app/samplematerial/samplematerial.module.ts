import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SAMPLEMATERIAL_ROUTE, SampleMaterialComponent } from './';
import { SampleApplicationSharedModule } from 'app/shared';

@NgModule({
    imports: [SampleApplicationSharedModule, RouterModule.forChild([SAMPLEMATERIAL_ROUTE])],
    declarations: [SampleMaterialComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleApplicationSampleMaterialModule {}
// JHipster Stripe Module will add new line here

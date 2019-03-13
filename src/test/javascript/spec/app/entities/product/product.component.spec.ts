/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SampleApplicationTestModule } from '../../../test.module';
import { ProductComponent } from 'app/entities/product/product.component';
import { ProductService } from 'app/entities/product/product.service';
import { Product } from 'app/shared/model/product.model';

describe('Component Tests', () => {
    describe('Product Management Component', () => {
        let comp: ProductComponent;
        let fixture: ComponentFixture<ProductComponent>;
        let service: ProductService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SampleApplicationTestModule],
                declarations: [ProductComponent],
                providers: []
            })
                .overrideTemplate(ProductComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProductComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Product(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.products[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});

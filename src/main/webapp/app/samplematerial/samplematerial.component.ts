import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as moment from 'moment';
import { LoginModalService, AccountService, Account } from 'app/core';
// NEW

import { FormControl } from '@angular/forms';

@Component({
    selector: 'jhi-samplematerial',
    templateUrl: './samplematerial.component.html',
    styleUrls: ['samplematerial.scss']
})
export class SampleMaterialComponent implements OnInit {
    hide = true;

    ngOnInit() {}
}

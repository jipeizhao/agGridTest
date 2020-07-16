import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService, HMCService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    user: User;
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private accountService: AccountService,
        private hmcService: HMCService,
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService){
        this.user = this.accountService.userValue;}

        colmnDefs=[
            {headername : "Market Code", field: "MarketCode", sortable : true, filter: true},
            {headername : "Country Code", field: "CountryCode", sortable : true, filter: true},
            {headername : "Currency Code", field: "CurrencyCode", sortable : true, filter: true},
            {headername : "clound Timestamp", field: "cloundTimestamp", sortable : true, filter: true},
            {headername : "Calendar TypeC ode", field: "CalendarTypeCode", sortable : true, filter: true},
            {headername : "Calendar Xref Code", field: "CalendarXrefCode", sortable : true, filter: true},
            {headername : "Calendar Xref Value", field: "CalendarXrefValue", sortable : true, filter: true},
            {headername : "Calendar Day Name", field: "CalendarDayName", sortable : true, filter: true},
            {headername : "Calendar Date", field: "CalendarDate", sortable : true, filter: true},
            {headername : "Feed Code", field: "FeedCode", sortable : true, filter: true},
            {headername : "Currency Numeric Code", field: "CurrencyNumericCode", sortable : true, filter: true},
            {headername : "Center Description", field: "CenterDescription", sortable : true, filter: true},
            {headername : "Center Long Description", field: "CenterLongDescription1", sortable : true, filter: true},
            {headername : "Holiday Code", field: "HolidayCode", sortable : true, filter: true},     
          ]
        
          rowData =[
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
            {MarketCode: 'XWAR', CountryCode: 'PL', CurrencyCode: "PLN", cloundTimestamp: "2020-06-27T08:20:34. 031+00:00", CalendarTypeCode: "SE-SET-HOL", CalendarXrefCode: "SWCC", CalendarXrefValue: "SWCC", CalendarDayName: "New Year's Day", CalendarDate: "2007-01-06T00:00:00. 000+00:00",CurrencyNumericCode: "985", CenterDescription: "WARSAW", CenterLongDescription1: "Settelement cannot take palce in respect of a domestic common stock trade", HolidayCode: "94"},
          ]
        
          rowDatas: any;

        ngOnInit() {
            this.form = this.formBuilder.group({
                CalendarXrefValue: ['', Validators.required],
                CalendarTypeCode: ['', Validators.required],
                CalendarDayName: ['', Validators.required],
                CalendarDate: ['', Validators.required],
                HolidayCode: ['', Validators.required],
                CountryCode: ['', Validators.required],
                MarketCode: ['', Validators.required],
                CurrencyCode: ['', Validators.required],
            });
        }

         // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        this.loading = true;
        this.hmcService.getAll("")
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([""]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
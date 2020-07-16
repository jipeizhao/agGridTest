import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { hmcFilter } from '@app/_models';
import { hmcData } from '@app/_models';


@Injectable({ providedIn: 'root' })
export class HMCService {
    user: User;
    private hmcSubject: BehaviorSubject<hmcData>;
    public hmc: Observable<hmcData>;

    constructor(
        private router: Router,
        private http: HttpClient,
        private accountService: AccountService
    ) {
        this.user = this.accountService.userValue;
    }

    getAll(filter: string) {
        return this.http.get<hmcData[]>(`${environment.hmcUrl}/users${filter}`);
    }
}
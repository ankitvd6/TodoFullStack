import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'td-dash',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    searchInput='';
    sortParameter='';
    sortOrder='';

    constructor() { }

    ngOnInit() { }

    onArchive() {
        this.sortParameter = 'status';
        this.sortOrder = 'completed';
    }
}
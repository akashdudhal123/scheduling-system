import { Component, OnInit } from "@angular/core";
import { APIService } from "../services/api.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private ApiService: APIService) {

    }
    ngOnInit(): void {
        this.getCalendarData();
    }

    getCalendarData() {
        this.ApiService.getCalenderData().subscribe((response: any) => {
            console.log("Calendar Data", response);
        })
    }
    // getCalendarData() {
    //     this.ApiService.getCalenderDataAPI().subscribe((response: any) => {
    //         console.log("Calendar Data", response);
    //     })
    // }
}
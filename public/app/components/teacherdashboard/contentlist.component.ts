import {Component}            from '@angular/core';
import {Routes, RouterLink}   from '@angular/router';
import {TeacherDashService}   from './teacherdashboard.services';


@Component({
selector: 'contentlist',
templateUrl: './contentlist.component.html',
providers: [TeacherDashService],
})


export class ContentListComponent {}

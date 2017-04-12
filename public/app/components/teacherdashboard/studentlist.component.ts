import {Component}            from '@angular/core';
import {Routes, RouterLink}   from '@angular/router';
import {TeacherDashService}   from './teacherdashboard.services';


@Component({
selector: 'studentlist',
templateUrl: './studentlist.component.html',
providers: [TeacherDashService],
})


export class StudentListComponent {}

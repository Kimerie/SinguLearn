import {Component}            from '@angular/core';
import {Routes, RouterLink}   from '@angular/router';
import {TeacherService}       from './services/teacher.services';


@Component({
selector: 'contentlist',
templateUrl: './contentlist.component.html',
providers: [TeacherService],
})


export class ContentListComponent {}

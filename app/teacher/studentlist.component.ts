import {Component}            from '@angular/core';
import {Routes, RouterLink}   from '@angular/router';
import {TeacherService}       from './services/teacher.services';


@Component({
selector: 'studentlist',
templateUrl: `<header><h1>Your Students</h1></header>
          <section>
            <div class="students">
              <p><div><li class="studentname"
              ng-repeat="student in studentInfo">
              {{student.firstName}} {{student.lastName}} {{student.performance}}
              </li></div></p>
            </div>
          </section>`,
providers: [TeacherService],
})


export class StudentListComponent {}

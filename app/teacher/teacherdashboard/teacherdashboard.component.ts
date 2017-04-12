import {Component, OnInit}        from '@angular/core';
import {Router, Route}            from '@angular/router';
import {TeacherService}           from '../services/teacher.services';
import {StudentListComponent}     from '../studentlist.component';
import {ContentListComponent}     from '../contentlist.component';
import 'rxjs/add/operator/catch';

@Component({
selector: 'teacherDashboard',
templateUrl: './teacherDashView.html',
providers: [TeacherService]
})

export class TeacherDashboardComponent implements OnInit {
  students = [];
  lessons = [
    {lessonType:"Analogies", lessonName: "Analogies: Life is a game. Play wisely.", id: 1},
    {lessonType:"Auxiliary Verbs",lessonName: "Auxiliary Verbs: Should've, Would've, Could've.", id: 2},
    {lessonType:"Superlatives",lessonName: "Superlatives: This or That (These or Those)? ", id: 3},
    {lessonType:"Onomatopoeias",lessonName: "Onomatopoeias: Beep, beep. Who's got the keys to the jeep? Vroom! ", id: 4},
  ];
  constructor (private teacherService : TeacherService) {};

  //Retrieves Student Info
  getStudentInfo() {
    this.teacherService.getStudentInfo()
    .subscribe(
      data => this.students.push(data),
      error =>  console.error(error));
  };

  updateContentListlist(selectedLessons) {
    if (!selectedLessons) {
      return;
    }
    this.teacherService.updateContentList(selectedLessons)
    .subscribe(
      lesson  => console.log(lesson),
      error =>  console.error(error));
  }
  //get initial state of component
  ngOnInit() {
    this.getStudentInfo();
  }

};

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

export class TeacherWorkspaceComponent implements OnInit {
  students = [];
  names = [];
  item = null;
  selected = null;
  model = null;
  label = null;
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

  onSelect (selected, item, model, label) {
   this.item     = item;
   this.model    = model;
   this.label    = label;
   this.selected = selected;
 };

  changePlaylist (selected, name) {
     this.selected = selected;
     console.log(this.lessons)
     console.log(this.selected)

   };
   //
  //  $scope.handleDragStart = function (e) {
  //    this.style.opacity = '0.4';
  //    e.dataTransfer.setData('text/plain', this.innerHTML);
  //  };
   //
  //  $scope.handleDragEnd = function (e) {
  //    this.style.opacity = '1.0';
  //  };
   //
  //  $scope.handleDrop = function (e) {
  //    e.preventDefault();
  //    e.stopPropagation();
  //    const dataText = e.dataTransfer.getData('text/plain');
  //    $scope.$apply(function() {
  //      if($scope.lessonNames.indexOf(dataText) === -1) {
  //        $scope.lessonNames.push(dataText);
  //      }
  //    });
  //    console.log($scope.lessonNames);
  //  };
   //
  //  $scope.handleDragOver = function (e) {
  //    e.preventDefault();
  //    e.dataTransfer.dropEffect = 'move';
  //    return false;
  //  };
   //
  //  $scope.handleDelete = function (item) {
  //    $scope.lessonNames.splice($scope.lessonNames.indexOf(item), 1);
  //    console.log($scope.lessonNames);
   //
  //  }

  //get initial state of component
  ngOnInit() {
    this.getStudentInfo();
  }

};

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  newLesson = {};
  lessons: any = [];
  showVar = false;
  text = 'Add new lesson';

  constructor() {
  }

  showModal() {
    this.showVar = !this.showVar;
  }

  ngOnInit() {
  }

}

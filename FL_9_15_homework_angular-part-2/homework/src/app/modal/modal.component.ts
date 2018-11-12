import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() {
  }

  @Input() showMePartially: boolean;
  @Input() newLesson: any = {};
  @Input() lessons: any = [];

  ngOnInit() {
  }

  showModal() {
    this.showMePartially = !this.showMePartially;
  }

  addLesson() {
    if (this.newLesson != null) {
      this.lessons.push(this.newLesson);
      this.newLesson = {};
    }
  }
}

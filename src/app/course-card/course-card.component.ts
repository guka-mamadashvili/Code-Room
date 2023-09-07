import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() public courseName: string = '';
  @Input() public info: string = '';
  @Input() public courseImg: string = '';
  
}

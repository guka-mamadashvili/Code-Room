import { Component } from '@angular/core';
import { Courses } from 'src/Courses/courses';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent {

  public courses: any = Courses

  public htmlCourse: any = Courses[0];
  public cssCourse: any = Courses[1];
  public jsCourse: any = Courses[2];
  public pythonCourse: any = Courses[3];
  public cppCourse: any = Courses[4];
  public bashCourse: any = Courses[5];
  public ubuntuCourse: any = Courses[6];
  public angularCourse: any = Courses[7];
  public javaCourse: any = Courses[8];
  public sassCourse: any = Courses[9];
  public kotlinCourse: any = Courses[10];
  public swiftCourse: any = Courses[11];
  public nodeCourse: any = Courses[12];
  public linuxCourse: any = Courses[13];
  public flutterCourse: any = Courses[14];
  public phpCourse: any = Courses[15];
}

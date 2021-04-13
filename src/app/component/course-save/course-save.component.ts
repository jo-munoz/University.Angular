import { CourseService } from './../../service/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-save',
  templateUrl: './course-save.component.html',
  styleUrls: ['./course-save.component.css'],
})
export class CourseSaveComponent implements OnInit {
  public course!: Course;
  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.course = new Course(0, '', 0);
  }

  public save(): void {
    this.courseService.save(this.course).subscribe(
      (data) => {
        this.router.navigate(['/course-list']);
      },
      (error) => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      }
    );
  }
}

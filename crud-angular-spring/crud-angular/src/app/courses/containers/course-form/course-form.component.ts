import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  // form: FormGroup;
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    // this.form = this.formBuilder.group({
    //   name: [null],
    //   category: [null]
    // })
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course']
    // console.log(course)
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    })
    // this.form.patchValue({
    //   name: course.name,
    //   category: course.category
    // })
  }

  onSubmit() {
    // console.log('onSubmit')
    // console.log(this.form.value)
    this.service.save(this.form.value as Course)
      .subscribe(result => this.onSuccess(), error => this.onError())
  }

  onCancel() {
    this.location.back()
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso.', '', { duration: 4000 })
    this.onCancel()
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 4000 })
  }
}

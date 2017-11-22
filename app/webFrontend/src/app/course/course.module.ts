import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseRoutingModule} from './course-routing.module';
import {CourseComponent} from './course.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CourseNewComponent} from './course-new/course-new.component';
import {LectureModule} from '../lecture/lecture.module';
import {TeacherReportComponent} from './teacher-report/teacher-report.component';
import {SharedModule} from '../shared/shared.module';
import {CourseContainerComponent} from './course-container/course-container.component';
import {UserModule} from '../user/user.module';
import {UnitSelectorComponent} from './course-detail/unit-selector/unit-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    LectureModule,
    SharedModule,
    UserModule
  ],
  declarations: [
    CourseComponent,
    CourseDetailComponent,
    CourseNewComponent,
    TeacherReportComponent,
    CourseContainerComponent,
    UnitSelectorComponent,
  ],
  providers: [],
  entryComponents: [
    UnitSelectorComponent
  ],
  exports: [
    CourseComponent,
    CourseContainerComponent,
    UnitSelectorComponent
  ]
})
export class CourseModule {
}

import { TestBed } from '@angular/core/testing';

import { StudentsAffairDepartmentService } from './students-affair-department.service';

describe('StudentsAffairDepartmentService', () => {
  let service: StudentsAffairDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsAffairDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

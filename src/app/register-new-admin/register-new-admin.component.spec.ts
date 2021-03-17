import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewAdminComponent } from './register-new-admin.component';

describe('RegisterNewAdminComponent', () => {
  let component: RegisterNewAdminComponent;
  let fixture: ComponentFixture<RegisterNewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Homeworkcomponent } from './homeworkcomponent';

describe('Homeworkcomponent', () => {
  let component: Homeworkcomponent;
  let fixture: ComponentFixture<Homeworkcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Homeworkcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Homeworkcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

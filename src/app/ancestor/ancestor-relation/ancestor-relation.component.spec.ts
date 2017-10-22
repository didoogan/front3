import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRelationComponent } from './tree-relation.component';

describe('TreeRelationComponent', () => {
  let component: TreeRelationComponent;
  let fixture: ComponentFixture<TreeRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

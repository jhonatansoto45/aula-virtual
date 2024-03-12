import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SectionHomeE } from 'src/app/interfaces/aula-virtual.interfaces';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get enum SectionHomeE, get sections()', () => {
    const sections = spyOnProperty(component, 'sections', 'get');
    component.sections
    expect(sections).toHaveBeenCalled();
  });

  it('should route login, login():void', () => {
    const router = TestBed.inject(Router);
    const spyRouter = spyOn(router, 'navigate');
    component.login();
    expect(spyRouter).toHaveBeenCalledWith(['/login']);
  });

  it('should open menu in mode movil, openMenu(active: boolean): void', () => {
    component.openMenu(true);
    expect(component.activeMenu).toBeFalsy();
    component.openMenu(false);
    expect(component.activeMenu).toBeTruthy();
  });

  it('should move the scroll in the section selected, scrollToContain(section: SectionHomeE): void', () => {
    const section: SectionHomeE = SectionHomeE.acerca;
    component.activeMenu = true;
    component.scrollToContain(section);
    expect(document.getElementById(section)).toBeTruthy();
  });
});

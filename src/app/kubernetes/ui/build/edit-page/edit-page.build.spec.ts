/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {BuildEditPage} from "./edit-page.build";
import {BuildEditWrapperComponent} from "../edit-wrapper/edit-wrapper.build";
import {BuildEditToolbarComponent} from "../edit-toolbar/edit-toolbar.build";
import {BuildEditComponent} from "../edit/edit.build";
import {KubernetesStoreModule} from "../../../kubernetes.store.module";
import {FormsModule} from "@angular/forms";


describe('BuildEditPage', () => {
  let build: BuildEditPage;
  let fixture: ComponentFixture<BuildEditPage>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          FormsModule,
          KubernetesStoreModule,
        ],
        declarations: [
          BuildEditPage,
          BuildEditWrapperComponent,
          BuildEditToolbarComponent,
          BuildEditComponent,
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions],
          },
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildEditPage);
    build = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(build).toBeTruthy(); });
});

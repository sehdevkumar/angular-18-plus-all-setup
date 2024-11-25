import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";



@Component({
    selector: 'loadme',
    template: `
    <h1>Loadme</h1>
    `,
    standalone:true
})
export class LoadmeComponent {}


@Component({
  selector: 'dynamic-component',
  template: `
    <div
      class="w-full h-full grid p-10 bg-green-200 justify-center items-center"
    >
      <ng-template #injectComponentRef></ng-template>
      <ng-template #templateRef>We are ready to fight</ng-template>
             
    </div>
  `,
  standalone: true,
})
export class DynamicComponent implements AfterViewInit {
  @ViewChild('injectComponentRef', { read: ViewContainerRef })
  injectComponentRef!: ViewContainerRef;

  @ViewChild('templateRef') templateRef!: TemplateRef<any>;

  constructor() {}
  ngAfterViewInit(): void {
    this.injectComponentRef.createEmbeddedView(this.templateRef);
  }

  ngAfterContentChecked(): void {}
}
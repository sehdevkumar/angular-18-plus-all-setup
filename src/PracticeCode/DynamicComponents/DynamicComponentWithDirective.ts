import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'loadme',
  template: ` You have loaded me, thank you! `,
  standalone: true,
})
export class LoadmeComponent {}

@Component({
  selector: 'dynamic-component-directive',
  template: `
    <div
      class="w-full h-full grid p-10 bg-green-200 justify-center items-center"
    >
      <ng-template #loadme>
        <loadme></loadme>
      </ng-template>

      <ng-container [ngTemplateOutlet]="loadme"></ng-container>
    </div>
  `,
  standalone: true,
  imports: [NgTemplateOutlet, LoadmeComponent],
})
export class DynamicComponentDirective {
  @ViewChild('loadme', { static: true }) loadme!: TemplateRef<any>;
}

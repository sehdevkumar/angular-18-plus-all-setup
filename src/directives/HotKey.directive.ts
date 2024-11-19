import {
  Component,
  Directive,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHotKey]',
  standalone: true,
  inputs: ['hotKeyType']
})
export class HotKeyDirective {
  rr = inject(Renderer2);
  hotKeyType: string = '';

  constructor(private element: ElementRef) {
    this.rr.listen(
      this.element.nativeElement,
      'keydown',
      this.handleKeyDown.bind(this)
    );
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if(event.key !== this.hotKeyType) {
        alert("Wrong key");        
    }else {
        alert("Right key");
    }
  }
}

@Component({
  selector: 'app-hot-key',
  standalone: true,
  template: `
    <div
      class="w-full h-full grid justify-center items-center bg-slate-600"
      appHotKey
      hotKeyType="Enter"
      tabindex="0"
    >
      Hotkey works!
    </div>
  `,
  imports: [HotKeyDirective],
})
export class HotKeyComponent {}

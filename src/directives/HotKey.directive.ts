import { Directive, ElementRef, inject, Renderer2 } from "@angular/core";

/**
 * An Angular directive that listens for keydown events on an element and logs the pressed key and a predefined hotkey type to the console.
 *
 * @selector [appHotKey]
 * @standalone true
 * @inputs ['hotKeyType']
 */
@Directive({
  selector: '[appHotKey]',
  standalone: true,
  inputs: ['hotKeyType'],
})
export class HotKeyDirective {
  /**
   * The Renderer2 service used to listen for keydown events.
   */
  rr = inject(Renderer2);

  /**
   * The predefined hotkey type.
   */
  hotKeyType: string = '';

  /**
   * Initializes the directive by injecting the Renderer2 and ElementRef services, and sets up a keydown event listener on the element.
   *
   * @param {ElementRef} element - The element to listen for keydown events on.
   */
  constructor(private element: ElementRef) {
    this.rr.listen(
      this.element.nativeElement,
      'keydown',
      this.handleKeyDown.bind(this)
    );
  }

  /**
   * Logs the pressed key and the predefined hotkey type to the console when a keydown event occurs.
   *
   * @param {KeyboardEvent} event - The keydown event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    console.log(`Key pressed: ${event.key}`, this.hotKeyType);
  }
}

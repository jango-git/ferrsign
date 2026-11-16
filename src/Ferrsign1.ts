import { FerrsignBase } from "./FerrsignBase.js";

export class Ferrsign1<A> extends FerrsignBase<[A]> {
  public emit(a: A): void {
    this.currentEmitDepth++;

    try {
      this.callback0?.(a);
      this.callback1?.(a);
      this.callback2?.(a);
      this.callback3?.(a);
      this.callback4?.(a);
      this.callback5?.(a);
      this.callback6?.(a);
      this.callback7?.(a);
      this.callback8?.(a);
      this.callback9?.(a);

      if (this.restCallbacks !== undefined) {
        for (let index = 0; index < this.restCallbacks.length; index++) {
          this.restCallbacks[index]?.(a);
        }
      }
    } finally {
      this.currentEmitDepth--;
      if (this.currentEmitDepth === 0) {
        this.postEmit();
      }
    }
  }
}

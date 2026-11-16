import { FerrsignBase } from "./FerrsignBase.js";

export class Ferrsign2<A, B> extends FerrsignBase<[A, B]> {
  public emit(a: A, b: B): void {
    this.currentEmitDepth++;

    try {
      this.callback0?.(a, b);
      this.callback1?.(a, b);
      this.callback2?.(a, b);
      this.callback3?.(a, b);
      this.callback4?.(a, b);
      this.callback5?.(a, b);
      this.callback6?.(a, b);
      this.callback7?.(a, b);
      this.callback8?.(a, b);
      this.callback9?.(a, b);

      if (this.restCallbacks !== undefined) {
        for (let index = 0; index < this.restCallbacks.length; index++) {
          const callback = this.restCallbacks[index];
          callback?.(a, b);
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

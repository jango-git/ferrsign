import { FerrsignBase } from "./FerrsignBase.js";

export class Ferrsign3<A, B, C> extends FerrsignBase<[A, B, C]> {
  public emit(a: A, b: B, c: C): void {
    this.currentEmitDepth++;

    try {
      this.callback0?.(a, b, c);
      this.callback1?.(a, b, c);
      this.callback2?.(a, b, c);
      this.callback3?.(a, b, c);
      this.callback4?.(a, b, c);
      this.callback5?.(a, b, c);
      this.callback6?.(a, b, c);
      this.callback7?.(a, b, c);
      this.callback8?.(a, b, c);
      this.callback9?.(a, b, c);

      if (this.restCallbacks !== undefined) {
        for (let index = 0; index < this.restCallbacks.length; index++) {
          const callback = this.restCallbacks[index];
          callback?.(a, b, c);
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

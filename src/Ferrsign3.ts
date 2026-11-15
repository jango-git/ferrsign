import { FerrsignBase } from "./FerrsignBase";

export class Ferrsign3<A, B, C> extends FerrsignBase<[A, B, C]> {
  public emit(a: A, b: B, c: C): void {
    this._currentEmitDepth++;

    try {
      this._callback0?.(a, b, c);
      this._callback1?.(a, b, c);
      this._callback2?.(a, b, c);
      this._callback3?.(a, b, c);
      this._callback4?.(a, b, c);
      this._callback5?.(a, b, c);
      this._callback6?.(a, b, c);
      this._callback7?.(a, b, c);
      this._callback8?.(a, b, c);
      this._callback9?.(a, b, c);

      if (this._restCallbacks !== undefined) {
        for (let index = 0; index < this._restCallbacks.length; index++) {
          const callback = this._restCallbacks[index];
          callback?.(a, b, c);
        }
      }
    } finally {
      this._currentEmitDepth--;
      if (this._currentEmitDepth === 0) {
        this._postEmit();
      }
    }
  }
}

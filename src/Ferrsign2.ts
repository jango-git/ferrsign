import { FerrsignBase } from "./FerrsignBase";

export class Ferrsign2<A, B> extends FerrsignBase<[A, B]> {
  public emit(a: A, b: B): void {
    this._currentEmitDepth++;

    this._callback0?.(a, b);
    this._callback1?.(a, b);
    this._callback2?.(a, b);
    this._callback3?.(a, b);
    this._callback4?.(a, b);
    this._callback5?.(a, b);
    this._callback6?.(a, b);
    this._callback7?.(a, b);
    this._callback8?.(a, b);
    this._callback9?.(a, b);

    if (this._restCallbacks !== undefined) {
      for (let index = 0; index < this._restCallbacks.length; index++) {
        const callback = this._restCallbacks[index];
        callback?.(a, b);
      }
    }

    this._currentEmitDepth--;
    if (this._currentEmitDepth === 0) {
      this._postEmit();
    }
  }
}

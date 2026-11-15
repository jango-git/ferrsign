import { FerrsignBase } from "./FerrsignBase";

export class Ferrsign1<A> extends FerrsignBase<[A]> {
  public emit(a: A): void {
    this._currentEmitDepth++;

    try {
      this._callback0?.(a);
      this._callback1?.(a);
      this._callback2?.(a);
      this._callback3?.(a);
      this._callback4?.(a);
      this._callback5?.(a);
      this._callback6?.(a);
      this._callback7?.(a);
      this._callback8?.(a);
      this._callback9?.(a);

      if (this._restCallbacks !== undefined) {
        for (let index = 0; index < this._restCallbacks.length; index++) {
          this._restCallbacks[index]?.(a);
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

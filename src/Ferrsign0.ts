import { FerrsignBase } from "./FerrsignBase";

export class Ferrsign0 extends FerrsignBase<[]> {
  public emit(): void {
    this._currentEmitDepth++;

    try {
      this._callback0?.();
      this._callback1?.();
      this._callback2?.();
      this._callback3?.();
      this._callback4?.();
      this._callback5?.();
      this._callback6?.();
      this._callback7?.();
      this._callback8?.();
      this._callback9?.();

      if (this._restCallbacks !== undefined) {
        for (let index = 0; index < this._restCallbacks.length; index++) {
          this._restCallbacks[index]?.();
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

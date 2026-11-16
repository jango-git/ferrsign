import { FerrsignBase } from "./FerrsignBase.js";

export class Ferrsign0 extends FerrsignBase<[]> {
  public emit(): void {
    this.currentEmitDepth++;

    try {
      this.callback0?.();
      this.callback1?.();
      this.callback2?.();
      this.callback3?.();
      this.callback4?.();
      this.callback5?.();
      this.callback6?.();
      this.callback7?.();
      this.callback8?.();
      this.callback9?.();

      if (this.restCallbacks !== undefined) {
        for (let index = 0; index < this.restCallbacks.length; index++) {
          this.restCallbacks[index]?.();
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

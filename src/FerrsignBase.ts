import type { Callback } from "./Callback";
import type { FerrsignView } from "./FerrsignView";
import type { Unsubscribe } from "./Unsubscribe";

export abstract class FerrsignBase<T extends unknown[]> implements FerrsignView<T> {
  protected _callback0?: Callback<T>;
  protected _callback1?: Callback<T>;
  protected _callback2?: Callback<T>;
  protected _callback3?: Callback<T>;
  protected _callback4?: Callback<T>;
  protected _callback5?: Callback<T>;
  protected _callback6?: Callback<T>;
  protected _callback7?: Callback<T>;
  protected _callback8?: Callback<T>;
  protected _callback9?: Callback<T>;

  protected _restCallbacks?: (Callback<T> | undefined)[];
  protected _onceCallbacks?: Set<Callback<T>>;

  protected _pendingCallbacks?: Callback<T>[];
  protected _pendingOnceCallbacks?: Set<Callback<T>>;

  protected _currentEmitDepth = 0;
  protected _isCleanupRequired = false;

  public on(callback: Callback<T>): Unsubscribe {
    if (process.env.NODE_ENV !== "production") {
      this.assertNotRegistered(callback);
    }

    if (this._currentEmitDepth > 0) {
      (this._pendingCallbacks ??= []).push(callback);
    } else {
      this.addImmediate(callback);
    }

    return this.unsubscriber(callback);
  }

  public once(callback: Callback<T>): Unsubscribe {
    if (process.env.NODE_ENV !== "production") {
      this.assertNotRegistered(callback);
    }

    if (this._currentEmitDepth > 0) {
      (this._pendingCallbacks ??= []).push(callback);
      (this._pendingOnceCallbacks ??= new Set()).add(callback);
    } else {
      (this._onceCallbacks ??= new Set()).add(callback);
      this.addImmediate(callback);
    }

    return this.unsubscriber(callback);
  }

  public off(callback: Callback<T>): void {
    if (process.env.NODE_ENV !== "production") {
      if (this._pendingCallbacks?.includes(callback) !== true) {
        this.assertRegistered(callback);
      }
    }

    this.detach(callback);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention -- underscore prefix needed for minification, protected methods are not auto-minified
  protected _postEmit(): void {
    if (this._onceCallbacks !== undefined && this._onceCallbacks.size > 0) {
      this._onceCallbacks.forEach((callback) => {
        this.markForRemoval(callback);
      });
      this._onceCallbacks = undefined;
    }

    if (this._isCleanupRequired) {
      this._isCleanupRequired = false;
      this.cleanupSlots();
    }

    if (this._pendingCallbacks !== undefined && this._pendingCallbacks.length > 0) {
      for (let index = 0; index < this._pendingCallbacks.length; index++) {
        const callback = this._pendingCallbacks[index];
        if (this._pendingOnceCallbacks?.has(callback) === true) {
          (this._onceCallbacks ??= new Set()).add(callback);
        }
        this.addImmediate(callback);
      }
      this._pendingCallbacks = undefined;
      this._pendingOnceCallbacks = undefined;
    }
  }

  // Called a second time, it does nothing, so it cannot remove a later subscription of the same
  // callback.
  private unsubscriber(callback: Callback<T>): Unsubscribe {
    let isSubscribed = true;
    return (): void => {
      if (isSubscribed) {
        isSubscribed = false;
        this.detach(callback);
      }
    };
  }

  // Removes `callback` wherever it is registered, and does nothing if it is not: an unsubscribe
  // may run after a once callback has already been removed by its emit.
  private detach(callback: Callback<T>): void {
    if (this._pendingCallbacks !== undefined) {
      const pendingCallbackIndex = this._pendingCallbacks.indexOf(callback);
      if (pendingCallbackIndex !== -1) {
        this._pendingCallbacks.splice(pendingCallbackIndex, 1);
        this._pendingOnceCallbacks?.delete(callback);
        return;
      }
    }

    this._onceCallbacks?.delete(callback);

    if (this._currentEmitDepth > 0) {
      this.markForRemoval(callback);
      return;
    }

    this.removeImmediate(callback);
  }

  private addImmediate(callback: Callback<T>): void {
    if (this._callback0 === undefined) {
      this._callback0 = callback;
      return;
    }
    if (this._callback1 === undefined) {
      this._callback1 = callback;
      return;
    }
    if (this._callback2 === undefined) {
      this._callback2 = callback;
      return;
    }
    if (this._callback3 === undefined) {
      this._callback3 = callback;
      return;
    }
    if (this._callback4 === undefined) {
      this._callback4 = callback;
      return;
    }
    if (this._callback5 === undefined) {
      this._callback5 = callback;
      return;
    }
    if (this._callback6 === undefined) {
      this._callback6 = callback;
      return;
    }
    if (this._callback7 === undefined) {
      this._callback7 = callback;
      return;
    }
    if (this._callback8 === undefined) {
      this._callback8 = callback;
      return;
    }
    if (this._callback9 === undefined) {
      this._callback9 = callback;
      return;
    }
    (this._restCallbacks ??= []).push(callback);
  }

  private markForRemoval(callback: Callback<T>): void {
    this._isCleanupRequired = true;

    if (this._callback0 === callback) {
      this._callback0 = undefined;
      return;
    }
    if (this._callback1 === callback) {
      this._callback1 = undefined;
      return;
    }
    if (this._callback2 === callback) {
      this._callback2 = undefined;
      return;
    }
    if (this._callback3 === callback) {
      this._callback3 = undefined;
      return;
    }
    if (this._callback4 === callback) {
      this._callback4 = undefined;
      return;
    }
    if (this._callback5 === callback) {
      this._callback5 = undefined;
      return;
    }
    if (this._callback6 === callback) {
      this._callback6 = undefined;
      return;
    }
    if (this._callback7 === callback) {
      this._callback7 = undefined;
      return;
    }
    if (this._callback8 === callback) {
      this._callback8 = undefined;
      return;
    }
    if (this._callback9 === callback) {
      this._callback9 = undefined;
      return;
    }

    if (this._restCallbacks !== undefined) {
      const index = this._restCallbacks.indexOf(callback);
      if (index !== -1) {
        this._restCallbacks[index] = undefined;
      }
    }
  }

  private removeImmediate(callback: Callback<T>): void {
    if (this._callback0 === callback) {
      this._callback0 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback1 === callback) {
      this._callback1 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback2 === callback) {
      this._callback2 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback3 === callback) {
      this._callback3 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback4 === callback) {
      this._callback4 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback5 === callback) {
      this._callback5 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback6 === callback) {
      this._callback6 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback7 === callback) {
      this._callback7 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback8 === callback) {
      this._callback8 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this._callback9 === callback) {
      this._callback9 = undefined;
      this.cleanupSlots();
      return;
    }

    if (this._restCallbacks !== undefined) {
      const index = this._restCallbacks.indexOf(callback);
      if (index !== -1) {
        this._restCallbacks.splice(index, 1);
        if (this._restCallbacks.length === 0) {
          this._restCallbacks = undefined;
        }
      }
    }
  }

  private cleanupSlots(): void {
    const valid: Callback<T>[] = [];

    if (this._callback0 !== undefined) {
      valid.push(this._callback0);
    }
    if (this._callback1 !== undefined) {
      valid.push(this._callback1);
    }
    if (this._callback2 !== undefined) {
      valid.push(this._callback2);
    }
    if (this._callback3 !== undefined) {
      valid.push(this._callback3);
    }
    if (this._callback4 !== undefined) {
      valid.push(this._callback4);
    }
    if (this._callback5 !== undefined) {
      valid.push(this._callback5);
    }
    if (this._callback6 !== undefined) {
      valid.push(this._callback6);
    }
    if (this._callback7 !== undefined) {
      valid.push(this._callback7);
    }
    if (this._callback8 !== undefined) {
      valid.push(this._callback8);
    }
    if (this._callback9 !== undefined) {
      valid.push(this._callback9);
    }

    if (this._restCallbacks !== undefined) {
      for (let index = 0; index < this._restCallbacks.length; index++) {
        const callback = this._restCallbacks[index];
        if (callback !== undefined) {
          valid.push(callback);
        }
      }
      this._restCallbacks = undefined;
    }

    const count = valid.length;

    this._callback0 = count > 0 ? valid[0] : undefined;
    this._callback1 = count > 1 ? valid[1] : undefined;
    this._callback2 = count > 2 ? valid[2] : undefined;
    this._callback3 = count > 3 ? valid[3] : undefined;
    this._callback4 = count > 4 ? valid[4] : undefined;
    this._callback5 = count > 5 ? valid[5] : undefined;
    this._callback6 = count > 6 ? valid[6] : undefined;
    this._callback7 = count > 7 ? valid[7] : undefined;
    this._callback8 = count > 8 ? valid[8] : undefined;
    this._callback9 = count > 9 ? valid[9] : undefined;

    if (count > 10) {
      this._restCallbacks = valid.slice(10);
    }
  }

  private isInSlots(callback: Callback<T>): boolean {
    if (this._callback0 === callback) {
      return true;
    }
    if (this._callback1 === callback) {
      return true;
    }
    if (this._callback2 === callback) {
      return true;
    }
    if (this._callback3 === callback) {
      return true;
    }
    if (this._callback4 === callback) {
      return true;
    }
    if (this._callback5 === callback) {
      return true;
    }
    if (this._callback6 === callback) {
      return true;
    }
    if (this._callback7 === callback) {
      return true;
    }
    if (this._callback8 === callback) {
      return true;
    }
    if (this._callback9 === callback) {
      return true;
    }
    return false;
  }

  private hasCallback(callback: Callback<T>): boolean {
    if (this.isInSlots(callback)) {
      return true;
    }
    if (this._restCallbacks?.includes(callback) === true) {
      return true;
    }
    if (this._pendingCallbacks?.includes(callback) === true) {
      return true;
    }
    return false;
  }

  private assertNotRegistered(callback: Callback<T>): void {
    if (process.env.NODE_ENV !== "production") {
      if (this.hasCallback(callback)) {
        throw new Error("Ferrsign.on: callback already registered");
      }
    }
  }

  private assertRegistered(callback: Callback<T>): void {
    if (process.env.NODE_ENV !== "production") {
      if (!this.isInSlots(callback) && this._restCallbacks?.includes(callback) !== true) {
        throw new Error("Ferrsign.off: callback not registered");
      }
    }
  }
}

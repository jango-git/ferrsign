import type { Callback } from "./Callback.js";
import type { FerrsignView } from "./FerrsignView.js";
import type { Unsubscribe } from "./Unsubscribe.js";

export abstract class FerrsignBase<T extends unknown[]> implements FerrsignView<T> {
  protected callback0?: Callback<T>;
  protected callback1?: Callback<T>;
  protected callback2?: Callback<T>;
  protected callback3?: Callback<T>;
  protected callback4?: Callback<T>;
  protected callback5?: Callback<T>;
  protected callback6?: Callback<T>;
  protected callback7?: Callback<T>;
  protected callback8?: Callback<T>;
  protected callback9?: Callback<T>;

  protected restCallbacks?: (Callback<T> | undefined)[];
  protected onceCallbacks?: Set<Callback<T>>;

  protected pendingCallbacks?: Callback<T>[];
  protected pendingOnceCallbacks?: Set<Callback<T>>;

  protected currentEmitDepth = 0;
  protected isCleanupRequired = false;

  public on(callback: Callback<T>): Unsubscribe {
    if (process.env.NODE_ENV !== "production") {
      this.assertNotRegistered(callback);
    }

    if (this.currentEmitDepth > 0) {
      (this.pendingCallbacks ??= []).push(callback);
    } else {
      this.addImmediate(callback);
    }

    return this.unsubscriber(callback);
  }

  public once(callback: Callback<T>): Unsubscribe {
    if (process.env.NODE_ENV !== "production") {
      this.assertNotRegistered(callback);
    }

    if (this.currentEmitDepth > 0) {
      (this.pendingCallbacks ??= []).push(callback);
      (this.pendingOnceCallbacks ??= new Set()).add(callback);
    } else {
      (this.onceCallbacks ??= new Set()).add(callback);
      this.addImmediate(callback);
    }

    return this.unsubscriber(callback);
  }

  public off(callback: Callback<T>): void {
    if (process.env.NODE_ENV !== "production") {
      if (this.pendingCallbacks?.includes(callback) !== true) {
        this.assertRegistered(callback);
      }
    }

    this.detach(callback);
  }

  protected postEmit(): void {
    if (this.onceCallbacks !== undefined && this.onceCallbacks.size > 0) {
      this.onceCallbacks.forEach((callback) => {
        this.markForRemoval(callback);
      });
      this.onceCallbacks = undefined;
    }

    if (this.isCleanupRequired) {
      this.isCleanupRequired = false;
      this.cleanupSlots();
    }

    if (this.pendingCallbacks !== undefined && this.pendingCallbacks.length > 0) {
      for (let index = 0; index < this.pendingCallbacks.length; index++) {
        const callback = this.pendingCallbacks[index];
        if (this.pendingOnceCallbacks?.has(callback) === true) {
          (this.onceCallbacks ??= new Set()).add(callback);
        }
        this.addImmediate(callback);
      }
      this.pendingCallbacks = undefined;
      this.pendingOnceCallbacks = undefined;
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
    if (this.pendingCallbacks !== undefined) {
      const pendingCallbackIndex = this.pendingCallbacks.indexOf(callback);
      if (pendingCallbackIndex !== -1) {
        this.pendingCallbacks.splice(pendingCallbackIndex, 1);
        this.pendingOnceCallbacks?.delete(callback);
        return;
      }
    }

    this.onceCallbacks?.delete(callback);

    if (this.currentEmitDepth > 0) {
      this.markForRemoval(callback);
      return;
    }

    this.removeImmediate(callback);
  }

  private addImmediate(callback: Callback<T>): void {
    if (this.callback0 === undefined) {
      this.callback0 = callback;
      return;
    }
    if (this.callback1 === undefined) {
      this.callback1 = callback;
      return;
    }
    if (this.callback2 === undefined) {
      this.callback2 = callback;
      return;
    }
    if (this.callback3 === undefined) {
      this.callback3 = callback;
      return;
    }
    if (this.callback4 === undefined) {
      this.callback4 = callback;
      return;
    }
    if (this.callback5 === undefined) {
      this.callback5 = callback;
      return;
    }
    if (this.callback6 === undefined) {
      this.callback6 = callback;
      return;
    }
    if (this.callback7 === undefined) {
      this.callback7 = callback;
      return;
    }
    if (this.callback8 === undefined) {
      this.callback8 = callback;
      return;
    }
    if (this.callback9 === undefined) {
      this.callback9 = callback;
      return;
    }
    (this.restCallbacks ??= []).push(callback);
  }

  private markForRemoval(callback: Callback<T>): void {
    this.isCleanupRequired = true;

    if (this.callback0 === callback) {
      this.callback0 = undefined;
      return;
    }
    if (this.callback1 === callback) {
      this.callback1 = undefined;
      return;
    }
    if (this.callback2 === callback) {
      this.callback2 = undefined;
      return;
    }
    if (this.callback3 === callback) {
      this.callback3 = undefined;
      return;
    }
    if (this.callback4 === callback) {
      this.callback4 = undefined;
      return;
    }
    if (this.callback5 === callback) {
      this.callback5 = undefined;
      return;
    }
    if (this.callback6 === callback) {
      this.callback6 = undefined;
      return;
    }
    if (this.callback7 === callback) {
      this.callback7 = undefined;
      return;
    }
    if (this.callback8 === callback) {
      this.callback8 = undefined;
      return;
    }
    if (this.callback9 === callback) {
      this.callback9 = undefined;
      return;
    }

    if (this.restCallbacks !== undefined) {
      const index = this.restCallbacks.indexOf(callback);
      if (index !== -1) {
        this.restCallbacks[index] = undefined;
      }
    }
  }

  private removeImmediate(callback: Callback<T>): void {
    if (this.callback0 === callback) {
      this.callback0 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback1 === callback) {
      this.callback1 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback2 === callback) {
      this.callback2 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback3 === callback) {
      this.callback3 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback4 === callback) {
      this.callback4 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback5 === callback) {
      this.callback5 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback6 === callback) {
      this.callback6 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback7 === callback) {
      this.callback7 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback8 === callback) {
      this.callback8 = undefined;
      this.cleanupSlots();
      return;
    }
    if (this.callback9 === callback) {
      this.callback9 = undefined;
      this.cleanupSlots();
      return;
    }

    if (this.restCallbacks !== undefined) {
      const index = this.restCallbacks.indexOf(callback);
      if (index !== -1) {
        this.restCallbacks.splice(index, 1);
        if (this.restCallbacks.length === 0) {
          this.restCallbacks = undefined;
        }
      }
    }
  }

  private cleanupSlots(): void {
    const valid: Callback<T>[] = [];

    if (this.callback0 !== undefined) {
      valid.push(this.callback0);
    }
    if (this.callback1 !== undefined) {
      valid.push(this.callback1);
    }
    if (this.callback2 !== undefined) {
      valid.push(this.callback2);
    }
    if (this.callback3 !== undefined) {
      valid.push(this.callback3);
    }
    if (this.callback4 !== undefined) {
      valid.push(this.callback4);
    }
    if (this.callback5 !== undefined) {
      valid.push(this.callback5);
    }
    if (this.callback6 !== undefined) {
      valid.push(this.callback6);
    }
    if (this.callback7 !== undefined) {
      valid.push(this.callback7);
    }
    if (this.callback8 !== undefined) {
      valid.push(this.callback8);
    }
    if (this.callback9 !== undefined) {
      valid.push(this.callback9);
    }

    if (this.restCallbacks !== undefined) {
      for (let index = 0; index < this.restCallbacks.length; index++) {
        const callback = this.restCallbacks[index];
        if (callback !== undefined) {
          valid.push(callback);
        }
      }
      this.restCallbacks = undefined;
    }

    const count = valid.length;

    this.callback0 = count > 0 ? valid[0] : undefined;
    this.callback1 = count > 1 ? valid[1] : undefined;
    this.callback2 = count > 2 ? valid[2] : undefined;
    this.callback3 = count > 3 ? valid[3] : undefined;
    this.callback4 = count > 4 ? valid[4] : undefined;
    this.callback5 = count > 5 ? valid[5] : undefined;
    this.callback6 = count > 6 ? valid[6] : undefined;
    this.callback7 = count > 7 ? valid[7] : undefined;
    this.callback8 = count > 8 ? valid[8] : undefined;
    this.callback9 = count > 9 ? valid[9] : undefined;

    if (count > 10) {
      this.restCallbacks = valid.slice(10);
    }
  }

  private isInSlots(callback: Callback<T>): boolean {
    if (this.callback0 === callback) {
      return true;
    }
    if (this.callback1 === callback) {
      return true;
    }
    if (this.callback2 === callback) {
      return true;
    }
    if (this.callback3 === callback) {
      return true;
    }
    if (this.callback4 === callback) {
      return true;
    }
    if (this.callback5 === callback) {
      return true;
    }
    if (this.callback6 === callback) {
      return true;
    }
    if (this.callback7 === callback) {
      return true;
    }
    if (this.callback8 === callback) {
      return true;
    }
    if (this.callback9 === callback) {
      return true;
    }
    return false;
  }

  private hasCallback(callback: Callback<T>): boolean {
    if (this.isInSlots(callback)) {
      return true;
    }
    if (this.restCallbacks?.includes(callback) === true) {
      return true;
    }
    if (this.pendingCallbacks?.includes(callback) === true) {
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
      if (!this.isInSlots(callback) && this.restCallbacks?.includes(callback) !== true) {
        throw new Error("Ferrsign.off: callback not registered");
      }
    }
  }
}

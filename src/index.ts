export type Callback<T extends unknown[] = []> = (...args: T) => void;

export interface FerrsignView<T extends unknown[] = []> {
  on(callback: Callback<T>): void;
  once(callback: Callback<T>): void;
  off(callback: Callback<T>): void;
}

export class Ferrsign<T extends unknown[] = []> implements FerrsignView<T> {
  private slot0Internal: Callback<T> | undefined = undefined;
  private slot1Internal: Callback<T> | undefined = undefined;
  private slot2Internal: Callback<T> | undefined = undefined;
  private slot3Internal: Callback<T> | undefined = undefined;
  private slot4Internal: Callback<T> | undefined = undefined;
  private slot5Internal: Callback<T> | undefined = undefined;
  private slot6Internal: Callback<T> | undefined = undefined;
  private slot7Internal: Callback<T> | undefined = undefined;
  private slot8Internal: Callback<T> | undefined = undefined;
  private slot9Internal: Callback<T> | undefined = undefined;
  private restInternal: Callback<T>[] | undefined = undefined;

  private onceSetInternal: Set<Callback<T>> | undefined = undefined;

  private pendingAddInternal: Callback<T>[] | undefined = undefined;
  private pendingOnceInternal: Set<Callback<T>> | undefined = undefined;

  private emitDepthInternal = 0;
  private dirtyInternal = false;

  public get hasListeners(): boolean {
    return this.slot0Internal !== undefined;
  }

  public on(callback: Callback<T>): void {
    if (process.env.NODE_ENV !== "production") {
      this.assertNotRegisteredInternal(callback);
    }

    if (this.emitDepthInternal > 0) {
      (this.pendingAddInternal ??= []).push(callback);
      return;
    }

    this.addImmediateInternal(callback);
  }

  public once(callback: Callback<T>): void {
    if (process.env.NODE_ENV !== "production") {
      this.assertNotRegisteredInternal(callback);
    }

    if (this.emitDepthInternal > 0) {
      (this.pendingAddInternal ??= []).push(callback);
      (this.pendingOnceInternal ??= new Set()).add(callback);
      return;
    }

    (this.onceSetInternal ??= new Set()).add(callback);
    this.addImmediateInternal(callback);
  }

  public off(callback: Callback<T>): void {
    if (this.pendingAddInternal !== undefined) {
      const pendingIndex = this.pendingAddInternal.indexOf(callback);
      if (pendingIndex !== -1) {
        this.pendingAddInternal.splice(pendingIndex, 1);
        this.pendingOnceInternal?.delete(callback);
        return;
      }
    }

    if (process.env.NODE_ENV !== "production") {
      this.assertRegisteredInternal(callback);
    }

    this.onceSetInternal?.delete(callback);

    if (this.emitDepthInternal > 0) {
      this.markForRemovalInternal(callback);
      return;
    }

    this.removeImmediateInternal(callback);
  }

  public emit0(): void {
    this.emitDepthInternal++;

    if (this.slot0Internal !== undefined) {
      (this.slot0Internal as () => void)();
    }
    if (this.slot1Internal !== undefined) {
      (this.slot1Internal as () => void)();
    }
    if (this.slot2Internal !== undefined) {
      (this.slot2Internal as () => void)();
    }
    if (this.slot3Internal !== undefined) {
      (this.slot3Internal as () => void)();
    }
    if (this.slot4Internal !== undefined) {
      (this.slot4Internal as () => void)();
    }
    if (this.slot5Internal !== undefined) {
      (this.slot5Internal as () => void)();
    }
    if (this.slot6Internal !== undefined) {
      (this.slot6Internal as () => void)();
    }
    if (this.slot7Internal !== undefined) {
      (this.slot7Internal as () => void)();
    }
    if (this.slot8Internal !== undefined) {
      (this.slot8Internal as () => void)();
    }
    if (this.slot9Internal !== undefined) {
      (this.slot9Internal as () => void)();
    }
    this.emitRestInternal0();

    this.emitDepthInternal--;
    if (this.emitDepthInternal === 0) {
      this.postEmitInternal();
    }
  }

  public emit1(a0: T[0]): void {
    this.emitDepthInternal++;

    if (this.slot0Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot0Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot1Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot1Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot2Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot2Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot3Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot3Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot4Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot4Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot5Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot5Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot6Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot6Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot7Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot7Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot8Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot8Internal as (a0: T[0]) => void)(a0);
    }
    if (this.slot9Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot9Internal as (a0: T[0]) => void)(a0);
    }
    this.emitRestInternal1(a0);

    this.emitDepthInternal--;
    if (this.emitDepthInternal === 0) {
      this.postEmitInternal();
    }
  }

  public emit2(a0: T[0], a1: T[1]): void {
    this.emitDepthInternal++;

    if (this.slot0Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot0Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot1Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot1Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot2Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot2Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot3Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot3Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot4Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot4Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot5Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot5Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot6Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot6Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot7Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot7Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot8Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot8Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    if (this.slot9Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot9Internal as (a0: T[0], a1: T[1]) => void)(a0, a1);
    }
    this.emitRestInternal2(a0, a1);

    this.emitDepthInternal--;
    if (this.emitDepthInternal === 0) {
      this.postEmitInternal();
    }
  }

  public emit3(a0: T[0], a1: T[1], a2: T[2]): void {
    this.emitDepthInternal++;

    if (this.slot0Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot0Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot1Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot1Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot2Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot2Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot3Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot3Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot4Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot4Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot5Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot5Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot6Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot6Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot7Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot7Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot8Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot8Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    if (this.slot9Internal !== undefined) {
      // @ts-expect-error - T extends unknown[], calling with T[0] is safe
      (this.slot9Internal as (a0: T[0], a1: T[1], a2: T[2]) => void)(
        a0,
        a1,
        a2,
      );
    }
    this.emitRestInternal3(a0, a1, a2);

    this.emitDepthInternal--;
    if (this.emitDepthInternal === 0) {
      this.postEmitInternal();
    }
  }

  private emitRestInternal0(): void {
    if (this.restInternal === undefined) {
      return;
    }
    for (let index = 0; index < this.restInternal.length; index++) {
      const callback = this.restInternal[index];
      if (callback !== undefined) {
        (callback as () => void)();
      }
    }
  }

  private emitRestInternal1(a0: T[0]): void {
    if (this.restInternal === undefined) {
      return;
    }
    for (let index = 0; index < this.restInternal.length; index++) {
      const callback = this.restInternal[index];
      if (callback !== undefined) {
        // @ts-expect-error - T extends unknown[], calling with T[0] is safe
        (callback as (a0: T[0]) => void)(a0);
      }
    }
  }

  private emitRestInternal2(a0: T[0], a1: T[1]): void {
    if (this.restInternal === undefined) {
      return;
    }
    for (let index = 0; index < this.restInternal.length; index++) {
      const callback = this.restInternal[index];
      if (callback !== undefined) {
        // @ts-expect-error - T extends unknown[], calling with T[0] is safe
        (callback as (a0: T[0], a1: T[1]) => void)(a0, a1);
      }
    }
  }

  private emitRestInternal3(a0: T[0], a1: T[1], a2: T[2]): void {
    if (this.restInternal === undefined) {
      return;
    }
    for (let index = 0; index < this.restInternal.length; index++) {
      const callback = this.restInternal[index];
      if (callback !== undefined) {
        // @ts-expect-error - T extends unknown[], calling with T[0] is safe
        (callback as (a0: T[0], a1: T[1], a2: T[2]) => void)(a0, a1, a2);
      }
    }
  }

  private addImmediateInternal(callback: Callback<T>): void {
    if (this.slot0Internal === undefined) {
      this.slot0Internal = callback;
      return;
    }
    if (this.slot1Internal === undefined) {
      this.slot1Internal = callback;
      return;
    }
    if (this.slot2Internal === undefined) {
      this.slot2Internal = callback;
      return;
    }
    if (this.slot3Internal === undefined) {
      this.slot3Internal = callback;
      return;
    }
    if (this.slot4Internal === undefined) {
      this.slot4Internal = callback;
      return;
    }
    if (this.slot5Internal === undefined) {
      this.slot5Internal = callback;
      return;
    }
    if (this.slot6Internal === undefined) {
      this.slot6Internal = callback;
      return;
    }
    if (this.slot7Internal === undefined) {
      this.slot7Internal = callback;
      return;
    }
    if (this.slot8Internal === undefined) {
      this.slot8Internal = callback;
      return;
    }
    if (this.slot9Internal === undefined) {
      this.slot9Internal = callback;
      return;
    }
    (this.restInternal ??= []).push(callback);
  }

  private markForRemovalInternal(callback: Callback<T>): void {
    this.dirtyInternal = true;

    if (this.slot0Internal === callback) {
      this.slot0Internal = undefined;
      return;
    }
    if (this.slot1Internal === callback) {
      this.slot1Internal = undefined;
      return;
    }
    if (this.slot2Internal === callback) {
      this.slot2Internal = undefined;
      return;
    }
    if (this.slot3Internal === callback) {
      this.slot3Internal = undefined;
      return;
    }
    if (this.slot4Internal === callback) {
      this.slot4Internal = undefined;
      return;
    }
    if (this.slot5Internal === callback) {
      this.slot5Internal = undefined;
      return;
    }
    if (this.slot6Internal === callback) {
      this.slot6Internal = undefined;
      return;
    }
    if (this.slot7Internal === callback) {
      this.slot7Internal = undefined;
      return;
    }
    if (this.slot8Internal === callback) {
      this.slot8Internal = undefined;
      return;
    }
    if (this.slot9Internal === callback) {
      this.slot9Internal = undefined;
      return;
    }

    if (this.restInternal !== undefined) {
      const index = this.restInternal.indexOf(callback);
      if (index !== -1) {
        // @ts-expect-error - temporary undefined until cleanup
        this.restInternal[index] = undefined;
      }
    }
  }

  private removeImmediateInternal(callback: Callback<T>): void {
    if (this.slot0Internal === callback) {
      this.slot0Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot1Internal === callback) {
      this.slot1Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot2Internal === callback) {
      this.slot2Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot3Internal === callback) {
      this.slot3Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot4Internal === callback) {
      this.slot4Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot5Internal === callback) {
      this.slot5Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot6Internal === callback) {
      this.slot6Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot7Internal === callback) {
      this.slot7Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot8Internal === callback) {
      this.slot8Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }
    if (this.slot9Internal === callback) {
      this.slot9Internal = undefined;
      this.cleanupSlotsInternal();
      return;
    }

    if (this.restInternal !== undefined) {
      const index = this.restInternal.indexOf(callback);
      if (index !== -1) {
        this.restInternal.splice(index, 1);
        if (this.restInternal.length === 0) {
          this.restInternal = undefined;
        }
      }
    }
  }

  private postEmitInternal(): void {
    if (this.onceSetInternal !== undefined && this.onceSetInternal.size > 0) {
      this.onceSetInternal.forEach((callback) => {
        this.markForRemovalInternal(callback);
      });
      this.onceSetInternal = undefined;
    }

    if (this.dirtyInternal) {
      this.dirtyInternal = false;
      this.cleanupSlotsInternal();
    }

    if (
      this.pendingAddInternal !== undefined &&
      this.pendingAddInternal.length > 0
    ) {
      for (let index = 0; index < this.pendingAddInternal.length; index++) {
        const callback = this.pendingAddInternal[index];
        if (this.pendingOnceInternal?.has(callback) === true) {
          (this.onceSetInternal ??= new Set()).add(callback);
        }
        this.addImmediateInternal(callback);
      }
      this.pendingAddInternal = undefined;
      this.pendingOnceInternal = undefined;
    }
  }

  private cleanupSlotsInternal(): void {
    const valid: Callback<T>[] = [];

    if (this.slot0Internal !== undefined) {
      valid.push(this.slot0Internal);
    }
    if (this.slot1Internal !== undefined) {
      valid.push(this.slot1Internal);
    }
    if (this.slot2Internal !== undefined) {
      valid.push(this.slot2Internal);
    }
    if (this.slot3Internal !== undefined) {
      valid.push(this.slot3Internal);
    }
    if (this.slot4Internal !== undefined) {
      valid.push(this.slot4Internal);
    }
    if (this.slot5Internal !== undefined) {
      valid.push(this.slot5Internal);
    }
    if (this.slot6Internal !== undefined) {
      valid.push(this.slot6Internal);
    }
    if (this.slot7Internal !== undefined) {
      valid.push(this.slot7Internal);
    }
    if (this.slot8Internal !== undefined) {
      valid.push(this.slot8Internal);
    }
    if (this.slot9Internal !== undefined) {
      valid.push(this.slot9Internal);
    }

    if (this.restInternal !== undefined) {
      for (let index = 0; index < this.restInternal.length; index++) {
        const callback = this.restInternal[index];
        if (callback !== undefined) {
          valid.push(callback);
        }
      }
      this.restInternal = undefined;
    }

    const count = valid.length;

    this.slot0Internal = count > 0 ? valid[0] : undefined;
    this.slot1Internal = count > 1 ? valid[1] : undefined;
    this.slot2Internal = count > 2 ? valid[2] : undefined;
    this.slot3Internal = count > 3 ? valid[3] : undefined;
    this.slot4Internal = count > 4 ? valid[4] : undefined;
    this.slot5Internal = count > 5 ? valid[5] : undefined;
    this.slot6Internal = count > 6 ? valid[6] : undefined;
    this.slot7Internal = count > 7 ? valid[7] : undefined;
    this.slot8Internal = count > 8 ? valid[8] : undefined;
    this.slot9Internal = count > 9 ? valid[9] : undefined;

    if (count > 10) {
      this.restInternal = valid.slice(10);
    }
  }

  private isInSlotsInternal(callback: Callback<T>): boolean {
    if (this.slot0Internal === callback) {
      return true;
    }
    if (this.slot1Internal === callback) {
      return true;
    }
    if (this.slot2Internal === callback) {
      return true;
    }
    if (this.slot3Internal === callback) {
      return true;
    }
    if (this.slot4Internal === callback) {
      return true;
    }
    if (this.slot5Internal === callback) {
      return true;
    }
    if (this.slot6Internal === callback) {
      return true;
    }
    if (this.slot7Internal === callback) {
      return true;
    }
    if (this.slot8Internal === callback) {
      return true;
    }
    if (this.slot9Internal === callback) {
      return true;
    }
    return false;
  }

  private hasCallbackInternal(callback: Callback<T>): boolean {
    if (this.isInSlotsInternal(callback)) {
      return true;
    }
    if (this.restInternal?.includes(callback) === true) {
      return true;
    }
    if (this.pendingAddInternal?.includes(callback) === true) {
      return true;
    }
    return false;
  }

  private assertNotRegisteredInternal(callback: Callback<T>): void {
    if (this.hasCallbackInternal(callback)) {
      throw new Error("Ferrsign.on: callback already registered");
    }
  }

  private assertRegisteredInternal(callback: Callback<T>): void {
    if (
      !this.isInSlotsInternal(callback) &&
      this.restInternal?.includes(callback) !== true
    ) {
      throw new Error("Ferrsign.off: callback not registered");
    }
  }
}

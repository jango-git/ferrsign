import type { Callback } from "./Callback";
import type { Unsubscribe } from "./Unsubscribe";

export interface FerrsignView<T extends unknown[] = []> {
  on(callback: Callback<T>): Unsubscribe;
  once(callback: Callback<T>): Unsubscribe;
  off(callback: Callback<T>): void;
}

export type FerrsignView0 = FerrsignView<[]>;
export type FerrsignView1<A> = FerrsignView<[A]>;
export type FerrsignView2<A, B> = FerrsignView<[A, B]>;
export type FerrsignView3<A, B, C> = FerrsignView<[A, B, C]>;

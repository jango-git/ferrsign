import type { Callback } from "./Callback";

export interface FerrsignView<T extends unknown[] = []> {
  on(callback: Callback<T>): void;
  once(callback: Callback<T>): void;
  off(callback: Callback<T>): void;
}

# Ferrsign

Typed event emitter optimized for hot paths.

## What

Signal/event library with separate classes for 0-3 arguments: `Ferrsign0`, `Ferrsign1<A>`, `Ferrsign2<A, B>`, `Ferrsign3<A, B, C>`.

## Why separate classes

Performance on old devices (iPad Pro 1st gen, iOS 13, etc.) in frame loops.

A unified `emit(...args)` API would require:

- Array allocation on every call
- Spread operator when invoking callbacks

At 60fps with multiple signals per frame, this creates GC pressure and microstutters. Separate classes with explicit `emit(a, b)` calls avoid both.

## Usage

```typescript
import { Ferrsign0, Ferrsign1, Ferrsign2 } from "ferrsign";

const onTick = new Ferrsign1<number>();
const onClick = new Ferrsign2<number, number>();
const onComplete = new Ferrsign0();

onTick.on((dt) => {
  /* dt: number */
});
onClick.on((x, y) => {
  /* x: number, y: number */
});
onComplete.once(() => {
  /* ... */
});

// In loop
onTick.emit(deltaTime);
onClick.emit(pointerX, pointerY);
onComplete.emit();
```

## API

All classes share the same interface:

- `on(callback)` - subscribe; returns an unsubscribe function
- `once(callback)` - subscribe, auto-unsubscribe after first emit; returns an unsubscribe function
- `off(callback)` - unsubscribe
- `emit(...)` - notify subscribers (argument count matches class)

The returned function removes the callback, so an inline arrow function can be unsubscribed
without keeping a reference to it. Calling it after the callback is gone (a `once` callback that
already fired, or a second call) does nothing.

```typescript
const unsubscribe = onTick.on((dt) => {
  /* ... */
});
unsubscribe();
```

## Read-only views

For exposing signals without emit access:

```typescript
import { Ferrsign1, type FerrsignView1 } from "ferrsign";

class Player {
  private readonly _onDamage = new Ferrsign1<number>();

  get onDamage(): FerrsignView1<number> {
    return this._onDamage;
  }
}

const player = new Player();
player.onDamage.on((amount) => {
  /* ... */
}); // OK
player.onDamage.emit(10); // Type error: a view has no emit
```

Available views: `FerrsignView0`, `FerrsignView1<A>`, `FerrsignView2<A, B>`, `FerrsignView3<A, B, C>`.

## Limitations

- Max 3 arguments. If you need more, use an object:

```typescript
const onResize = new Ferrsign1<{ width: number; height: number }>();
```

- First 10 subscribers stored in direct slots, rest in array. Optimized for typical case of 1-5 listeners per signal.
- Dev-mode checks (duplicate subscription, unsubscribing non-existent callback) run unless
  `process.env.NODE_ENV` is `"production"`. The package ships plain ES2020 modules, so the bundler
  of the app has to define `process.env.NODE_ENV`, as Vite and webpack do.

## Throwing callbacks

A callback that throws stops the current `emit`: the callbacks after it are not called for that
emit, and the error reaches the caller of `emit`. The signal stays usable, and subscriptions and
removals made during that emit are applied.

## Safe during emit

Subscribing/unsubscribing during emit is handled correctly:

- New subscriptions are deferred until emit completes
- Removals mark slots for cleanup, no skipped/double calls

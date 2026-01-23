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
const onTick = new Ferrsign1<number>();
const onClick = new Ferrsign2<number, number>();
const onComplete = new Ferrsign0();

onTick.on((deltaTime) => { /* deltaTime: number */ });
onClick.on((x, y) => { /* x: number, y: number */ });
onComplete.once(() => { /* ... */ });

// In loop
onTick.emit(deltaTime);
onClick.emit(pointerX, pointerY);
onComplete.emit();
```

## API

All classes share the same interface:

- `on(callback)` — subscribe
- `once(callback)` — subscribe, auto-unsubscribe after first emit
- `off(callback)` — unsubscribe
- `emit(...)` — notify subscribers (argument count matches class)

Read-only view (for exposing signals without emit access):
```typescript
interface FerrsignView<T extends unknown[]> {
  on(callback: Callback<T>): void;
  once(callback: Callback<T>): void;
  off(callback: Callback<T>): void;
}
```

## Limitations

- Max 3 arguments. If you need more, use an object:
```typescript
  const onResize = new Ferrsign1<{ width: number; height: number }>();
```
- First 10 subscribers stored in direct slots, rest in array. Optimized for typical case of 1-5 listeners per signal.
- Dev-mode checks (duplicate subscription, unsubscribing non-existent callback) stripped in production build.

## Safe during emit

Subscribing/unsubscribing during emit is handled correctly:
- New subscriptions are deferred until emit completes
- Removals mark slots for cleanup, no skipped/double calls

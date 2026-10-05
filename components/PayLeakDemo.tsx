"use client";

import { useId, useState } from "react";

const euro = (cents: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(cents / 100);

/** Same rule Tally uses: round each shift to the cent, half up. */
const shiftCents = (rateCents: number, minutes: number) => Math.floor((rateCents * minutes + 30) / 60);

const START = 17 * 60; // 17:00
const END = 23 * 60 + 30; // 23:30 rostered close
const BREAK = 30;

export default function PayLeakDemo() {
  const id = useId();
  const [rate, setRate] = useState(1400);
  const [late, setLate] = useState(20);
  const [breakTaken, setBreakTaken] = useState(true);
  const [shifts, setShifts] = useState(3);

  const unpaid = late + (breakTaken ? 0 : BREAK);
  const perShift = shiftCents(rate, unpaid);
  const perWeek = perShift * shifts;
  const perTerm = perWeek * 12;

  const span = END + 60 - START;
  const pct = (m: number) => `${((m - START) / span) * 100}%`;
  const fmt = (m: number) => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

  return (
    <div className="rounded-2xl border border-rule bg-paper p-5 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-semibold tracking-tight">Try the idea: what payroll assumes vs what happened</h4>
        <p className="label">Illustrative numbers, not my pay</p>
      </div>

      {/* Timeline of one shift */}
      <div className="mt-6" aria-hidden="true">
        <div className="relative h-10 rounded-md bg-paper">
          <div className="absolute inset-y-0 rounded-l-md bg-ink-3/45" style={{ left: 0, width: pct(END) }} />
          <div
            className={`absolute inset-y-0 transition-all duration-300 ${
              breakTaken ? "bg-paper" : "bg-[repeating-linear-gradient(135deg,var(--accent)_0_4px,transparent_4px_8px)]"
            }`}
            style={{ left: pct(20 * 60), width: `${(BREAK / span) * 100}%` }}
          />
          <div
            className="absolute inset-y-0 bg-[repeating-linear-gradient(135deg,var(--accent)_0_4px,transparent_4px_8px)] transition-all duration-300"
            style={{ left: pct(END), width: `${(late / span) * 100}%` }}
          />
          <div className="absolute -bottom-px top-0 w-px bg-accent" style={{ left: pct(END) }} />
        </div>
        <div className="mt-2 flex justify-between gap-4 text-xs text-ink-3 tnum">
          <span>
            {fmt(START)} · break {fmt(20 * 60)}
          </span>
          <span>
            rostered {fmt(END)}
            {late > 0 ? <span className="text-accent"> · actual {fmt(END + late)}</span> : null}
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label htmlFor={`${id}-late`} className="flex justify-between text-sm">
              <span>Worked past rostered finish</span>
              <span className="tnum font-medium">{late} min</span>
            </label>
            <input
              id={`${id}-late`}
              type="range"
              min={0}
              max={60}
              step={5}
              value={late}
              onChange={(e) => setLate(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--accent)]"
            />
          </div>

          <fieldset>
            <legend className="text-sm">Unpaid 30-minute break actually taken?</legend>
            <div className="mt-2 inline-flex rounded-full border border-rule p-1">
              {[
                { v: true, l: "Yes" },
                { v: false, l: "No, too busy" },
              ].map((o) => (
                <button
                  key={o.l}
                  type="button"
                  aria-pressed={breakTaken === o.v}
                  onClick={() => setBreakTaken(o.v)}
                  className={`min-h-10 rounded-full px-4 text-sm transition-colors ${
                    breakTaken === o.v ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-2 gap-4">
            <Stepper
              label="Example rate"
              value={euro(rate)}
              onDec={() => setRate((r) => Math.max(1000, r - 50))}
              onInc={() => setRate((r) => Math.min(3000, r + 50))}
            />
            <Stepper
              label="Shifts a week"
              value={String(shifts)}
              onDec={() => setShifts((s) => Math.max(1, s - 1))}
              onInc={() => setShifts((s) => Math.min(6, s + 1))}
            />
          </div>
        </div>

        <dl
          className="grid content-start self-start gap-px overflow-hidden rounded-xl border border-rule bg-rule"
          aria-live="polite"
        >
          <Row k="Unrecorded time per shift" v={`${unpaid} min`} />
          <Row k="Per shift" v={euro(perShift)} />
          <Row k="Per week" v={euro(perWeek)} />
          <Row k="Over a 12-week term" v={euro(perTerm)} strong />
        </dl>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-2">
        Small per shift, real over a term. Tally isn&apos;t there to accuse anyone. It stores planned and actual for
        every shift, so the difference is written down. Each shift is rounded to the cent, half up, and totals are the
        sum of those rounded rows, so they always reconcile.
      </p>
    </div>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 bg-paper-2 px-4 py-3">
      <dt className="text-sm text-ink-2">{k}</dt>
      <dd className={`tnum ${strong ? "text-2xl font-medium" : "font-medium"}`}>{v}</dd>
    </div>
  );
}

function Stepper({
  label,
  value,
  onDec,
  onInc,
}: {
  label: string;
  value: string;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div>
      <p className="text-sm">{label}</p>
      <div className="mt-2 flex items-center rounded-full border border-rule">
        <button
          type="button"
          onClick={onDec}
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="size-10 rounded-full text-lg hover:bg-paper"
        >
          −
        </button>
        <span className="flex-1 text-center text-sm font-medium tnum" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={onInc}
          aria-label={`Increase ${label.toLowerCase()}`}
          className="size-10 rounded-full text-lg hover:bg-paper"
        >
          +
        </button>
      </div>
    </div>
  );
}

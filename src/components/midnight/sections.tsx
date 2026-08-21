import { useState } from "react";
import lilyImg from "@/assets/note-lily.webp";
import lilyImgSm from "@/assets/note-lily-600.webp";
import irisImg from "@/assets/note-iris.webp";
import irisImgSm from "@/assets/note-iris-600.webp";
import oudImg from "@/assets/note-oud.webp";
import oudImgSm from "@/assets/note-oud-600.webp";

export function Notes() {
  const notes = [
    {
      img: lilyImg,
      imgSm: lilyImgSm,
      label: "TOP NOTES",
      body: "Black Lily, Bergamot Zest, Cold Pear",
    },
    {
      img: irisImg,
      imgSm: irisImgSm,
      label: "HEART NOTES",
      body: "Iris Root, Violet Leaf, Black Pepper",
    },
    {
      img: oudImg,
      imgSm: oudImgSm,
      label: "BASE NOTES",
      body: "Oud, Vanilla Absolute, Dark Musk",
    },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
      <h2 className="font-display text-2xl tracking-[0.1em] md:text-4xl">
        PRODUCT DESCRIPTION
      </h2>
      <div className="mt-4 h-px w-full bg-border" />
      <p className="mt-8 max-w-4xl text-base leading-relaxed text-foreground md:text-lg">
        A nocturnal lily, opened after dark. Cold pear and bergamot break first,
        then black lily and iris bloom deep and powdery, before oud and vanilla
        absolute settle in for the rest of the night.
      </p>
      <p className="mt-2 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Midnight by Sarkar is for the ones who arrive when the room has already
        gone quiet.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {notes.map((n) => (
          <div key={n.label}>
            <img
              src={n.img}
              srcSet={`${n.imgSm} 600w, ${n.img} 900w`}
              sizes="(min-width: 768px) 33vw, 100vw"
              alt={n.body}
              loading="lazy"
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
            <h3 className="mt-5 font-display text-lg tracking-[0.08em]">
              {n.label}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Claims() {
  const claims = [
    ["CRUELTY", "FREE"],
    ["LONG", "LASTING"],
    ["25% OIL", "CONCENTRATION"],
    ["IFRA", "CERTIFIED"],
    ["FORMULATED", "IN FRANCE"],
  ];

  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div>
          <p className="font-display text-xs tracking-[0.35em] text-ink-muted">
            THE CRAFT
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-[0.02em] md:text-6xl">
            BUILT FOR
            <br />
            THE HOURS
            <br />
            AFTER TWELVE.
          </h2>
        </div>
        <div>
          {claims.map(([a, b]) => (
            <div key={a} className="border-t border-ink-line py-6">
              <p className="font-display text-2xl tracking-[0.04em] md:text-3xl">
                {a}
              </p>
              <p className="mt-1 font-display text-xs tracking-[0.3em] text-ink-muted">
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "HOW TO APPLY",
    a: "Spray onto pulse points — neck, wrists, inner elbows — from a distance of 15 cm. Do not rub. Two sprays carry the night.",
  },
  {
    q: "FAQS",
    a: "Midnight is unisex, 100 ml, 25% oil concentration, and lasts 8-10 hours on skin. Ships within 24-36 hours of ordering, across India.",
  },
  {
    q: "LEGAL INFORMATION",
    a: "Marketed by Brix Lifestyle Private Limited. Formulated in France. For external use only. Keep away from direct sunlight and heat.",
  },
];

export function Accordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
      {faqs.map((f) => (
        <div key={f.q} className="border-t border-border last:border-b">
          <button
            onClick={() => setOpen(open === f.q ? null : f.q)}
            className="flex w-full items-center justify-between py-6 text-left"
            aria-expanded={open === f.q}
          >
            <span className="font-display text-lg tracking-[0.06em] md:text-2xl">
              {f.q}
            </span>
            <span className="text-2xl text-muted-foreground">
              {open === f.q ? "−" : "+"}
            </span>
          </button>
          {open === f.q && (
            <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {f.a}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        <h2 className="text-center font-display text-[13vw] leading-none tracking-[-0.01em] md:text-[8vw]">
          THE ONE &amp; ONLY
        </h2>
        <div className="mt-16 grid gap-10 text-sm md:grid-cols-4">
          <div>
            <p className="font-display tracking-[0.2em]">FRAGRANCES</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>MIDNIGHT</li>
              <li>THRONE</li>
              <li>NOBLE</li>
              <li>REGAL</li>
              <li>ORION</li>
            </ul>
          </div>
          <div>
            <p className="font-display tracking-[0.2em]">COMPANY</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>KNOW SARKAR</li>
            </ul>
          </div>
          <div>
            <p className="font-display tracking-[0.2em]">POLICY</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>PRIVACY POLICY</li>
              <li>TERMS &amp; CONDITIONS</li>
              <li>ORDERS &amp; SHIPPING</li>
              <li>REFUND POLICY</li>
            </ul>
          </div>
          <div>
            <p className="font-display tracking-[0.2em]">CONTACT US</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>SUPPORT@SARKAR.STORE</li>
              <li>INSTAGRAM · YOUTUBE</li>
            </ul>
          </div>
        </div>
        <p className="mt-16 text-center font-display text-[0.65rem] tracking-[0.25em] text-muted-foreground">
          © 2026, ALL RIGHTS RESERVED BY BRIX LIFESTYLE PRIVATE LIMITED
        </p>
      </div>
    </footer>
  );
}

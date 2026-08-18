import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/midnight/Nav";
import { Notes, Claims, Accordion, Footer } from "@/components/midnight/sections";
import heroImg from "@/assets/midnight-hero.jpg";
import packagingImg from "@/assets/midnight-packaging.jpg";
import editorialImg from "@/assets/midnight-editorial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MIDNIGHT by Sarkar — Dark Lily Parfum, 100ml" },
      {
        name: "description",
        content:
          "Midnight by Sarkar: a deep black lily parfum with iris, oud and vanilla. 25% oil concentration, IFRA certified, formulated in France. ₹2,499.",
      },
      { property: "og:title", content: "MIDNIGHT by Sarkar — Dark Lily Parfum" },
      {
        property: "og:description",
        content:
          "A nocturnal black lily, opened after dark. Iris, oud and vanilla absolute. 100ml parfum.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Midnight,
});

function Midnight() {
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <main>
        <section
          id="buy"
          className="mx-auto grid max-w-[1400px] gap-10 px-4 py-10 md:grid-cols-2 md:gap-16 md:px-8"
        >
          <img
            src={heroImg}
            alt="Midnight by Sarkar 100ml parfum bottle in deep indigo chess-king glass"
            width={1408}
            height={1712}
            className="w-full bg-secondary object-cover"
          />

          <div className="md:pt-8">
            <h1 className="font-display text-4xl tracking-[0.02em] md:text-6xl">
              MIDNIGHT{" "}
              <span className="text-2xl text-muted-foreground md:text-3xl">
                (100ML)
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {["UNISEX", "DARK FLORAL", "PARFUM"].map((t) => (
                <span
                  key={t}
                  className="bg-secondary px-4 py-2 font-display text-xs tracking-[0.15em]"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-6 font-display text-sm tracking-[0.12em]">
              AFTER PARTIES · SLOW EXITS · LONG NIGHTS
            </p>
            <p className="mt-2 text-lg text-muted-foreground">
              It smells like black lily, wet iris and the hour no one remembers.
            </p>

            <p className="mt-8 font-display text-4xl">₹ 2,499</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Incl. of all taxes
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-between border border-border px-4 py-3 sm:w-36">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="text-xl text-muted-foreground"
                >
                  −
                </button>
                <span className="font-display">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="text-xl text-muted-foreground"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-foreground px-8 py-4 font-display text-sm tracking-[0.2em] text-background transition-opacity hover:opacity-85">
                ADD TO CART
              </button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              * Ships within 24-36 hours of ordering.
            </p>

            <img
              src={packagingImg}
              alt="Midnight parfum with matte black Sarkar tube and box packaging"
              loading="lazy"
              width={1200}
              height={1200}
              className="mt-10 w-full object-cover"
            />
          </div>
        </section>

        <section className="relative">
          <img
            src={editorialImg}
            alt="Man in black coat holding the Midnight parfum bottle at night"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[70vh] w-full object-cover"
          />
          <p className="pointer-events-none absolute inset-0 flex items-end justify-center pb-12 font-display text-[9vw] leading-none tracking-[0.08em] text-ink-foreground mix-blend-difference md:text-[6vw]">
            OWN THE DARK
          </p>
        </section>

        <Notes />
        <Claims />
        <Accordion />
      </main>

      <Footer />
    </div>
  );
}

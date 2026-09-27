"use client";

import { useEffect, useState } from "react";

const appScreens = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
];

const features = [
  {
    number: "01",
    title: "Lyrics that keep up",
    text: "Timed lyrics arrive as a clean, readable layer over the music, with translations and pronunciation exactly where you need them.",
  },
  {
    number: "02",
    title: "A bridge between scripts",
    text: "PolyTune recognizes Japanese, Korean, Chinese, and more, then turns unfamiliar writing into something you can actually sing.",
  },
  {
    number: "03",
    title: "Built to get better",
    text: "Every processed song is cached and structured, so the catalog becomes faster, richer, and more useful with each listen.",
  },
];

export default function PolyTuneLanding() {
  const [screenOrder, setScreenOrder] = useState(appScreens);

  useEffect(() => {
    const timer = setInterval(
      () => setScreenOrder((screens) => [...screens.slice(1), screens[0]]),
      2400,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0c0d0d] text-[#f2f0e9] selection:bg-[#b8f36b] selection:text-[#111]">
      <nav className="site-nav">
        <a className="brand" href="#top" aria-label="PolyTune home">
          <img src="/PolyTuneLogo.png" alt="" width="42" height="42" />
          <span>PolyTune</span>
        </a>
        <a className="nav-link" href="#acquire">
          Acquire the app <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section id="top" className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> A better way to hear the world
          </p>
          <h1>
            Find the words
            <br />
            <em>inside the music.</em>
          </h1>
          <p className="hero-lede">
            PolyTune is a mobile lyric companion for the songs that streaming
            apps leave untranslated. Sing along, learn the sounds, and stay in
            the moment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#acquire">
              See the opportunity <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#product">
              Explore the product <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span>01</span> Made for curious listeners, language learners, and
            the tracks they cannot stop replaying.
          </div>
        </div>

        <div className="player-wrap" aria-label="PolyTune lyric preview">
          <div className="lyric-window">
            {screenOrder.map((screen, index) => (
              <div
                key={screen}
                className={`screen-slide screen-slide-${index}`}
              >
                <img
                  src={`/${screen}`}
                  alt={`PolyTune app screen ${Number(screen[0])}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="manifesto-section">
        <div className="section-intro">
          <p className="eyebrow">The product</p>
          <h2>
            Music is already
            <br />
            <em>multilingual.</em>
          </h2>
        </div>
        <div className="section-body">
          <p className="large-copy">
            The feeling should not get lost at the edge of a script. PolyTune
            gives global music fans the context to go deeper without pulling
            them out of the song.
          </p>
          <div className="rule" />
          <p className="small-copy">
            Search a track. Press play. Read the lyric in its original form, its
            familiar sound, and your language.
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-heading">
          <p className="eyebrow">Under the hood</p>
          <h2>
            Small details.
            <br />
            <em>Big replay value.</em>
          </h2>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <article className="feature-row" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="feature-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="audience-section">
        <div>
          <p className="eyebrow">Already in the wild</p>
          <h2>
            For people who
            <br />
            <em>listen sideways.</em>
          </h2>
        </div>
        <div className="audience-copy">
          <p>
            J-pop deep cuts. K-pop b-sides. Anime openings. The song your friend
            sent with no explanation. PolyTune is for the tracks that make you
            curious enough to look twice.
          </p>
          <div className="tag-list">
            <span>J-pop</span>
            <span>K-pop</span>
            <span>Anime OSTs</span>
            <span>Language learners</span>
          </div>
        </div>
      </section>

      <section id="acquire" className="acquire-section">
        <div className="acquire-mark">
          <img
            src="/PolyTuneLogo.png"
            alt="PolyTune logo"
            width="92"
            height="92"
          />
        </div>
        <p className="eyebrow">The next verse</p>
        <h2>
          Give every song
          <br />
          <em>a way in.</em>
        </h2>
        <p>
          PolyTune is a finished mobile product with a clear audience, a durable
          technical foundation, and plenty of room to grow.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://www.sideprojectors.com"
            target="_blank"
            rel="noreferrer"
          >
            View the listing <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button-quiet"
            href="mailto:mayowasamson03@gmail.com"
          >
            Talk to the founder
          </a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <img src="/PolyTuneLogo.png" alt="" width="30" height="30" />
          <span>PolyTune</span>
        </a>
        <span>© 2026 PolyTune</span>
        <span>Made for the next repeat.</span>
      </footer>
    </main>
  );
}

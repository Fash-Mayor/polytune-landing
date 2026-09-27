# PolyTune

PolyTune is a mobile lyric companion for music that does not fit neatly inside one language. It helps listeners follow foreign-language songs through three synchronized layers: the original lyric, a phonetic reading, and a plain-language translation.

## The idea

Streaming services are very good at finding a song and pressing play. They are less helpful when the chorus is written in a script you cannot read, or when a lyric translation is buried in a browser tab. PolyTune keeps that context beside the music so a listener can stay in the feeling of the track while still learning how it sounds and what it means.

The product is aimed at global music fans, language learners, and the communities built around J-pop, K-pop, anime soundtracks, electronic music, and other catalogues that are often poorly served by mainstream lyric experiences.

## Product strengths

- **Synchronized lyric layers:** Original scripts, romanization, and translations are presented together and kept aligned to the song.
- **Script-aware romanization:** A Unicode script detector routes text to the appropriate transliteration engine for Japanese, Korean, Chinese, and other supported writing systems.
- **Resilient lyric discovery:** A multi-source ingestion pipeline searches across lyric providers so niche and underground tracks have a better chance of being found.
- **Translation with structure:** AI-assisted translations are returned in a predictable, line-by-line format instead of an unstructured block of text.
- **Caching that compounds:** Processed lyrics and translations are stored in PostgreSQL, making later requests faster and reducing repeated processing costs.

## Technical foundation

PolyTune is designed as a React Native product backed by Supabase. Edge Functions handle lyric retrieval, script detection, and translation orchestration. PostgreSQL stores normalized songs, timed lyric payloads, translations, and cached language layers. The mobile experience is set up to support Google Sign-In and RevenueCat when launched as a commercial app.

## Why it has room to grow

The first useful version is already clear: make unfamiliar songs singable. From there, PolyTune can grow into personal pronunciation practice, community corrections, saved language packs, richer discovery, and listening history that reflects how people actually explore music across borders.

The landing page is intentionally positioned as an acquisition surface for the product, not as documentation for the website itself.

Profile photo
-------------
File: portrait.png
Used by src/components/sections/About.tsx, referenced as /images/portrait.png.

Recommended: a portrait-orientation photo (roughly 4:5, e.g. 1000x1250px)
so it fills the card without heavy cropping.

If you use a different filename or format, update the src path in About.tsx
to match.


Logo mark
---------
Files: logo-dark.png (vivid/saturated version) and logo-light.png (pastel
version). Both are expected here; only logo-dark.png is currently wired up
(used in the navbar and footer, next to the name).

logo-light.png isn't referenced by any component yet — it's there for when
a dark-background context (e.g. a future dark mode, or a dark section) needs
the lighter variant instead. Point a component's src at
/images/logo-light.png when that's needed.

Recommended: square, transparent background, similar crop/framing between
the two versions so they're interchangeable. PNG or SVG both work — SVG
will stay sharper at small icon sizes if you have a vector version.

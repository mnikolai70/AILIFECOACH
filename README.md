# Waypoint — AI Life Coaching Site

A static one-page site for an AI-assisted life coaching offer: intro to the benefits of
life coaching, a simple → complex difficulty spectrum, an "evolution of AI" timeline
leading into an AI life coach pitch, a floating ElevenLabs demo widget, and three paid
program tiers.

No WordPress/database is involved — it's plain HTML/CSS/JS, which is what actually works
for hosting straight out of a GitHub repo.

## Files

```
index.html      structure & copy — edit text directly here
css/style.css   all styling (colors, type, layout)
js/script.js    footer year + the vertical "thread" line sizing
```

## 1. Put your own agent in the demo widget

Near the bottom of `index.html`, before `</body>`:

```html
<elevenlabs-convai
  agent-id="your-agent-id"
  ...
></elevenlabs-convai>
```

Replace `"your-agent-id"` with your real ElevenLabs Conversational AI agent ID
(ElevenLabs dashboard → your agent → **Widget** tab). Two things to check in that same
dashboard before it'll work:

- The agent must be **public**, with authentication disabled (Advanced tab).
- If you want to restrict which domains can embed it, add your GitHub Pages / custom
  domain to the agent's **Allowlist** (Security tab).

To cap the free demo at 5 minutes, set that limit on the agent itself in the ElevenLabs
dashboard (call duration / usage limits) — the widget just renders whatever the agent
allows.

## 2. Add your own photos

In the "Moments worth showing" section, each `<figure class="img-slot">` is a
placeholder box. Replace a box's contents with a real image, e.g.:

```html
<figure class="img-slot img-slot--wide">
  <img src="assets/session-1.jpg" alt="Coaching session">
  <figcaption>In session</figcaption>
</figure>
```

Drop your image files into the `assets/` folder and point `src` at them. The dashed
placeholder styling only applies to empty slots, so once an `<img>` is inside, it'll
just show the photo.

## 3. Personalize the copy

- Search `index.html` for **"Waypoint"** and rename it to your brand/business name.
- In the Option C pricing card, replace "me, your certified life coach" and the coach
  bio placeholder in the gallery with your own name and credentials.
- Update the footer contact details and social links.
- Update the `<meta name="description">` tag in `<head>` for search engines.

## 4. Deploy on GitHub Pages

1. Create a new GitHub repository and push these files to it (root of the repo, or a
   `docs/` folder — either works).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to "Deploy from a branch," pick your
   branch (usually `main`) and the folder (`/root` or `/docs`).
4. Save. GitHub will give you a URL like `https://yourusername.github.io/repo-name/`
   within a minute or two.
5. If you have a custom domain, add it under the same Pages settings and update your
   domain's DNS as GitHub instructs.

## Notes

- The pricing buttons ("Start Option A/B/C") currently link to `#` — point them at
  your checkout, booking page, or contact form once you have one.
- Colors and type are all defined as CSS variables at the top of `css/style.css` if you
  want to adjust the palette.

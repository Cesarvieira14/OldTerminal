# OldTerminal - Retro Portfolio

Just a fun portfolio site I built to mess with the retro aesthetic. It's got that old-school terminal vibe with a CRT monitor look, complete with scanlines, glitch effects, and that cozy 80s/90s feeling.

## 🖥️ What's in here

- **CRT Monitor styling** - The whole thing looks like a boxy old computer monitor with all those vintage scanlines
- **Boot sequence** - Starts with a fake BIOS screen showing CPU/RAM info before you get to the actual content
- **Terminal commands** - Navigate around with a command-line style interface (projects, about, contact)
- **Glitch effects** - Some text glitch and flicker animations to keep things interesting
- **Responsive** - Works on different screen sizes without looking too weird
- **Smooth animations** - Slide-ins, wave effects, and nice hover states throughout

## 📁 Project Structure

```
OldTerminal/
├── index.html      # Main HTML structure with portfolio content
├── style.css       # Comprehensive styling with retro effects and animations
├── script.js       # JavaScript for interactivity and animations
└── README.md       # This file
```

## 🚀 How to use

Just grab the files and open `index.html` in your browser. That's it. No npm, no build steps, no pain.

If you want to host it somewhere:
- GitHub Pages works great if you want free hosting
- Or throw it on Netlify/Vercel if you prefer that
- Run `python -m http.server 8000` locally if you just wanna see it on your machine

## 🎨 Making it yours

Want to change stuff up? Easy.

**Swap out the content** - Just edit `index.html` and put in your own name, projects, and info. Nothing fancy.

**Change the colors** - The green text and dark background are in `style.css`. The main colors are `#000`, `#1a1a1a` for backgrounds, and `#00ff00`, `#00dd00` for that green terminal look. Swap 'em out if you want a different vibe.

**Speed up/slow down animations** - In `script.js` and `style.css` you can tweak the boot sequence timing (default is 2.8 seconds), text animations, and glitch effects. Play around and see what feels right.

## 🛠️ What's under the hood

- **HTML5** - Plain old markup
- **CSS3** - All those nice animations, scanlines, glitches, and glow effects
- **Vanilla JavaScript** - Just plain JS, no frameworks or dependencies

## 🎮 How it actually works

**Boot sequence** - When you load the page, you get a fake BIOS startup screen with system info. It's a nice little intro before jumping into the actual portfolio.

**Terminal navigation** - The menu uses a command-line style to let you browse Projects, About, and Contact sections. Pretty cool if you're into that retro aesthetic.

**Visual stuff** - Scanlines overlay, glitchy text animations, a little flicker on the title, and wavy divider lines. Nothing too crazy, just enough to feel authentic.

## 💡 Quick stuff to know

- Looks best on desktop/laptop. Mobile works but honestly it's meant for the big screen.
- Everything's CSS animations so performance is pretty smooth.
- If you add images, make sure they're not huge.
- Test it in a few browsers just to be safe.

## 📝 License

Do whatever you want with it. Use it as your portfolio, steal ideas, remix it, all good.

---

Made with some nostalgia and a love for old computers 🖥️

# ResuMate

A lightweight React app for building and previewing clean, printable resumes.

<!-- Badges -->
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build status](https://img.shields.io/badge/build-dev-green)](#)

Shortcuts
- Live preview as you type
- Export to PDF via browser Print

---

<details>
	<summary><strong>Interactive Quick Start (one-line)</strong></summary>

	```bash
	npm install
	npm start  # opens http://localhost:3000
	```

</details>

**Demo**

![demo placeholder](public/demo-placeholder.gif)

---

**Why ResuMate?**

- Fast form-driven resume authoring.
- Live HTML preview and printable output.
- Simple component structure for easy customization.

**Features**

- Form-based resume editor (`src/components/ResumeForm.js`).
- Live preview (`src/components/ResumePreview.js`).
- Client-side export via Print-to-PDF.

---

**Getting started**

1. Clone the repo and install dependencies:

```bash
git clone <your-fork-url>
cd resumate
npm install
```

2. Start the dev server:

```bash
npm start
```

Open http://localhost:3000 in your browser. The app supports hot reload.

---

**Usage**

- Open the editor and fill out the fields on the left.
- Preview updates instantly on the right.
- To save/export: use browser Print -> Save as PDF.

Helpful pointers:

- Edit form layout in [src/components/ResumeForm.js](src/components/ResumeForm.js).
- Customize preview markup/styles in [src/components/ResumePreview.js](src/components/ResumePreview.js).
- Global styles are in [src/App.css](src/App.css) and [src/index.css](src/index.css).

---

**Interactive Tips**

- Focus a field and press `Ctrl+S` to trigger autosave (if enabled).
- Use `Ctrl+P` to open Print dialog for a quick PDF export.
- Use browser zoom level 100% when printing for best layout fidelity.

<details>
	<summary><strong>Troubleshooting</strong></summary>

	- If the dev server doesn't start, try removing `node_modules` and reinstalling.
	- If styles look wrong, clear your browser cache or hard-reload the page.

</details>

---

**Development notes**

- Entry point: [src/index.js](src/index.js)
- App container: [src/App.js](src/App.js)
- Components: [src/components/ResumeForm.js](src/components/ResumeForm.js), [src/components/ResumePreview.js](src/components/ResumePreview.js)

If you add new fields to the form, ensure the preview component maps those fields to the printed layout.

---

**Testing & Build**

Run unit tests (if any):

```bash
npm test
```

Build for production:

```bash
npm run build
```

---

**Contributing**

Contributions are welcome. Suggested workflow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-change`.
3. Make changes, run the app locally and add tests if appropriate.
4. Open a pull request with a clear description.

Please follow the existing code style.

---

**License**

This project is available under the MIT License. See the LICENSE file for details.

---

**Contact / Support**

Open issues on GitHub for bugs or feature requests.

---

If you'd like, I can:

- add a demo GIF to `public/demo-placeholder.gif` and wire it into the README,
- add a small CLI to export JSON resumes, or
- generate a sample resume JSON and screenshot to include here.

---


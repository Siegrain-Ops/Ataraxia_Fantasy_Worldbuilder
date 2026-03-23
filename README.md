# Ataraxia Fantasy Worldbuilder

Desktop app for building and managing fantasy worlds. Built with **Tauri 2 + React + TypeScript + Vite**.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 18 | [nodejs.org](https://nodejs.org) |
| Rust | stable | `curl https://sh.rustup.rs -sSf \| sh` (or [rustup.rs](https://rustup.rs)) |
| Tauri prerequisites | — | [tauri.app/start/prerequisites](https://tauri.app/start/prerequisites/) (WebView2 on Windows) |

---

## Setup

```bash
# Install JS dependencies
npm install
```

---

## Run

```bash
# Frontend only (browser, fast iteration)
npm run dev

# Full desktop app (requires Rust)
npm run tauri:dev
```

## Build

```bash
# Production desktop bundle
npm run tauri:build
```

Artifacts end up in `src-tauri/target/release/bundle/`.

---

## Project structure

```
├── src/                  # React frontend
│   ├── main.tsx
│   ├── App.tsx
│   └── index.css
├── src-tauri/            # Tauri / Rust backend
│   ├── src/
│   │   ├── main.rs
│   │   └── lib.rs
│   ├── Cargo.toml
│   ├── build.rs
│   └── tauri.conf.json
├── index.html
├── vite.config.ts
└── tsconfig.json
```

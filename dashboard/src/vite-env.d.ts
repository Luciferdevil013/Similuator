/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Override the bridge origin, e.g. "ws://127.0.0.1:8787", for dev. */
  readonly VITE_BRIDGE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

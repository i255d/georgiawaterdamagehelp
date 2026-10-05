/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CALLRAIL_SWAP?: string;
  readonly PUBLIC_PHONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

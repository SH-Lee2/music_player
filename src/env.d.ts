interface ImportMetaEnv {
  readonly VITE_GEO_API_KEY: string;
  readonly VITE_SHAZAM_CORE_RAPID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

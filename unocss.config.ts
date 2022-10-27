import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      cdn: "https://esm.sh/",
    }),
    presetTypography(),
    presetTagify(),
  ],
  transformers: [transformerAttributifyJsx()],
});

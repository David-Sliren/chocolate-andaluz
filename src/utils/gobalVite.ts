export const getAllImages = import.meta.glob("/src/assets/experience/*.webp", {
  eager: true,
  import: "default",
});

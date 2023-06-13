export function generateSlug(name) {
  const slug = name
    .toLowerCase()
    .replace(/[^\wа-яё]+/g, '-') // Remove non-alphanumeric characters except Cyrillic letters
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

  return slug;
}
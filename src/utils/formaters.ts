export function notEmptyStringOrDefault(value: string) {
  return typeof value === 'string' ? value.trim() : ''
}

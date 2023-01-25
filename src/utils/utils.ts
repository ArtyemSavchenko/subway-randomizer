export function copyDeep<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

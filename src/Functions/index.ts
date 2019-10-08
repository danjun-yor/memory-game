export function shuffle<T>(o: Array<T>): Array<T> {
  o.sort(function() {
    return 0.5 - Math.random();
  });
  return o;
}

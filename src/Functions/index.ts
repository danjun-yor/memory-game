export function shuffle(o: Array<any>) {
  o.sort(function() {
    return 0.5 - Math.random();
  });
  return o;
}

export function shuffle<T>(o: Array<T>): Array<T> {
  o.sort(function() {
    return 0.5 - Math.random();
  });
  return o;
}

export function formatSeconds(seconds: number) {
  const hh = String(Math.floor(seconds / 3600));

  const rest = seconds % 3600;
  const mm = String(Math.floor(rest / 60)).padStart(2, "0");

  const ss = String(seconds % 60).padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
}

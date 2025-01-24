export function* randomColorGenerator(): Generator<string> {
   const colors = [
      "#fc2828",
      "#fc7228",
      "#fcd928",
      "#76fc28",
      "#28fc6b",
      "#28fcee",
      "#2892fc",
      "#3628fc",
      "#ae28fc",
      "#fc28e0",
      "#fc286f",
   ];

   for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
   }

   let index = 0;
   while (true) {
      yield colors[index];
      index = (index + 1) % colors.length;
   }
}

export function hexToRgba(hex: string, alpha: number) {
   hex = hex.replace(/^#/, "");

   const r = parseInt(hex.substring(0, 2), 16);
   const g = parseInt(hex.substring(2, 4), 16);
   const b = parseInt(hex.substring(4, 6), 16);

   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

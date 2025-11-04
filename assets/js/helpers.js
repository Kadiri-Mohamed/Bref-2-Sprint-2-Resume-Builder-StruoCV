let pro = 0;

export function NextProgress(progress) {
  if (pro < 75) {
    pro += 25;
    progress.style.left = `${pro}%`;
  }
}

export function PrevProgress(progress) {
  if (pro > 0) {
    pro -= 25;
    progress.style.left = `${pro}%`;
  }
}

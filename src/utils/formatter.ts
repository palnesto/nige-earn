export function formatNumber(num: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  if (num === 0) return "0";
  const absNum = Math.abs(num);
  if (absNum < 1000) {
    const truncated = Math.trunc(num * 100000) / 100000;
    if (truncated % 1 === 0) return truncated.toFixed(0);
    if ((truncated * 10) % 1 === 0) return truncated.toFixed(1);
    if ((truncated * 100) % 1 === 0) return truncated.toFixed(2);
    if ((truncated * 1000) % 1 === 0) return truncated.toFixed(3);
    if ((truncated * 10000) % 1 === 0) return truncated.toFixed(4);
    return truncated.toFixed(5);
  }
  const suffixIndex = Math.floor(Math.log10(absNum) / 3);
  const cappedSuffixIndex = Math.min(suffixIndex, suffixes.length - 1);
  const scaled = num / Math.pow(1000, cappedSuffixIndex);
  const truncated = Math.trunc(scaled * 100) / 100;
  if (truncated % 1 === 0)
    return `${truncated.toFixed(0)}${suffixes[cappedSuffixIndex]}`;
  if ((truncated * 10) % 1 === 0)
    return `${truncated.toFixed(1)}${suffixes[cappedSuffixIndex]}`;
  return `${truncated.toFixed(2)}${suffixes[cappedSuffixIndex]}`;
}

export function convertToProperCase(inputString: string): string {
  // Replace underscores with spaces and capitalize the first letter of each word
  return inputString
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

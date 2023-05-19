export function splitParagraph(paragraph: string): string[] {
  const words = paragraph.trim().split(/\s+/);

  if (words.length > 0) {
    const firstWord = words[0];
    const restOfText = words.slice(1).join(" ");
    return [firstWord, restOfText];
  }

  return ["", ""];
}

export interface Theme {
  name: string;
  background: string;
  text: string;
  border: string;
}

export const themes: Theme[] = [
  {
    name: "cream",
    background: "#F7F7F0",
    text: "#1A1A1A",
    border: "#D4CFC5",
  },
  {
    name: "burgundy",
    background: "#F5F5F0",
    text: "#8B2020",
    border: "#C45050",
  },
  {
    name: "navy",
    background: "#F5F5F0",
    text: "#1E3A5F",
    border: "#5C7A9F",
  },
  {
    name: "forest-green",
    background: "#F5F5F0",
    text: "#2D4A3E",
    border: "#6B8A7A",
  },
];

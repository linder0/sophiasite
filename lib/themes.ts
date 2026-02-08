export interface Theme {
  name: string;
  background: string;
  text: string;
  border: string;
}

export const themes: Theme[] = [
  {
    name: "classic-black",
    background: "#FAFAFA",
    text: "#000000",
    border: "#D4D4D4",
  },
  {
    name: "crimson",
    background: "#FEFEFE",
    text: "#B91C1C",
    border: "#FCA5A5",
  },
  {
    name: "midnight-blue",
    background: "#FEFEFE",
    text: "#1E40AF",
    border: "#93C5FD",
  },
  {
    name: "forest-green",
    background: "#FEFEFE",
    text: "#047857",
    border: "#6EE7B7",
  },
  {
    name: "royal-purple",
    background: "#FEFEFE",
    text: "#7C3AED",
    border: "#C4B5FD",
  },
  {
    name: "burnt-orange",
    background: "#FEFEFE",
    text: "#DC2626",
    border: "#FCA5A5",
  },
];

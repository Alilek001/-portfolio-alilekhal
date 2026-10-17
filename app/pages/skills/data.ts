export interface RowData {
  colors: string[];
  widths: number[];
  skills: string[];
  direction: number;
}

export const rowData: RowData[] = [
  {
    colors: ["blue", "green", "orange-ish", "dark-blue"],
    widths: [30, 50, 20, 20],
    skills: ["Docker", "JavaScript", "Linux", ""],
    direction: -1,
  },
  {
    colors: ["grey-blue", "yellow", "white", "cream"],
    widths: [30, 50, 20, 20],
    skills: ["", "CSS", "Java", "Git"],
    direction: 1,
  },
  {
    colors: ["dark-blue", "brown", "red", "light-green"],
    widths: [25, 25, 25, 25],
    skills: ["Vue.js", "", "HTML", "Bootstrap"],
    direction: -1,
  },
  {
    colors: ["pink", "cream", "black", "grey"],
    widths: [30, 40, 30, 40],
    skills: ["PHP", "", "MySQL", ""],
    direction: 1,
  },
  {
    colors: ["dark-grey", "orange", "yellow", "teal"],
    widths: [60, 10, 20, 20],
    skills: ["Laravel", "", "GitHub", ""],
    direction: -1,
  },
  {
    colors: ["green", "cream", "light-green", "pink"],
    widths: [20, 30, 20, 30],
    skills: ["", "Node.js", "", "Tailwind"],
    direction: 1,
  },
];

export const containerReveal = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: 100,
  },
};

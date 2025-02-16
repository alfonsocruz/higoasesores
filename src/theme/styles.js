const styledGrid = {
  display: "grid",
  gap: "24px",
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "repeat(4, 1fr) !important",
  },
  "@media (min-width: 900px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (min-width: 600px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 0px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
};

const styledGridJustification = {
  display: "grid",
  gap: "24px",
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "repeat(3, 1fr) !important",
  },
  "@media (min-width: 900px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (min-width: 600px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 0px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
};

const styledGrid2x = {
  display: "grid",
  gap: "24px",
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "repeat(2, 1fr) !important",
  },
  "@media (min-width: 900px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 600px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 0px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
};

export { styledGrid, styledGridJustification, styledGrid2x };

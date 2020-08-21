export const Helper = {
  alphabeticalOrder: (ar, item) =>
    ar.sort((a, b) => a[item].localeCompare(b[item]))
};

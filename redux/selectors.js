export const getColorsState = store => store.colors;

export const getColorList = store =>
  getColorsState(store) ? getColorsState(store).colors : [];

export const getCurrentColor = (store, id) => getColorsState(store).colors[id];

export const getIsRemovedFlag = store => store.isRemoved;

export const initialState = {
  pinnedNotes: [],
  normalNotes: [],
};

export const reducer = (state, action) => {
  if (action.type === 'ADD_PINNED_NOTE') {
    return { ...state, pinnedNotes: { ...state.notes, ...action.payload } };
  }
  if (action.type === 'ADD_NOTE') {
    return { ...state, normalNotes: { ...state.notes, ...action.payload } };
  }
};
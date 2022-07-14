const initialState = [];

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS': return 'Under Construction';
    default: return state;
  }
};

export default categories;

export const CHECK_STATUS = () => ({
  type: 'CHECK_STATUS',
});

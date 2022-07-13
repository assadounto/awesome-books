const categories = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return [
        ...state,
        {
          text: 'Under-Construction',
        },
      ];
    default:
      return state;
  }
};

export default categories;

export const CheckStatus = () => ({
  type: 'CHECK_STATUS',
});

const defaultState = {
  inputValue: '123',
  list: [1, 2]
};
// reducer 只能接收store，不能更改store
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  console.log(state, action);
  return state;
}
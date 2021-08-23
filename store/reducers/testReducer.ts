export interface TestState {
  value: number;
  isTested: boolean;
}
export enum TestActionTypes {
  INCREMENT_VALUE = 'INCREMENT_VALUE',
  DECREMENT_VALUE = 'DECREMENT_VALUE',
  MARK_AS_TESTED = 'MARK_AS_TESTED',
}

export type TestAction =
  | { type: TestActionTypes.INCREMENT_VALUE; payload: number }
  | { type: TestActionTypes.DECREMENT_VALUE }
  | { type: TestActionTypes.MARK_AS_TESTED };

const initialState: TestState = { isTested: false, value: 0 };

export const testReducer = (
  state = initialState,
  action: TestAction
): TestState => {
  switch (action.type) {
    case TestActionTypes.INCREMENT_VALUE:
      return { ...state, value: state.value + action.payload };

    case TestActionTypes.DECREMENT_VALUE:
      return { ...state, value: state.value - 1 };

    case TestActionTypes.MARK_AS_TESTED:
      return { ...state, isTested: true };

    default:
      return state;
  }
};

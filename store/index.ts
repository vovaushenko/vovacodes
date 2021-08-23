/* eslint-disable no-unused-vars */
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { reducer, RootState } from './reducers';

/***
 *@interface
 *extended interface of the Dispatch of redux
 *Extend the Dispatch interface with a ThunkDispatch *overload signature using Declaration Merging, in order to be able to dispatch actions through store.dispatch() in integration and unit tests
 *
 */
declare module 'redux' {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

// store for tests
export const store = createStore(reducer);

const makeStore: MakeStore<RootState> = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<RootState>(makeStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

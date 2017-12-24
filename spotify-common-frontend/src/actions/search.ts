import Song from '../types/DTO/Song';
import { ActionCreator } from 'react-redux-typescript';
import { Dispatch } from 'react-redux';
import { State } from '../types/State';
import config from '../config';

const SEARCH_FETCH_SUCCESS = 'Search_FETCH_SUCCESS';
const SEARCH_FETCH_ERROR = 'Search_FETCH_ERROR';
const SEARCH_FETCH_STARTED = 'Search_FETCH_STARTED';

export const ActionCreators = {
  SearchFetchSuccess: new ActionCreator<typeof SEARCH_FETCH_SUCCESS, {results: Song[]}>(SEARCH_FETCH_SUCCESS),
  SearchFetchError: new ActionCreator<typeof SEARCH_FETCH_ERROR, {errorMessage: string}>(SEARCH_FETCH_ERROR),
  SearchFetchStarted: new ActionCreator<typeof SEARCH_FETCH_STARTED, {query: string}>(SEARCH_FETCH_STARTED)
};

export function search(query: string) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.SearchFetchStarted.create({query}));
    fetch(`${config.apiUrl}search/${getState().user.playlistId}?value=${query}`)
    .then(res => res.json())
    .then(data => {
      dispatch(ActionCreators.SearchFetchSuccess.create({results: data}));
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.SearchFetchError.create({
        errorMessage: error.message ? error.message : 'Error'
      }));
    });
  };
}

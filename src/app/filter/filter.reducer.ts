import * as fromFilter from './filter.actions';

const estadoInicial: fromFilter.Filters = 'TODOS';

export function filterReducer(state = estadoInicial, action: fromFilter.Actions) {
  switch (action.type) {
    case fromFilter.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
}

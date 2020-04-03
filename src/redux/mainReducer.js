import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth25485Reducer from '../features/EmailAuth25485/redux/reducers';
import CalendarView25483Reducer from '../features/CalendarView25483/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth25485: EmailAuth25485Reducer,
CalendarView25483: CalendarView25483Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});
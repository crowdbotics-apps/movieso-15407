import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth25485Saga from '../features/EmailAuth25485/redux/sagas';
import CalendarView25483Saga from '../features/CalendarView25483/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth25485Saga,
CalendarView25483Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}
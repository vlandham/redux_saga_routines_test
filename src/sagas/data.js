import { put, takeLatest } from "redux-saga/effects";
import { fetchDataRoutine } from "../reducers/data";

function* fetchData() {
  try {
    yield put(fetchDataRoutine.request());
    const data = [1, 2, 3];
    yield put(fetchDataRoutine.success(data));
  } catch (e) {
    yield put(fetchDataRoutine.failure(e.message));
  } finally {
    yield put(fetchDataRoutine.fulfill());
  }
}

export const dataSagas = [takeLatest(fetchDataRoutine.TRIGGER, fetchData)];

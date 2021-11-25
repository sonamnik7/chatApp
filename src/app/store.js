import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  },
});
export default store;
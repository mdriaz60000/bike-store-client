import { configureStore } from '@reduxjs/toolkit'

import authReducer  from "./features/auth/authSlice"
 import baseApi from './api/baseApi'

 import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
    auth : persistedAuthReducer,
   
  
  },
  middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware)
  
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);

  // const handleDelete = (userId: string) => {
  // console.log(userId) // Added userId parameter
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then(async (result) => { // Made callback async
  //     if (result.isConfirmed) {
  //       try {
  //         await deleteUser(userId)
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "User has been deleted.",
  //           icon: "success"
  //         });
  //       } catch (error: any) {
  //         Swal.fire({
  //           title: "Error!",
  //           text: "Failed to delete user.",
  //           icon: "error"
  //         });
  //       }
  //     }
  //   });
  // }
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { appReducer } from 'store/reducers'
import { authorsReducer } from 'store/reducers/author_reducer'
import { booksReducer } from 'store/reducers/books_reducer'
import { contentTypeReducer } from 'store/reducers/content_type_reducer'
import { directionsReducer } from 'store/reducers/directions_reducer'
import { tagsReducer } from 'store/reducers/tags_reducer'
import { videosReducer } from 'store/reducers/videos_reducer'

export const store = configureStore({
  reducer: {
    app: appReducer,
    directions: directionsReducer,
    contentType: contentTypeReducer,
    authors: authorsReducer,
    tags: tagsReducer,
    books: booksReducer,
    videos: videosReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

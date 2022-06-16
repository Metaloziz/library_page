import { Dispatch } from 'redux'

import { setErrorTrueAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'

export const setThunkError = (dispatch: Dispatch, errorData: ResponseErrorType): void => {
  const {
    response: {
      data: { ErrorMsg },
    },
  } = errorData

  if (ErrorMsg) {
    dispatch(setErrorTrueAC(ErrorMsg))
  } else {
    dispatch(setErrorTrueAC('some error'))
  }
}

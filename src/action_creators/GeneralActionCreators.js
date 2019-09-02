export const ERROR_HANDLE = 'ERROR/HANDLE'
export const LOADING_ON = 'LOADING/ON'
export const LOADING_OFF = 'LOADING/OFF'

export const ErrorHandle = failText => ({
    type: ERROR_HANDLE,
    data: failText,
})
export const ShowLoading = () => ({ type: LOADING_ON })
export const HideLoading = () => ({ type: LOADING_OFF })

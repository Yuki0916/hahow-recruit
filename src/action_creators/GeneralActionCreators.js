export const ERROR_HANDLE = 'ERROR/HANDLE'

export const ErrorHandle = failText => ({
    type: ERROR_HANDLE,
    data: failText,
})

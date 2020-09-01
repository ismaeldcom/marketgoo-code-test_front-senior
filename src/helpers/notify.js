import cogoToast from 'cogo-toast'

const options = {
    position: 'bottom-right'
}

export default {
    success: message =>
        cogoToast.success(message, { ...options, heading: 'Success' }),
    error: (message, heading) =>
        cogoToast.error(message, { ...options, heading: heading || 'Error' })
}

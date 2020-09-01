const validation = {
    required: value => (value ? false : 'Required'),
    positive: value => (value >= 0 ? false : 'Number greater than zero')
}

export default validation

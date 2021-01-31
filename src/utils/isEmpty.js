const isEmpty = (data) => Object.keys(data).length === 0 && data.constructor === Object;

export default isEmpty;
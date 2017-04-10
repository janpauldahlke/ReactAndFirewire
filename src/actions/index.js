import axois from 'axios';

export function fetchUsers() {
  const request = axois.get('http://jsonplaceholder.typicode.com/users');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: 'FETCH_PROFILES',
        payload: data
      })
    });
  };
}

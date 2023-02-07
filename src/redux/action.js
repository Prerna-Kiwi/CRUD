import {ADD_USER, DELETE_USER, USER_LIST, EDIT_USER, LOGIN_USER, LOGOUT_USER} from './actionType';

export const fetchList = data => {
  return {
    type: USER_LIST,
    payload: data,
  };
};
export const addUser = data => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
export const deleteUser = deleteData => {
  return {
    type: DELETE_USER,
    payload: deleteData,
  };
};
export const editUser = editData => {
  return {
    type: EDIT_USER,
    payload: editData,
  };
};
export const loginUser = loginData => {
  return {
    type: LOGIN_USER,
    payload: loginData,
  };
};

// asyncAction

export const fetchData = payload => {
  return dispatch => {
    fetch(`https://gorest.co.in/public/v2/users`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          ' Bearer 60d4cebec4430cdcea6339f1a19c96d665f6e5dd50dd2e685dec0fc2e8c75868',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(json => {
        // console.log('iugiyfdtd',json)
        dispatch({
          type: USER_LIST,
          payload: json.reverse(),
        });
      });
  };
};

export const loginData = payload => {
  console.log('payloaddd', payload)
  return dispatch => {
    fetch(`https://api.dev.oodapp.com/api/v1/users/login`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        'api_key': `WCPA32ACA2JK90E949A14DD5B8CBCAD942`,
        Authorization:
        ' Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzE3LCJmaXJzdG5hbWUiOiJVc2VyIiwibGFzdG5hbWUiOiJGZnl5IiwiZW1haWwiOiJ1c2VyMjhAeW9wbWFpbC5jb20iLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE2NjI3MTgzNDgsImV4cCI6MTY2NTMxMDM0OH0.FiaGQ5VD5QVQH5Uw4sJnHN_c6Qd8X2FB-48gh89oGVg',
      },
      body: {email: payload.email, password: payload.password},
    })
      .then(response => response.json())
      .then(json => {
        console.log('Loginnnn',json)
        dispatch({
          type:  LOGIN_USER,
          payload: json,
        });
      });
  };
};

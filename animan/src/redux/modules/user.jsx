// IMPORT
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// TOKEN
import { setToken, removeToken } from '../../shared/token';

// 회원가입
export const signUpDB = ({ name, username, password, passwordCheck }) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/user/register', { name, username, password, passwordCheck })
      .then((res) => {
        console.log(res);
        window.alert('회원가입 성공!');
        history.push('/login');
      })
      .catch((err) => {
        window.alert('회원가입 실패!');
        console.log(err);
      });
  };
};

// 로그인
export const logInDB = ({ username, password }) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/user/login', { username, password })
      .then((res) => {
        dispatch(SetUser(res.data));
        setToken(res.data.token);
        window.alert('로그인 성공');
        history.replace('/');
        // window.location.reload();
      })
      .catch((err) => {
        window.alert('아이디, 비밀번호를 확인해주세요.');
        console.log(err);
      });
  };
};

// 로그인 상태 확인
export const logInCheck = ({ username }) => {
    return function (dispatch, getState, { history }) {
        instance
          .get('/user/userinfo', { username })
          .then((res) => {
            dispatch(logChek(res.data));
          })
          .catch((err) => {
            window.alert('로그인 체크 실패!');
            console.log(err);
          });
      };
    };

// initialState
const initialState = {
  user_info: '',
  is_login: false,
};

// REDUX
const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
      //로그인
      SetUser: (state, action) => {
        state.user_info.username = action.payload.username;
        setToken('token', action.payload.token);
        state.is_login = true;
      },
      //로그인 체크
      logChek: (state, action) => {
        state.user_info.username = action.payload.username;
        state.is_login = true;
      },
      // 로그아웃
      logOut: (state, action) => {
        removeToken('token');
        state.is_login = false;
        window.alert('로그아웃 되었습니다!');
      },
    },
  });

export const { SetUser, LogOut, logChek } = user.actions;
export default user;
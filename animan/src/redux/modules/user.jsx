// IMPORT
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// TOKEN
import { setToken, removeToken, getToken } from '../../shared/token';

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
      })
      .catch((err) => {
        window.alert('아이디, 비밀번호를 확인해주세요.');
        console.log(err);
      });
  };
};

// 로그인 상태 확인
export const logInCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = getToken('token');
    if (token === null) {
      return;
    }
    instance
      .get('/user/userinfo')
      .then((res) => {
        dispatch(logCheck(res.data.username));
      })
      .catch((err) => {
        window.alert('로그인 체크 실패!');
        console.log(err);
      });
  };
};

// 카카오 로그인
export const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'GET',
      url: `http://52.78.241.50/oauth/callback/kakao?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함

        history.replace('/'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패하였습니다.');
        history.replace('/login'); // 로그인 실패하면 로그인화면으로 돌려보냄
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
      state.user_info = action.payload.username;
      setToken('token', action.payload.token);
      state.is_login = true;
    },
    //로그인 체크
    logCheck: (state, action) => {
      state.user_info = action.payload;
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

export const { SetUser, LogOut, logCheck } = user.actions;
export default user;

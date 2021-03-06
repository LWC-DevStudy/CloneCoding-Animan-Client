// LIBRARY
import React, { useEffect } from 'react';
import { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { logInDB } from '../redux/modules/user';

// OAuth
import { KAKAO_AUTH_URL } from '../redux/modules/OAuth';

// HISTORY
import { history } from '../redux/configureStore';

// STYLE
import { flexBox, flexHoz } from '../shared/style';

// ELEMENTS
import { Button, Input, Grid, Text } from '../elements/index';

const { naver } = window;

const Login = () => {
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'b3YwqR1CdIVdVdXfssrM',
      callbackUrl: 'http://localhost:3000/login',
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'green', type: 3, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();

    window.addEventListener('load', function () {
      naverLogin.getLoginStatus(function (status) {
        if (status) {
          let name = naverLogin.user.getName();
          let email = naverLogin.user.getEmail();
          console.log(name, email);
          if (name === undefined || name === null) {
            alert('이름은 필수 정보입니다. 정보 제공을 동의해주세요.');
            naverLogin.reprompt();
            return;
          } else {
            alert(`${name}님, 환영합니다!`);
            history.push('/');
          }
        }
      });
    });
  };

  const location = useLocation();

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
  };

  const handleNaverLogin = () => {
    if (
      document &&
      document?.querySelector('#naverIdLogin')?.firstChild &&
      window !== undefined
    ) {
      const loginBtn = document.getElementById('naverIdLogin')?.firstChild;
      loginBtn.click();
    }
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('아이디를 입력하세요.'),
      password: Yup.string().required('비밀번호를 입력하세요.'),
    }),

    onSubmit: (values) => {
      dispatch(logInDB(values));
    },
  });
  return (
    <React.Fragment>
      <Grid width="400px" margin="130px auto">
        <form name="loginForm" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            id="username"
            name="username"
            changeEvent={formik.handleChange}
            value={formik.values.username}
            placeholder="아이디"
            width="359px"
            height="39px"
            padding="0 0 0 10px"
          />
          {/* {formik.touched.username && formik.errors.username && 
        window.alert(formik.errors.username)
        } */}
          {formik.errors.username && formik.touched.username && (
            <p>{formik.errors.username}</p>
          )}

          <Input
            type="password"
            id="password"
            name="password"
            changeEvent={formik.handleChange}
            value={formik.values.password}
            placeholder="비밀번호"
            width="359px"
            height="39px"
            padding="0 0 0 10px"
            addstyle={() => {
              if (!(formik.errors.username && formik.touched.username))
                return css`
                  border-top: 0px;
                `;
            }}
          />
          {/* {formik.touched.password && formik.errors.password 
            ? window.alert(formik.errors.password)
            : null } */}
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}

          <Grid margin="4px 0 10px -10px">
            <Input type="checkbox" width="30px" />
            <span style={{ color: 'gray', fontSize: '13px' }}>
              로그인 상태 유지
            </span>
          </Grid>

          <Button
            color="white"
            bgColor="buttonColor"
            width="371px"
            addstyle={() => {
              return css`
                border-radius: 0;
              `;
            }}
          >
            로그인
          </Button>
          <Grid
            width="371px"
            addstyle={() => {
              return css`
                ${flexBox('space-between', 'space-between')}
              `;
            }}
          >
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Text size="13px">회원가입</Text>
            </Link>
            <Text size="13px">아이디 비밀번호 찾기</Text>
          </Grid>
        </form>

        <Grid
          margin="15px -15px"
          addstyle={() => {
            return css`
              ${flexHoz()}
            `;
          }}
        >
          <hr style={{ width: '155px', margin: '10px' }} />
          또는
          <hr style={{ width: '155px', margin: '10px' }} />
        </Grid>

        <Button
          width="371px"
          margin="10px 0 10px 0"
          color="white"
          clickEvent={handleNaverLogin}
          addstyle={() => {
            return css`
              background-color: #27d34a;
            `;
          }}
        >
          네이버로 시작하기
        </Button>
        <div
          id="naverIdLogin"
          style={{ position: 'absolute', top: '-10000px' }}
        />

        <Button
          width="371px"
          margin="10px 0"
          clickEvent={() => (window.location.href = KAKAO_AUTH_URL)}
          addstyle={() => {
            return css`
              background-color: yellow;
            `;
          }}
        >
          카카오로 시작하기
        </Button>

        <Grid
          margin="15px -15px"
          addstyle={() => {
            return css`
              ${flexHoz()}
            `;
          }}
        >
          <hr style={{ width: '155px', margin: '10px' }} />
          또는
          <hr style={{ width: '155px', margin: '10px' }} />
        </Grid>

        <Button margin="10px 0" width="371px" color="white" bgColor="gray">
          비회원 주문배송 조회
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

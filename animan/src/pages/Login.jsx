// LIBRARY
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logInDB } from '../redux/modules/user';


// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

// ELEMENTS
import { Button,Input,Grid, Text } from '../elements/index';


const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('아이디를 입력해주세요!!'),
      password: Yup.string().required('패스워드를 입력해주세요!'),
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
          placeholder="아이디" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
        />
        <Input 
          type="password" 
          placeholder="비밀번호" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
          addstyle={() => {
            return css`
              border-top: 0px
            `;
          }}
        />
      
        <Grid margin="4px 0 10px -10px">
        <Input type="checkbox" width="30px"/>
        <span style={{color:'gray', fontSize:'13px'}}>
          로그인 상태 유지
        </span>
        </Grid>

        <Button 
          color="white" 
          bgColor="buttonColor" 
          width="371px"
          addstyle={() => {
            return css`
              border-radius: 0
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
        <Text size="13px">회원가입</Text>
        <Text size="13px">아이디 비밀번호 찾기</Text>
        </Grid>

        <Grid
          margin="15px 0"
          addstyle={() => {
                      return css`
                        ${flexHoz()}
                      `;
                    }}>
        <hr style={{width:'155px', margin:'10px'}}/>
        또는
        <hr style={{width:'155px', margin:'10px'}}/>
        </Grid>

        <Button 
          width="371px" 
          margin="10px 0 10px 0"
          color="white"
          addstyle={() => {
                      return css`
                        background-color:#27D34A;
                      `;
                    }}
                    >
            네이버로 시작하기
        </Button>

        <Button 
          width="371px" 
          margin="10px 0"
          addstyle={() => {
                      return css`
                        background-color:yellow;
                      `;
                    }}
                    >
            카카오로 시작하기
        </Button>

        <Grid
        margin="15px 0"
        addstyle={() => {
                    return css`
                      ${flexHoz()}
                    `;
                  }}>
        <hr style={{width:'155px', margin:'10px'}}/>
        또는
        <hr style={{width:'155px', margin:'10px'}}/>
        </Grid>

        <Button 
          margin="10px 0" 
          width="371px" 
          color="white" 
          bgColor="gray"
        >
        비회원 주문배송 조회
        </Button>
        </form>

      </Grid>
    </React.Fragment>
  )
}

export default Login;
// LIBRARY
import React from 'react';
import { Avatar } from "@material-ui/core"

// ELEMENTS
import { Button,Input,Grid, Text } from '../elements/index';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

// REDUX
import { useDispatch } from 'react-redux';
import { signUpDB } from '../redux/modules/user';

// PACKAGE
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordCheck: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, '아이디는 4자리 이상이여야 합니다.')
        .required('아이디를 정확히 입력하세요'),
      password: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 입력하세요'),
      passwordCheck: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 한번 더 입력하세요')
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
      name: Yup.string()
        .min(2, '이름은 2자리 이상이여야 합니다.')
        .required('이름을 입력하세요'),
    }),
    onSubmit: (values) => {
      dispatch(signUpDB(values));
    },
  });

  return (
    <React.Fragment>
      <Grid width="400px" margin="130px auto">
        <Avatar style={{margin:'20px auto', width:'85px', height:'85px'}}></Avatar>
        <form onSubmit={formik.handleSubmit}>
        <Input 
          type="text"
          id="username"
          name="username"
          placeholder="아이디" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
          value={formik.values.username}
          changeEvent={formik.handleChange}
        />
        {formik.errors.username && formik.touched.username && (
                  <p>{formik.errors.username}</p>
                )}
        <Input 
          type="password" 
          id="password"
          name="password"
          placeholder="비밀번호" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
          value={formik.values.password}
          changeEvent={formik.handleChange}
          addstyle={() => {
            if (!(formik.errors.username && formik.touched.username))
            return css`
              border-top: 0px
            `;
          }}
        />
        {formik.errors.password && formik.touched.password && (
                  <p>{formik.errors.password}</p>
                )}
        <Input 
          type="password" 
          id="passwordCheck"
          name="passwordCheck"
          placeholder="비밀번호 확인" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
          value={formik.values.passwordCheck}
          changeEvent={formik.handleChange}
          addstyle={() => {
            if (!(formik.errors.password && formik.touched.password))
            return css`
              border-top: 0px
            `;
          }}
        />
        {formik.errors.passwordCheck && formik.touched.passwordCheck && (
                    <p>{formik.errors.passwordCheck}</p>
                  )}
        <Input
          label="이름"
          type="text" 
          id="name"
          name="name"
          placeholder="이름을 입력하세요" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
          value={formik.values.name}
          changeEvent={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
                  <p>{formik.errors.name}</p>
                )}

        <Button 
          margin="10px 0"
          color="white" 
          bgColor="buttonColor" 
          width="371px"
          addstyle={() => {
            return css`
              border-radius: 0
            `;
          }}
          >
          가입하기
        </Button>
        </form>
      </Grid>
    </React.Fragment>
  )
}

export default Register;
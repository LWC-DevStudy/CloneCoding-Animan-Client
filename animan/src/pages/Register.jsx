// LIBRARY
import React from 'react';
import { Avatar } from "@material-ui/core"

import { Button,Input,Grid, Text } from '../elements/index';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

const Register = () => {
  return (
    <React.Fragment>
      <Grid width="400px" margin="130px auto">
        <Avatar style={{margin:'20px auto', width:'85px', height:'85px'}}></Avatar>
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
        <Input 
          type="password" 
          placeholder="비밀번호 확인" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
          addstyle={() => {
            return css`
              border-top: 0px
            `;
          }}
        />

        <Input
        label="이름"
        type="password" 
          placeholder="이름을(를) 입력하세요" 
          width="359px" 
          height="39px" 
          padding="0 0 0 10px"
        />

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
      </Grid>
    </React.Fragment>
  )
}

export default Register;
// LIBRARY
import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

// ELEMENTS
import { Button, Input, Grid, Text } from '../elements/index';


const Login = () => {
  return (
    <React.Fragment>
      <Grid width="400px" margin="130px auto">
        <Link to='/register'>
        <Button 
          color="gray" 
          bgColor="white" 
          width="371px"
          addstyle={() => {
            return css`
              border-radius: 0;
              border: 1px solid lightgray;
              font-size: 12px;
            `;
          }}
          >
          ID/PW 회원가입
        </Button>
        </Link>
        

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
      </Grid>
    </React.Fragment>
  )
}

export default Login;
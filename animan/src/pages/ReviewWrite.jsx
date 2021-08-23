// LIBRARY
import React from 'react';
// STYLE
import styled, { css } from 'styled-components';
// ELEMENTS
import { Grid } from '../elements/index';
const ReviewWrite = () => {
  return (
    <React.Fragment>
      <Grid width="80%" margin="auto">
        <Grid width="95%">
          <UploadButton for="input--file">사진 업로드하기</UploadButton>
        </Grid>
        <Upload
          id="input--file"
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none' }}
        />
        <Textarea />
        <WriteButton>작성하기</WriteButton>
      </Grid>
    </React.Fragment>
  );
};

const Upload = styled.input`
  background-color: white;
  width: 100%;
  border: 2px solid white;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const UploadButton = styled.label`
  width: 120px;
  padding: 10px 10px;
  text-align: center;
  background-color: rgb(${(props) => props.theme.palette.buttonColor});
  color: white;
  cursor: pointer;
  outline: none;
  display: block;
  float: right;
  margin-bottom: 40px;
`;

const WriteButton = styled.button`
  width: 140px;
  padding: 15px 25px;
  background-color: rgb(${(props) => props.theme.palette.buttonColor});
  color: white;
  outline: none;
  border: none;
  display: block;
  margin: auto auto 100px auto;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 86%;
  height: 500px;
  padding: 21px;
  outline: none;
  display: block;
  margin: 20px auto 20px auto;
`;
export default ReviewWrite;

// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
// STYLE
import styled from 'styled-components';
// ELEMENTS
import { Grid } from '../elements/index';
// REDUX
import { addReviewDB } from '../redux/modules/review';
import { imgActions } from '../redux/modules/image';
import review from '../redux/modules/review';

const ReviewWrite = () => {
  const dispatch = useDispatch();

  const [review, setReview] = React.useState();

  const $contents = (e) => {
    setReview(e.target.value);
  };

  const writeBtn = () => {
    dispatch(addReviewDB(review));
  };

  // s3
  const handleInputFile = (e) => {
    const file = e.target.files[0];
    dispatch(imgActions.setInitialState());
    dispatch(imgActions.setFile([file]));
  };
  return (
    <React.Fragment>
      <Grid width="80%" margin="auto">
        <Grid width="95%">
          <UploadButton onChange={handleInputFile} for="input--file">
            사진 업로드하기
          </UploadButton>
        </Grid>
        <Upload
          id="input--file"
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none' }}
        />
        <Textarea onChange={$contents} />
        <WriteButton onClick={writeBtn}>작성하기</WriteButton>
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

// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid, Text, Image, Button } from '../elements/index';

// COMPONENTS
import Comment from '../components/Comment';

// REDUX
import { getOneReviewDB, deleteReviewDB } from '../redux/modules/review';

// ROUTE
import { Link } from 'react-router-dom';

const ReviewDetail = (review) => {
  const dispatch = useDispatch();
  const reviewId = review.match.params;

  const { reviewImage, reviewContent } = useSelector((state) => ({
    reviewImage: state.review.list.reviewImage,
    reviewContent: state.review.list.reviewContents,
  }));

  React.useEffect(() => {
    dispatch(getOneReviewDB(reviewId));
  }, [reviewImage]);

  const deleteReview = () => {
    dispatch(deleteReviewDB(reviewId));
  };

  return (
    <Grid width="550px" height="auto" margin="3% auto" border="solid 1px black">
      <Link to="/reviewedit">
        <Button color="white" bgColor="buttonColor" padding="8px" margin="2%">
          수정
        </Button>
      </Link>
      <Button
        color="white"
        bgColor="buttonColor"
        padding="8px"
        clickEvent={deleteReview}
      >
        삭제
      </Button>

      <Grid>
        <Image src={reviewImage} />
      </Grid>

      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Text>userID</Text>
      </Grid>

      <hr />

      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Text>{reviewContent}</Text>
      </Grid>
      <hr />
      <Comment reviewId={reviewId} />
    </Grid>
  );
};

export default ReviewDetail;

// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
// STYLE
import { css } from 'styled-components';
// ELEMENTS
import { Grid, Button } from '../elements/index';
import { flexHoz } from '../shared/style';
// COMPONENTS
import ReviewCard from '../components/ReviewCard';
// FUNCTION
import InfinityScroll from '../shared/InfinityScroll';
import {
  getMoreReviewDB,
  getReview,
  getReviewDB,
} from '../redux/modules/review';

const Review = () => {
  const dispatch = useDispatch();
  const query = window.location.search;

  const { reviewList, reviewId } = useSelector(
    (state) => ({
      reviewList: state.review.reviewList,
      reviewId: state.review.reviewId,
    }),
    shallowEqual
  );

  const getMoreReview = () => {
    dispatch(getMoreReviewDB());
  };

  useEffect(() => {
    if (!query) dispatch(getReviewDB());

    return () => {
      dispatch(getReview([], 0));
    };
  }, [reviewId]);

  return (
    <React.Fragment>
      <Grid margin="120px auto" width="1300px">
        <Grid
          margin="0 0 20px -8px"
          addstyle={() => {
            return css`
              ${flexHoz('flex-end')}
            `;
          }}
        >
          <Button
            width="200px"
            bgColor="buttonColor"
            color="white"
            clickEvent={history.push('/write')}
          >
            글 작성
          </Button>
        </Grid>
        <Grid
          addstyle={() => {
            return css`
              display: flex;
              flex-wrap: wrap;
            `;
          }}
        >
          {/* {reviewList.map((review, idx) => (
            <InfinityScroll
              next={getMoreReview}
              index={idx}
              length={reviewList.length}
              key={review.reviewId}
            >
              <ReviewCard review={review} />
            </InfinityScroll>
          ))} */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;

// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid, Text, Image, Button } from '../elements/index';

// COMPONENTS
import Comment from '../components/Comment';

// REDUX
import { getCommentDB } from '../redux/modules/comment';
import review, {
  getOneReviewDB,
  deleteReviewDB,
} from '../redux/modules/review';

const ReviewDetail = (review, comment) => {
  const dispatch = useDispatch();
  const reviewId = review.match.params;

  const { reviewImage, reviewContent } = useSelector((state) => ({
    reviewImage: state.review.list.reviewImage,
    reviewContent: state.review.list.reviewContents,
  }));

  React.useEffect(() => {
    dispatch(getOneReviewDB(reviewId));
  }, []);

  const deleteBtn = () => {
    dispatch(deleteReviewDB(reviewId));
  };

  const [contents, setContent] = React.useState();

  const commentList = useSelector((state) => state.comment);
  console.log(commentList);

  // React.useEffect(() => {
  //   dispatch(getCommentDB(reviewId));
  // }, []);

  return (
    <Grid width="550px" height="auto" margin="3% auto" border="solid 1px black">
      <Button color="white" bgColor="buttonColor" padding="8px" margin="2%">
        수정
      </Button>
      <Button color="white" bgColor="buttonColor" padding="8px">
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

      {/* {commentList.map((c, idx) => {
        return <Comment key={idx} {...c} />;
      })} */}

      {/* <Grid
        width="70px"
        margin="2% auto"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      ></Grid> */}
    </Grid>
  );
};

export default ReviewDetail;

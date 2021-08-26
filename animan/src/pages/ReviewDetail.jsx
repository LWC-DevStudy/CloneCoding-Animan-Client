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
import comment, { addCommentDB, getCommentDB } from '../redux/modules/comment';
import review, {
  getOneReviewDB,
  deleteReviewDB,
} from '../redux/modules/review';

const ReviewDetail = (review, comment) => {
  const dispatch = useDispatch();

  const { reviewImage, reviewContent } = useSelector((state) => ({
    reviewImage: state.review.list.reviewImage,
    reviewContent: state.review.list.reviewContents,
  }));
  console.log(reviewContent);
  const reviewId = review.match.params;
  React.useEffect(() => {
    dispatch(getOneReviewDB(reviewId));
  }, []);
  const deleteBtn = () => {
    dispatch(deleteReviewDB(reviewId));
  };

  const [contents, setContent] = React.useState();
  console.log(review);

  // const commentList = useSelector((state) => state.comment.list);

  // React.useEffect(() => {
  //   dispatch(getCommentDB());
  // }, []);

  // const addCommentBtn = () => {
  //   dispatch(addCommentDB(comment));
  // };

  return (
    <Grid width="550px" height="auto" margin="3% auto" border="solid 1px black">
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

      <Comment />

      {/* {commentList.map((c, idx) => {
        return <Comment key={idx} {...c} />;
      })} */}

      <Grid
        width="70px"
        margin="2% auto"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Button
          color="white"
          bgColor="buttonColor"
          padding="8px"
          // clickEvent={addCommentBtn}
        >
          댓글작성
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReviewDetail;

# Animan Clone Coding

## 🔍 프로젝트 개요

<h3>반려동물 기능성 식품 쇼핑몰 사이트 클론 코딩 - <a href="http://animan.co.kr/">Animan</a> </h3>

<hr>
<br>

## 📌 주요 기능

- 카테고리별 제품 불러오기
- 장바구니에 제품 추가, 삭제, 불러오기
- 댓글 작성, 삭제, 불러오기
- 로그인, 회원가입
- 리뷰상세 불러오기, 작성, 수정, 삭제
- 리뷰 목록 불러오기 - 무한스크롤
- AWS S3 이미지 업로드

<hr>
<br>

## 🛠 Front-End 기술스택

<p align='center'>
  
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1E.svg?&logo=JavaScript&logoColor=white" />
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-React-%2361DAFB.svg?&logo=React&logoColor=white" />
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Redux-%23764ABC.svg?&logo=Redux&logoColor=white" />
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/AWS-Amazon AWS-yellow?logo=Amazon AWS'/>
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/yarn-yellow?logo=yarn'/>
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/Axios-pink?'/>
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/ReduxToolkit-764ABC?'/>
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/StyledComponents-violet?logo=styled-components'/>
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/ReactRouter-pink?logo=React Router'/>
</p>

<hr>
<br>

## ✍🏼 배운 점 및 느낀 점

**이선민**

이번 프로젝트를 하면서 카테고리별 제품 불러오기, 댓글 기능을 맡아서 했었다. <br>
all, cookie, powder로 분류된 제품을 불러오는 작업을 해야 되는데 페이지, 컴포넌트에서 필요한 값을 가져올 때 애를 많이 먹었다. <br>
컴포넌트를 짤 때 후에 기능 구현했을 때를 생각하면서 작업을 했었으면 더 편했을 거라고 생각됐다. <br>
이제 뷰 작업을 할 때 꼭 천천히 생각해 보고 작업을 해야겠다. 댓글 기능을 구현할 때도 매우 비슷한 상황 때문에 애를 먹었다. <br>
그래도 같이 작업한 팀원분들한테 많이 배우고 헷갈렸던 부분도 덕분에 개념을 잡고 넘어갈 수 있어서 좋은 시간이었다. <br>

<hr>

**정진우**

### 장바구니 기능

- 장바구니 기능을 구현할 때 컴포넌트를 나누지 않아서 props를 받아오는 것에 어려움이 있었는데, <br>
  Cart 컴포넌트에서 CartCard라는 컴포넌트를 분리시켜서 만들었고, 문제가 잘 해결되었다. <br>
  프로젝트 구조를 짤 때 기능 구현까지 깊게 생각해보면서 짜야겠다는 생각이 들었다.

### 로그인 체크 기능<br>

![스크린샷 2021-09-02 오후 5 21 19](https://user-images.githubusercontent.com/66675699/131810105-94660512-f0c3-4f26-8e71-af9d4032f116.png)

- 저번 프로젝트에서 리렌더링될 때 유저 정보가 사라지는 현상이 있었는데 로그인 체크 기능을 만들어서 해결했다.

### 에러

- 전에 봤었던 에러들을 이번 프로젝트에서도 봤었는데 바로 해결하지 못해서 아쉬웠다. <br>
  에러를 해결하면 잊어버리지 않도록 꼭 기록해야겠다는 생각이 들었다.

<hr>

**우종혁**

## CRUD에 집중한 프로젝트

- 이번 프로젝트에서는 정말 CRUD에 집중했습니다.<br>
  이미지를 포함한 게시글을 등록,조회,수정,삭제를 구현했는데 이미지가 들어가서<br>
  다른 건 문제 없었지만 수정을 하는데 어려움을 겪었습니다!<br>
  하지만 이번 프로젝트에서 포기하지 않고 수정을 구현해서 너무 뿌듯했습니다!

## ErrorNote😱

### 리듀서를 잘못 사용했습니다.

```javascript
//리덕스 툴킷을 사용하지 않을 땐 reducer를 빼야한다.
// 수정 전
const rootReducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  comment: comment.reducer,
  image: image.reducer,
  product: product.reducer,
  review: review.reducer,
  wish: wish.reducer,
  router: connectRouter(history),
});

---------------------------------------
// 수정 후
const rootReducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  comment: comment.reducer,
  image: image,
  product: product.reducer,
  review: review.reducer,
  wish: wish.reducer,
  router: connectRouter(history),
});

```

### 이미지를 때에 따라 못 받아 오는 문제

```javascript
//------------------------수정 전-----------------------------------
const { reviewImage, reviewContent } = useSelector((state) => ({
  reviewImage: state.review.list.reviewImage,
  reviewContent: state.review.list.reviewContents,
}));

React.useEffect(() => {
  dispatch(getOneReviewDB(reviewId));
}, []);
//--------------이미지를 때에 따라 못 받아 오는 문제-----------------------
//----------------------------------------------------------------
//------------------------수정 후----------------------------------
const { reviewImage, reviewContent } = useSelector((state) => ({
  reviewImage: state.review.list.reviewImage,
  reviewContent: state.review.list.reviewContents,
}));

React.useEffect(() => {
  dispatch(getOneReviewDB(reviewId));
}, [reviewImage]);

// useEffect에서 reviewImage가 바뀔 때 리렌더링이 되게끔 해서 조치했다.
// 처음에 reviewImage를 못받아서 기본값으로만 사진이 출력되었었따.
```

<hr>
<br>

## 📌 팀원 구성

### 프론트엔드

- 이선민: https://github.com/sunm-in
- 정진우: https://github.com/happyeveryone96
- 우종혁: https://github.com/Jongveloper

### 백엔드

- 채병훈: https://github.com/timchae
- 김인섭: https://github.com/Inseobkim3053

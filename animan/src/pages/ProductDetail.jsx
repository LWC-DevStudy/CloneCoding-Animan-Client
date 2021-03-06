// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import { flexBox } from '../shared/style';
import { css } from 'styled-components';

// ELEMENTS
import { Image, Grid, Text, Button, Input } from '../elements/index';

// REDUX
import { getOneProductDB } from '../redux/modules/product';
import { addCartDB } from '../redux/modules/cart';

const ProductDetail = (product) => {
  const productList = useSelector((state) => state.product.list ? state.product.list : 1);
  const dispatch = useDispatch();
  const productId = product.match.params;

  const [content, setContent] = React.useState('택배');
  const onChangeHandler=(e)=> {
    setContent(e.currentTarget.value);
  }

  const Options = [
    {key: 1, value:'택배'},
    {key: 2, value:'방문수령'},
  ]

  const [count, setCount] = React.useState(0);
  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  let totalPrice = productList.price * count;

  const addBtn = () => {
    dispatch(addCartDB(count, totalPrice, content));
  };

  React.useEffect(() => {
    dispatch(getOneProductDB(productId.productId));
  }, []);

  if (!productList) {
    return <></>;
  }
  return (
    <Grid
      margin="0 25vw 300px"
      addstyle={() => {
        return css`
          @media screen and (max-width: 1200px) {
            margin: 0;
          }
        `;
      }}
    >
      <Text margin="0 0 0 40px">Home {productList.title}</Text>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox('column', 'column')}
          `;
        }}
      >
        <Grid width="350px" margin="30px">
          <Image
            style={{ height: '220px', width: '350px' }}
            src={productList.productImage}
          />
        </Grid>
        <Grid width="370px">
          <Text>{productList.title}</Text>
          <Text>{productList.price}원</Text>
          <Text>제조사 애니먼협력사</Text>
          <Text>
            배송비 3,000원 (50,000원 이상 무료배송) | 도서산간 배송비 추가
          </Text>
          <Text>배송 안내 제주/산간 지역 3000원 추가</Text>
          <select onChange={onChangeHandler} value={content}>
            {Options.map((item, index)=>(
              <option key={item.key} value={item.value}>{item.value}</option>
            ))}
          </select>
          <Grid
            width="440px"
            height="120px"
            addstyle={() => {
              return css`
                background-color: rgb(250, 250, 249);
              `;
            }}
          >
            <Text margin="10px 0 0 10px">수량</Text>
            <hr></hr>
            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: space-between;
                `;
              }}
            >
              <Grid margin="0 0 20px 20px">
                <Button
                  width="30px"
                  clickEvent={minusCount}
                  addstyle={() => {
                    return css`
                      border: 1px solid lightgray;
                      border-radius: 0;
                      border-right: 0;
                    `;
                  }}
                >
                  -
                </Button>
                <Input
                  type="text"
                  width="30px"
                  height="28.5px"
                  disabled
                  value={count}
                ></Input>
                <Button
                  width="30px"
                  clickEvent={plusCount}
                  addstyle={() => {
                    return css`
                      border: 1px solid lightgray;
                      border-radius: 0;
                      border-left: 0;
                    `;
                  }}
                >
                  +
                </Button>
              </Grid>
              <Text width="100px" margin="7px 0">
                {productList.price * count}원
              </Text>
            </Grid>

            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: space-between;
                `;
              }}
            >
              <Text>총 상품금액({count}개)</Text>
              <Text>{productList.price * count}원</Text>
            </Grid>
            <Grid>
              <Button
                color="white"
                margin="4px"
                width="173px"
                bgColor="buttonColor"
                addstyle={() => {
                  return css`
                    border-radius: 0;
                  `;
                }}
              >
                구매하기
              </Button>
              <Button
                margin="4px"
                width="173px"
                clickEvent={() => addBtn(productList.price * count, count)}
                addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 0;
                  `;
                }}
              >
                장바구니
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Image
        addstyle={() => {
          return css`
            @media screen and (max-width: 2500px) {
              margin: 100px 30px;
              height: 24700px;
              width: 860px;
            }
            @media screen and (max-width: 1200px) {
              margin: 100px 400px;
              height: 12350px;
              width: 430px;
            }
            @media screen and (max-width: 700px) {
              height: 6325px;
              width: 215px;
            }
          `;
        }}
        src="https://cdn.imweb.me/upload/S20201221d467afdc83348/db25f2923b1d8.jpg"
      />
    </Grid>
  );
};

export default ProductDetail;

// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

//ELEMENTS
import { Grid, Button, Input } from '../elements/index';

// REDUX
import { getCartDB } from '../redux/modules/cart';

// COMPONENTS
import CartCard from '../components/CartCard';

const Cart = (cart) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => (state.cart.carts));
  
  React.useEffect(() => {
      dispatch(getCartDB());
  }, []);
  
  return (
    <Grid margin="0 25vw" width="50vw">
      <h1 style={{ fontSize: '24px', fontWeight: '400', display: 'flex' }}>
        장바구니
        <div
          style={{
            display: 'flex',
            color: 'white',
            width: '20px',
            height: '20px',
            fontSize: '11px',
            background: 'green',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
          }}
        >
          1
        </div>
      </h1>
      <table style={{ textAlign: 'center', borderCollapse: 'collapse' }}>
        <thead style={{ fontSize: '13px', fontWeight: '100', color: 'gray' }}>
          <tr>
            <td style={{ width: '40px', borderBottom: '1px solid #ddd' }}>
              <Input type="checkbox"></Input>
            </td>
            <td
              style={{
                width: '312px',
                borderBottom: '1px solid #ddd',
                fontFamily: 'sans-serif',
              }}
            >
              item
            </td>
            <td style={{ width: '100px', borderBottom: '1px solid #ddd' }}>
              위시
            </td>
            <td style={{ width: '100px', borderBottom: '1px solid #ddd' }}>
              수량
            </td>
            <td style={{ width: '80px', borderBottom: '1px solid #ddd' }}>
              배송수단
            </td>
            <td style={{ width: '120px', borderBottom: '1px solid #ddd' }}>
              배송비
            </td>
            <td style={{ width: '130px', borderBottom: '1px solid #ddd' }}>
              가격
            </td>
            <td style={{ width: '130px', borderBottom: '1px solid #ddd' }}></td>
          </tr>
        </thead>
        <tbody style={{ fontSize: '12px' }}>
          {cartList.map((cart, idx) => (
            <CartCard key={idx} cart={cart}/>
          ))}


          <tr>
            <td style={{ textAlign: 'left' }} colSpan={5}>
              <Button
                margin="4px"
                width="100px"
                addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 40px;
                  `;
                }}
              >
                선택상품 삭제
              </Button>
              <Button
                margin="4px"
                width="100px"
                addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 40px;
                  `;
                }}
              >
                위시리스트 담기
              </Button>
            </td>
            <td>결제금액</td>
            <td style={{ fontSize: '24px' }}>price</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <Grid margin="30px 20vw">
        <Button
          margin="4px"
          width="127px"
          addstyle={() => {
            return css`
              border: 1px solid lightgray;
              border-radius: 0;
            `;
          }}
        >
          계속 쇼핑하기
        </Button>
        <Button
          width="100px"
          bgColor="buttonColor"
          color="white"
          addstyle={() => {
            return css`
              border-radius: 0;
            `;
          }}
        >
          주문하기
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cart;
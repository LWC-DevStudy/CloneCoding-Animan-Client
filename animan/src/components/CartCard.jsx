// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { useDispatch } from 'react-redux';

//ELEMENTS
import { Image, Button, Input } from '../elements/index';

// REDUX
import { deleteCartDB } from '../redux/modules/cart';

function CartCard(props) {
    const dispatch = useDispatch();
    const delBtn = () => {
        dispatch(deleteCartDB(props.cart.cartId));
      };
    return (
        <>
            <tr>
            <td style={{ borderBottom: '1px solid #ddd' }}>
              <Input type="checkbox"></Input>
            </td>
            <td style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
              <Image
                style={{ padding: '0', width: '100px', height: '100px' }}
                src={props.cart.productImage}
              />
              <div style={{ margin: '30px' }}>{props.cart.title}</div>
            </td>
            <td style={{ borderBottom: '1px solid #ddd' }}>{props.cart.isWished}하트</td>
            <td style={{ borderBottom: '1px solid #ddd' }}>{props.cart.quantity}</td>
            <td style={{ borderBottom: '1px solid #ddd' }}>{props.cart.cartPost}</td>
            <td style={{ borderBottom: '1px solid #ddd' }}>3000원</td>
            <td style={{ borderBottom: '1px solid #ddd' }}>{props.cart.price}</td>
            <td style={{ borderBottom: '1px solid #ddd' }}>
              <Button
                margin="4px"
                width="50px"
                addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 40px;
                  `;
                }}
              >
                주문
              </Button>
              <Button
                width="50px"
                clickEvent={delBtn}
                addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 40px;
                  `;
                }}
              >
                삭제
              </Button>
            </td>
          </tr>
        </>
    )
}

export default CartCard

// LIBRARY
import React from 'react';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

//ELEMENTS
import { Image, Grid, Button, Input } from '../elements/index';

const Cart = () => {
  return (
      
      <Grid margin="0 25vw">
        <h1 style={{fontSize:'24px', fontWeight:'400', display:'flex'}}>
          장바구니
          <div style={{
            display:'flex',
            color:'white',
            width:'20px',
            height:'20px', 
            fontSize:'11px', 
            background:'green', 
            textAlign:'center', 
            justifyContent:'center', 
            alignItems:'center',
            borderRadius:'20px'}}>
            1
          </div>
        </h1>
        <table style={{textAlign:'center'}}>
          <thead style={{fontSize:'13px'}}>
            <tr>
             <th style={{width:'40px',borderBottom:'1px solid black'}}><Input type="checkbox"></Input></th>
              <th style={{width:'312px',borderBottom:'1px solid black'}}>item</th>
              <th style={{width:'100px',borderBottom:'1px solid black'}}>위시</th>
              <th style={{width:'100px',borderBottom:'1px solid black'}}>수량</th>
              <th style={{width:'80px', borderBottom:'1px solid black'}}>배송수단</th>
              <th style={{width:'120px', borderBottom:'1px solid black'}}>배송비</th>
              <th style={{width:'130px', borderBottom:'1px solid black'}}>가격</th>
              <th style={{width:'130px', borderBottom:'1px solid black'}}></th>
            </tr>
          </thead>
          <tbody style={{fontSize:'12px'}}>

            <tr>
              <td style={{borderBottom:'1px solid black'}}><Input type="checkbox"></Input></td>  
              <td style={{display:'flex',borderBottom:'1px solid black'}}>
                <Image src="https://cdn.imweb.me/thumbnail/20210726/7f0166fb8e45c.png" />
                <div style={{margin:'30px'}}>titleasdasdasdasdasdasd</div>
              </td>
              <td style={{borderBottom:'1px solid black'}}>하트</td>
              <td style={{borderBottom:'1px solid black'}}>2</td>
              <td style={{borderBottom:'1px solid black'}}>택배</td>
              <td style={{borderBottom:'1px solid black'}}>3000원</td>
              <td style={{borderBottom:'1px solid black'}}>price</td>
              <td style={{borderBottom:'1px solid black'}}><Button 
                  margin="4px"
                  width="50px"
                  addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 40px;
                  `;
                }}>주문</Button>
                  <Button
                  width="50px"
                    addstyle={() => {
                    return css`
                      border: 1px solid lightgray;
                      border-radius: 40px;
                    `;
                  }}>삭제</Button>
              </td>
            </tr>

            <tr>
              <td style={{borderBottom:'1px solid black'}}><Input type="checkbox"></Input></td>  
              <td style={{display:'flex',borderBottom:'1px solid black'}}>
                <Image src="https://cdn.imweb.me/thumbnail/20210726/7f0166fb8e45c.png" />
                <div style={{margin:'30px'}}>titleasdasdasdasdasdasd</div>
              </td>
              <td style={{borderBottom:'1px solid black'}}>하트</td>
              <td style={{borderBottom:'1px solid black'}}>2</td>
              <td style={{borderBottom:'1px solid black'}}>택배</td>
              <td style={{borderBottom:'1px solid black'}}>3000원</td>
              <td style={{borderBottom:'1px solid black'}}>price</td>
              <td style={{borderBottom:'1px solid black'}}><Button 
                  margin="4px"
                  width="50px"
                  addstyle={() => {
                  return css`
                    border: 1px solid lightgray;
                    border-radius: 40px;
                  `;
                }}>주문</Button>
                  <Button
                  width="50px"
                    addstyle={() => {
                    return css`
                      border: 1px solid lightgray;
                      border-radius: 40px;
                    `;
                  }}>삭제</Button>
              </td>
            </tr>

            <tr style={{fontSize:'14px', height:'70px'}}>
              <td colSpan={5}>aasdasdas</td>  
              <td>상품가격<br/>배송비</td>
              <td>price<br/>3000원</td>
              <td>
              </td>
            </tr>

            <tr>
              <td style={{textAlign:'left'}} colSpan={5}>
                <Button
                margin="4px"
                width="100px"
                addstyle={() => {
                return css`
                  border: 1px solid lightgray;
                  border-radius: 40px;
                `;
                  }}>선택상품 삭제</Button> 
                <Button
                margin="4px"
                width="100px"
                addstyle={() => {
                return css`
                  border: 1px solid lightgray;
                  border-radius: 40px;
                `;
                }}>위시리스트 담기</Button></td>  
              <td>결제금액</td>
              <td style={{fontSize:'24px'}}>price</td>
              <td>
              </td>
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
            border-radius:0;
          `;
          }}>계속 쇼핑하기</Button> 
        <Button 
          width="100px" 
          bgColor="buttonColor" 
          color="white" 
          addstyle={() => {
            return css`
            border-radius:0;
          `;}}>주문하기</Button>
          </Grid>

      </Grid>
  )
}

export default Cart;
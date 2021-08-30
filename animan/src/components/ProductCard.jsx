// LIBRARY
import React from 'react';
import { history } from '../redux/configureStore';

//ELEMENTS
import { Image, Grid, Text } from '../elements/index';

function ProductCard(props) {
  return (
    <Grid
      width="370px"
      margin="30px"
      // clickEvent={() => {
      //   history.push(`/pdetail/${product.productId}`);
      // }}
    >
      <Image src={props.productImage} />
      <Text color="black" fontWeight="bold" style={{ textAlign: 'center' }}>
        {props.title}
      </Text>
      <Text color="black" fontWeight="bold" style={{ textAlign: 'center' }}>
        가격: {props.price}
      </Text>
    </Grid>
  );
}

export default ProductCard;

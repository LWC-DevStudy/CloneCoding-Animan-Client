// LIBRARY
import React from 'react';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

//ELEMENTS
import { Image, Grid, Text, Button } from '../elements/index';

function ProductCard() {
    return (
        <Grid width="370px" margin="30px">
            <Image src="https://cdn.imweb.me/thumbnail/20210726/af4b97e2e38d4.png" />
            <Text color="black" fontWeight="bold" style={{textAlign:'center'}}>
            title
            </Text>
            <Text color="black" fontWeight="bold" style={{textAlign:'center'}}>
            price
            </Text>
        </Grid>
    )
}

export default ProductCard

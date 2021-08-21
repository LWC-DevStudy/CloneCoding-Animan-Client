// LIBRARY
import React from 'react';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

//ELEMENTS
import { Image, Grid, Text, Button } from '../elements/index';

function ProductCard() {
    return (
        <Grid width="436px"
        >
            <Image src="https://cdn.imweb.me/thumbnail/20210723/6b5c9365db47c.png" />
            <Text color="black" fontWeight="bold">
            title
            </Text>
            <Text color="black" fontWeight="bold">
            price
            </Text>
        </Grid>
    )
}

export default ProductCard

// LIBRARY
import React from 'react';

// COMPONENTS
import ProductCard from '../components/ProductCard'

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';

//ELEMENTS
import { Image, Grid, Text, Button } from '../elements/index';

function ProductList() {
    return (
        <Grid margin="auto" width="1308px">
            <Grid
            addstyle={() => {
                return css`
                  display: flex;
                  flex-wrap: wrap;
                `;
              }}
            >
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Grid>
        </Grid>
    )
}

export default ProductList

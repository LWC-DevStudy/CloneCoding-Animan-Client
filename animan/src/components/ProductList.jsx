// LIBRARY
import React from 'react';

// COMPONENTS
import ProductCard from '../components/ProductCard'

// STYLE
import { css } from 'styled-components';

//ELEMENTS
import { Image, Grid, Text, Button } from '../elements/index';

function ProductList() {
    return (
        <Grid margin="auto" width="1320px">
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

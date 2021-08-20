//LIBRARY
import React from 'react';
//STYLE
import styled from 'styled-components';

const Image = ({ shape, src, size, ...props }) => {
  if (shape === 'circle') {
    return (
      <ImageCircle {...props} src={src} size={size} shape={shape}></ImageCircle>
    );
  }
  if (shape === 'rectangle') {
    return (
      <React.Fragment>
        <AspectOutter>
          <AspectInner
            {...props}
            src={src}
            size={size}
            shape={shape}
          ></AspectInner>
        </AspectOutter>
      </React.Fragment>
    );
  }
};
Image.defaultProps = {
  shape: 'rectangle',
  src: 'https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_1280.jpg',
  size: 36,
  addstyle: () => {},
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  size: ${(props) => props.size};
  background-size: cover;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  ${(props) => props.addstyle()};
`;

const ImageCircle = styled.div`
  size: ${(props) => props.size};
  width: size;
  height: size;
  border-radius: size;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;
export default Image;

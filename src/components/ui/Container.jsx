import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;

export default function Container({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}



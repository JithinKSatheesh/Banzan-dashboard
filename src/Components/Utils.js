import styled from 'styled-components';

export const Space = styled.div`
  width : 100%;
  height : ${props =>props.size? `${props.size}px` : `50px`};
`;

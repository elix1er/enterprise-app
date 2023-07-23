import React, { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { Center } from '../Center';
import { ImageIcon } from '../icons/ImageIcon';

interface Props {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 16px;
  background: ${({ theme }) => theme.colors.mist.toCssValue()};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const ImageIconWr = styled(Center)`
  z-index: -1;

  position: absolute;
  font-size: 20px;
  background: ${({ theme }) => theme.colors.textShy.toCssValue()};
`;

export const ImageHolder = forwardRef(function ImageHolderInner(
  { width, height, children, style }: Props,
  ref: React.Ref<HTMLDivElement> | null
) {
  return (
    <Container style={{ ...style, width, height }} ref={ref}>
      <ImageIconWr>
        <ImageIcon />
      </ImageIconWr>
      {children}
    </Container>
  );
});

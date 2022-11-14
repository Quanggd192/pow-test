import React, { MouseEventHandler } from 'react'
import styled from "styled-components";

const ButtonTag = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  cursor: pointer;
  &.active {
    background: green;
    color: #FFF;
    &:hover {
      background: #f0f0f0;
      color: #000;
    }
  };
  &.normal {
    &:hover {
      background: green;
      color: #000;
    }
  }
`

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: MouseEventHandler;
  width?: number;
  height?: number;
  style?: Object;
  testId?: string;
}

export default function Button({children, className, onClick, width, height, style, testId}: ButtonProps) {
  return (
    <ButtonTag data-testid={testId} onClick={onClick} className={className} style={{...style, width, height}}>{children}</ButtonTag>
  )
}

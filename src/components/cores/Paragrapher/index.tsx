import React from 'react'
import styled from "styled-components";

const ParagrapherWrapper = styled.div`
  padding: 50px;
`
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  padding-bottom: 30px;
`
const Desc = styled.div`

`
interface ParagrapherProps {
  title: string;
  desc: string;
}
export default function Paragrapher({ title, desc }: ParagrapherProps) {
  return (
    <ParagrapherWrapper>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </ParagrapherWrapper>
  )
}

import React from 'react';
import styled from "styled-components";

const AttWrapper = styled.div`

`
const Panel = styled.div`
font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
`
const Value = styled.div`
  
`

interface AttributeProps {
  panel: string;
  value: string;
}
export default function Attribute({panel, value}: AttributeProps) {
  return (
    <AttWrapper>
      <Panel>{panel}</Panel>
      <Value>{value}</Value>
    </AttWrapper>
  )
}


import React from 'react'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import styled from "styled-components";
const PagingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`
interface PagingProps {
  currentPage: number;
  onSwitchPage: (page: number, pageSize: number) => void;
  total: number;
  pageSize: number;
}
export default function Paging({currentPage, onSwitchPage, total, pageSize}: PagingProps) {
  return (
    <PagingWrapper>
      <Pagination pageSize={pageSize} onChange={(page) => onSwitchPage(page, pageSize)} current={currentPage} className="pagination" prevIcon="Prev" total={total} nextIcon="Next" />
    </PagingWrapper>
  )
}

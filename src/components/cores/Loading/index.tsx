import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface LoadingProps {
  loading: boolean;
  color: string
}
export default function Loading({loading, color}: LoadingProps) {
  if(!loading) return <></>
  return (
    <LoadingContainer>
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingContainer>
  )
}

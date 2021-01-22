import styled from 'styled-components'

const SpinnerFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerFlex = () => (
  <SpinnerFlexWrapper>
    <Spinner />
  </SpinnerFlexWrapper>
)

export const Spinner = ({ ...props }) => (
  <div className="spinner-grow" {...props}>
    <span className="sr-only">Loading...</span>
  </div>
)

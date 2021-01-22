import { Navbar } from './navbar'
import styled from 'styled-components'

export const ChildrenContainer = styled.div`
  margin-top: 24px;
  padding-bottom: 60px;
`

export const DefaultLayout = ({ children }) => (
  <main>
    <Navbar />
    <ChildrenContainer>{children}</ChildrenContainer>
  </main>
)

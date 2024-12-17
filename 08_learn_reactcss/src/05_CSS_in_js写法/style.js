import styled from 'styled-components'

export const AppWrapper = styled.div`
  .section {
    border: 1px solid red;

    .title {

      &:hover {
        background-color: ${props => props.color};
      }
    }
  }

  .footer {
    background: ${props => props.theme.color};
  }
`
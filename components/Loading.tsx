import * as React from 'react'
import styled from '@emotion/styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSpinner } from 'react-icons/fa'

const Loading = styled.h1`
  position: absolute;
  bottom: 0;
  right: 1em;
  color: ${props => props.theme.colors.highlight};

  svg {
    font-size: 16px;
  }
`

export default (): JSX.Element => (
  <Loading>
    <FaSpinner />
  </Loading>
)

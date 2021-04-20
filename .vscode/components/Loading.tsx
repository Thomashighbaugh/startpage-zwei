import * as React from 'react'
import styled from '@emotion/styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = styled.h1`
  position: absolute;
  bottom: 0;
  right: 1em;

  svg {
    font-size: 16px;
  }
`

export default (): JSX.Element => (
  <Loading>
    <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
  </Loading>
)

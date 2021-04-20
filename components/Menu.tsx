import * as React from 'react'
import styled from '@emotion/styled'

import { FaBars } from 'react-icons/fa'

const Menu = styled.button<{ menuOpen: boolean }>`
  position: absolute;
  top: 2em;
  right: 2em;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.9;
  }

  ${props => (props.menuOpen ? 'transform: rotate(-90deg);' : '')}
`

export default ({
  menuOpen,
  onClick,
}: {
  menuOpen: boolean
  onClick: () => void
}): JSX.Element => (
  <Menu menuOpen={menuOpen} onClick={onClick}>
    <FaBars size="64" className="fill-current text-gray-400" />
  </Menu>
)

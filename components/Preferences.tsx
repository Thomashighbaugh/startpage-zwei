
import * as React from 'react'
import styled from '@emotion/styled'
import { Changelog } from './Changelog/Changelog'



const Preferences = styled.div<{ menuOpen: boolean }>`
display: ${props => (props.menuOpen ? 'block' : 'none')};
`

export default ({ menuOpen }: { menuOpen: boolean }): JSX.Element => (
    <Preferences menuOpen={menuOpen}>
<Changelog/>

    </Preferences>
  )
  
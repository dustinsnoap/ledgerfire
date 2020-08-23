//imports
import {createGlobalStyle} from 'styled-components'
//components
import reset from './components/reset'
import fonts from './components/fonts'
import common from './components/common'

export default createGlobalStyle`
    ${reset}
    ${fonts}
    ${common}
`
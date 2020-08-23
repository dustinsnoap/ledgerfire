//imports
import {createGlobalStyle} from 'styled-components'
//components
import reset from './components/reset'
import fonts from './components/fonts'

export default createGlobalStyle`
    ${reset}
    ${fonts}
`
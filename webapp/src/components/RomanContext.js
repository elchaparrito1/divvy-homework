import { createContext } from 'react'

const RomanContext = createContext({ toggle: false, setToggle: (toggleState) => {} })

export default RomanContext

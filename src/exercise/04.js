// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle(customToggleProps) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  // 💰 {'aria-pressed': on, onClick: toggle}
  const getToggleProps = ({onClick, ...props}) => {
    const onToggleClick = () => {
      if (onClick) {
        onClick()
      }
      toggle()
    }

    return {'aria-pressed': on, onClick: onToggleClick, ...props}
  }

  return {on, toggle, getToggleProps}
}

function App() {
  const {on, getToggleProps} = useToggle()
  return (
    <div>
      <Switch {...getToggleProps({on})} />
      <hr />
      <button
        {...getToggleProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('Button clicked'),
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/

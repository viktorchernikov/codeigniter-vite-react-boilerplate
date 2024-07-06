// layouts
import HelloStack from '@layouts/HelloWorld/HelloStack'
import HelloCard from '@layouts/HelloWorld/HelloCard'
// utils
import render from '@utils/renderer'
// styles
import '@styles/global.scss'
import '@styles/HelloWorld.scss'

function HelloWorld() { 
  return (
    <>
      <HelloStack/>
      <HelloCard/>
    </>
  )
}

render(<HelloWorld/>)
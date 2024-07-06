// layouts
import RepoCard from '@layouts/Contributing/RepoCard'
import BackSuggestion from '@layouts/Contributing/BackSuggestion'
// utils
import render from '@utils/renderer'
// styles
import '@styles/global.scss'
import '@styles/Contributing.scss'

function Contributing() { 
  return (
    <>
      <RepoCard/>
      <BackSuggestion/>
    </>
  )
}

render(<Contributing/>)
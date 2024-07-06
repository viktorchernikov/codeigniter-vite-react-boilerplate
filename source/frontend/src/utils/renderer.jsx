// modules
import React from 'react'
import ReactDOM from 'react-dom/client'

function render(element) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {element}
    </React.StrictMode>,
  )
}

export default render;
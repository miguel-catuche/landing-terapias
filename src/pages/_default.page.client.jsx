import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageShell } from '../PageShell'

export { render }

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const root = document.getElementById('root')

  // Limpia renderizados anteriores
  if (!root) {
    const newRoot = document.createElement('div')
    newRoot.id = 'root'
    document.body.appendChild(newRoot)
  }

  ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from '../PageShell'

export { render }

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // Usa escapeInject de Vike (igual que antes)
  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dkmlivs50/image/upload/v1761869052/favlogo_qsd9mz.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Centro Terapéutico Integral María del Pilar Tamayo en Palmira. Servicios de fisioterapia, terapias físicas y rehabilitación avalados por el Ministerio de Salud de Colombia.">
    <meta name="keywords" content="fisioterapia, rehabilitación, terapias físicas, centro terapéutico, terapia, salud, Palmira, María del Pilar Tamayo">
    <meta property="og:title" content="Centro Terapéutico Integral María del Pilar Tamayo" />
    <meta property="og:description" content="Servicios de fisioterapia y terapias en Palmira, avalados por el Ministerio de Salud de Colombia." />
    <meta property="og:image" content="https://res.cloudinary.com/dkmlivs50/image/upload/v1761868863/logofondo_pspjwu.png" />
    <meta property="og:url" content="https://mapilarterapiapalmira.com" />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://mapilarterapiapalmira.com" />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
    <title>Centro Terapéutico Integral María del Pilar Tamayo</title>
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Centro Terapéutico Integral María del Pilar Tamayo",
        "image": "https://res.cloudinary.com/dkmlivs50/image/upload/v1761868863/logofondo_pspjwu.png",
        "url": "https://mapilarterapiapalmira.com",
        "telephone": "+57 3137169950",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cl. 34 #29-32",
          "addressLocality": "Palmira",
          "addressRegion": "Valle del Cauca",
          "addressCountry": "CO"
        },
        "openingHours": [
          "Mo-Fr 07:00-11:00",
          "Mo-Fr 14:00-18:00"
        ],
        "priceRange": "$$",
        "sameAs": [
          "https://m.facebook.com/itcpalmira/",
          "https://www.instagram.com/cterapeuticointegral",
          "https://api.whatsapp.com/send?phone=573137169950"
        ]
      }
    </script>
  </body>
</html>`
  return { documentHtml }
}

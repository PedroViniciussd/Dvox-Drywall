import './globals.css';

const siteUrl = 'https://dvoxdrywall.com.br';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Drywall em São Paulo | Forro Modular, Gesso e Reformas - D/vox Drywall',
    template: '%s | D/vox Drywall São Paulo',
  },

  description:
    'D/vox Drywall São Paulo: execução de drywall, forro modular, forro em gesso, divisórias, sancas, steel frame, reformas e acabamentos para obras residenciais, comerciais, industriais e prediais em São Paulo capital, Grande São Paulo e interior paulista.',

  keywords: [
    'drywall em São Paulo',
    'empresa de drywall SP',
    'forro modular São Paulo',
    'forro de gesso São Paulo',
    'divisórias drywall',
    'paredes de drywall',
    'sancas de gesso',
    'steel frame São Paulo',
    'reformas comerciais São Paulo',
    'acabamento em drywall',
    'drywall residencial',
    'drywall comercial',
    'drywall industrial',
    'galpões industriais',
    'obras corporativas',
  ],

  authors: [{ name: 'D/vox Drywall São Paulo' }],
  creator: 'D/vox Drywall São Paulo',
  publisher: 'D/vox Drywall São Paulo',

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon-512.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: 'D/vox Drywall São Paulo | Acabamentos que transformam',
    description:
      'Drywall, forro modular, forro em gesso, divisórias, sancas, steel frame, reformas e acabamentos para obras residenciais, comerciais, industriais e prediais em São Paulo, Grande São Paulo e interior paulista.',
    siteName: 'D/vox Drywall São Paulo',
    images: [
      {
        url: '/og-image-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'D/vox Drywall São Paulo - drywall, forro modular e acabamentos',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'D/vox Drywall São Paulo | Drywall e Acabamentos',
    description:
      'Drywall, forro modular, forro em gesso, divisórias, sancas, steel frame, reformas e acabamentos para obras residenciais, comerciais, industriais e prediais em São Paulo, Grande São Paulo e interior paulista.',
    images: ['/og-image-2026.jpg'],
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'D/vox Drywall São Paulo',
    url: 'https://dvoxdrywall.com.br',
    telephone: '+55 11 92685-1991',
    image: 'https://dvoxdrywall.com.br/og-image-2026.jpg',
    description:
      'Empresa especializada em drywall, forro modular, divisórias, sancas e reformas em São Paulo.',
    areaServed: [
      'São Paulo',
      'Grande São Paulo',
      'Interior Paulista',
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#07152b" />
        <meta name="format-detection" content="telephone=yes" />

        <link rel="manifest" href="/manifest.json" />

        <script src="https://cdn.tailwindcss.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      dvoxBlue: '#061A35',
                      dvoxBlue2: '#0A2548',
                      dvoxRed: '#D71920',
                      dvoxLight: '#F7F9FC',
                      dvoxText: '#162033'
                    },
                    boxShadow: {
                      glow: '0 24px 80px rgba(215,25,32,.18)'
                    },
                    keyframes: {
                      float: { 
                        '0%,100%': { transform: 'translateY(0)' }, 
                        '50%': { transform: 'translateY(-12px)' } 
                      },
                      reveal: { 
                        '0%': { opacity: 0, transform: 'translateY(24px)' }, 
                        '100%': { opacity: 1, transform: 'translateY(0)' } 
                      }
                    },
                    animation: {
                      float: 'float 5s ease-in-out infinite',
                      reveal: 'reveal .8s ease forwards'
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>

      <body className="bg-white text-dvoxText antialiased">
        {children}
      </body>
    </html>
  );
}
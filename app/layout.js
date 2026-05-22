import './globals.css';

const siteUrl = 'https://dvoxdrywallsp.com.br';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'D/vox Drywall São Paulo | Drywall, Gesso, Forro e Reformas',
    template: '%s | D/vox Drywall São Paulo',
  },
  description:
    'D/vox Drywall São Paulo: drywall, acabamentos, forro modular, gesso, sancas, iluminação, divisórias, reformas e projetos com alto padrão em São Paulo e região.',
  keywords: [
    'drywall em São Paulo',
    'empresa de drywall SP',
    'forro de gesso São Paulo',
    'forro modular SP',
    'paredes de drywall',
    'divisórias de drywall',
    'sancas de gesso',
    'acabamento em drywall',
    'reformas em São Paulo',
  ],
  authors: [{ name: 'D/vox Drywall São Paulo' }],
  creator: 'D/vox Drywall São Paulo',
  publisher: 'D/vox Drywall São Paulo',
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
      'Soluções profissionais em drywall, gesso, forro modular, sancas, divisórias, reformas e acabamentos em São Paulo e região.',
    siteName: 'D/vox Drywall São Paulo',
    images: [
      {
        url: '/assets/dvox-post-institucional.png',
        width: 1200,
        height: 630,
        alt: 'D/vox Drywall São Paulo - serviços de drywall e acabamentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D/vox Drywall São Paulo | Drywall e Acabamentos',
    description:
      'Drywall, gesso, forro modular, sancas, divisórias e reformas em São Paulo e região.',
    images: ['/assets/dvox-post-institucional.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#07152b" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
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
                      float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
                      reveal: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
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
      <body className="bg-white text-dvoxText antialiased">{children}</body>
    </html>
  );
}

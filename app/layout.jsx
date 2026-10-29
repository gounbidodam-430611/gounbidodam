import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: '고운비도담',
    template: '%s – 나만의 가계부'
  },
  description: '간단하고 깔끔한 가계부 앱 소개 사이트'
}

const navbar = <Navbar logo={<b>고운비도담</b>} />

const footer = (
  <Footer>© {new Date().getFullYear()} GOUNBIDODAM. All rights reserved.</Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink={null}
          feedback={{ content: null }}
          toc={{ title: '이 페이지에서' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI generated prompts"
}

function RootLayout({ children }: { children: React.ReactNode })
{
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            { children }
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
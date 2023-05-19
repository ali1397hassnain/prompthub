import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: "PromptHub",
    description: "Unleash the power of AI prompts. Create, share, and discover engaging conversations with ChatGPT. Fuel creativity, connect with like-minded users, and shape the future of AI interactions."
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
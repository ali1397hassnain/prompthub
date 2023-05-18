import Feed from "@components/Feed"

const Home = () => (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      Fuel Your Ideas with PromptHub
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> The Hub for AI-Powered Prompt Creation</span>
      </h1>
      <p className="desc text-center">
      Unleash the power of AI prompts. Create, share, and discover engaging conversations with ChatGPT. Fuel creativity, connect with like-minded users, and shape the future of AI interactions.
      </p>

      <Feed />
    </section>
  )

export default Home
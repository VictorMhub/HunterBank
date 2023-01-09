import styles from "./style"
import { Billing, Business, Button, CardDeal, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials, Clients } from "./components"

const App = () =>  (
    <div className='bg-primary w-full overflow-hidden'>
      <section className={ `${styles.paddingX} ${styles.flexCenter}`}>
        <nav className={ `${styles.boxWidth}`}>
          <Navbar />
        </nav>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
          <main className={`${styles.boxWidth}`}>
              <Hero />
          </main>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
          <section className={`${styles.boxWidth}`}>
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
          </section>
      </section>
    </div>
  )


export default App
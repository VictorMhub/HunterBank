import styles from "./style"

const App = () =>  (
    <nav className='bg-primary w-full overflow-hidden'>
      <div className={ `${styles.paddingX} ${styles.flexCenter}`}>
        <div className={ `${styles.boxWidth}`}>
          NavBar
        </div>
      </div>
    </nav>
  )


export default App
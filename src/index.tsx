import * as React from 'react'
import styles from './styles.module.css'

const API = 'https://icanhazdadjoke.com/'

const DadJokesComponent = () => {
  const [id, setId] = React.useState(null)
  const [joke, setJoke] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(API, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data)
        setId(data.id)
        setJoke(data.joke)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }, [isLoading])

  if (!isLoading) {
    return (
      <div className={styles.test} key={id}>
        {joke}
      </div>
    )
  } else {
    return <div className={styles.test}>Loading...</div>
  }
}

export default DadJokesComponent

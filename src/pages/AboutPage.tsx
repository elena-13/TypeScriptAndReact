import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return(
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt eaque ab sed vero nemo libero illo quod, mollitia facilis, aspernatur quam iste quisquam corporis expedita ea? Blanditiis, a vero!</p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}

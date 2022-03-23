import React from 'react'

function Header() {
  return (
    <>
        <style jsx>{`
            .header{
                width: 100%;
                display: grid;
                place-items: center;
                font-size: 2rem;
                font-weight: bold;
                padding: 1rem;
                background: #eaeaea;
            }

        `}</style>
        <section className='header'>Smart Tourism</section>
    </>
  )
}

export default Header
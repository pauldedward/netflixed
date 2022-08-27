import React from 'react'
import './Nav.css'

function Nav() {
    const [show, setShow] = React.useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${ show && 'nav--black' }`}>
            <div className='nav__content'>
                <img 
                className='nav__logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png' 
                alt='Netflix Logo' />
                <img
                className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Avatar' />
            </div>
        </div>
    )
}

export default Nav
// rafc type and it will create boilerplate of a component

import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './button'

const Header = (props) => {
  const location = useLocation()
  return (
    <header className='header'>
      {/* <h1 style={{color: 'red', backgroundColor:'black'}}> 
        you could type this for stylingand style is an external package or you culd go to the bottom and do as is shown*/}
      {/* <h1 style = {headingStyle}> use this and then give the stylings 
        in the const headingStyle */}
      <h1>
        {props.title}
      </h1>
      {location.pathname === '/' && <Button color='darkblue' text={props.showAdd ? 'Close' : 'Add Task'} onClick={props.onAdd} />
      }

    </header>
  )
}

Header.defaultProps = {
  title: 'Hello'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  // helps in making sure title is only a string
  // if we give a number etc as title, it will show error
}
// CSS IN JS
// const headingStyle = {
//     color: 'red', backgroundColor:'black'
// }

export default Header

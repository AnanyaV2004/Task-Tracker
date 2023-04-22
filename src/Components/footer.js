import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link to='/about' style = {{color:'darkblue'}}>About</Link>
    </footer>
  )
}

export default Footer

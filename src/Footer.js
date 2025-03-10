
const Footer = () => {
    const today=new Date();
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()} All Rights Reserved</p>   
    </footer>
  );
}

export default Footer;
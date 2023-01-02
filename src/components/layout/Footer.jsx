function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">
          Pet icons created by Freepik - Flaticon
        </a>
        <a href="https://www.freepik.com/free-vector/different-pets-concept_7970801.htm#query=pets&position=4&from_view=search&track=sph">
          Image by pikisuperstar
        </a>{" "}
        on Freepik
      </div>
    </footer>
  );
}

export default Footer;

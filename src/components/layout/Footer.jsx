function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 text-primary-content footer-center h-[200px] ">
      <div className="flex">
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">
          Pet icons created by Freepik - Flaticon
        </a>
        <a href="https://www.freepik.com/free-vector/different-pets-concept_7970801.htm#query=pets&position=4&from_view=search&track=sph">
          Image by pikisuperstar
        </a>{" "}
        on Freepik
        <a href="https://www.freepik.com/free-vector/happy-kids-getting-dog-as-gift-from-dad_12291076.htm#query=congratulations%20pets&position=24&from_view=search&track=sph">
          Image by pch.vector
        </a>{" "}
        on Freepik
      </div>
    </footer>
  );
}

export default Footer;

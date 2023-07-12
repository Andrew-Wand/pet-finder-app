function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer text-primary-content footer-center xl:h-[150px] p-5 xl:p-0">
      <div className="block p-10">
        <p className=" xl:mb-0">
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-around border">
      <div>© {currentYear} static e-commerce</div>
    </footer>
  );
};

export default Footer;

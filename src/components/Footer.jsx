import React from 'react';

const Footer = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <footer>
      <p>Idag är det: {formattedDate}</p>
      <p>Studieguide | 2024</p>
    </footer>
  );
};

export default Footer;

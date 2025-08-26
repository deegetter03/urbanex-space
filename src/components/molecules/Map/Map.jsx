const Map = () => {
  // Old CSS reused here
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="Urbanex Space Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.293292675441!2d77.1360999749508!3d28.470712691411677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f801dd26ecb%3A0x7cf8166c61fc7b32!2sUrbanex%20Space!5e0!3m2!1sen!2sin!4v1756189957812!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

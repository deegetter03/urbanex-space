import whatsappIcon from '../../../assets/whatsappIcon/WhatsApp_icon.png.webp'

export const WhatsappButton = () => {

    function handleClick() {
        const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
        const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }
  return (
    <button 
        className='fixed bottom-10 right-6 z-50'
        onClick={handleClick}
    >
        <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </button>
  );
};
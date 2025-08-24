interface ModalProps {
  setShowModal: (value: boolean) => void;
}
const activeNumbers: number[] = [1176234180, 1176234188];
//1121939002
const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    const number = activeNumbers[randomIndex];

    const waLink = `https://wa.me/541137569278?text=${encodeURIComponent(
      `Hola! Quisiera hablar con una cajera y que me creen un perfil.`
    )}`;

    window.open(waLink, "_blank");

    // Meta Pixel Lead
    if (
      typeof window !== "undefined" &&
      typeof (window as any).fbq === "function"
    ) {
      (window as any).fbq("track", "Lead");
    }

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-6 rounded-xl w-full max-w-md text-white relative mx-4 overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
          ⚠️ RECORDÁ ⚠️
        </h2>
        <p className="text-red-400 mb-6 text-center font-semibold">
          NO DAMOS FICHAS GRATIS SIN CARGA, EL BONUS ES CON TU PRIMERA CARGA.{" "}
          <br />
          ¿IGUAL QUERÉS CONTINUAR?
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleClick}
            className="font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105 text-white"
          >
            ✅ Contactar con una cajera
          </button>

          <button
            onClick={() => setShowModal(false)}
            className="text-gray-300 underline mt-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

interface ModalProps {
  name: string;
  setName: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  wantsBonus: boolean;
  setWantsBonus: (value: boolean) => void;
  setShowModal: (value: boolean) => void;
}
const activeNumbers: number[] = [1176234180, 1176234188, 1121939002];

const Modal: React.FC<ModalProps> = ({
  name,
  setName,
  amount,
  setAmount,
  wantsBonus,
  setWantsBonus,
  setShowModal,
}) => {
  const handleClick = () => {
    if (!name.trim() || !amount.trim()) {
      alert("Por favor completá tu nombre y el monto a cargar");
      return;
    }

    const randomIndex = Math.floor(Math.random() * activeNumbers.length);
    const number = activeNumbers[randomIndex];

    const waLink = `https://wa.me/54${number}?text=${encodeURIComponent(
      `Hola! Me llamo ${name.trim()} y quisiera cargar ${amount.trim()} con el bonus`
    )}`;

    window.open(waLink, "_blank");

    // Meta pixel
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
        <h2 className="text-2xl font-bold mb-2">
          ¡Ya casi estás! Solo un paso más
        </h2>
        <p className="text-gray-300 mb-4 text-sm">
          Completá tus datos y te conectamos con tu cajera personal en WhatsApp
          para recibir tu bonus.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-md text-white w-full bg-neutral-800 placeholder-gray-400"
          />
          <input
            type="number"
            placeholder="Monto a cargar"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 rounded-md text-white w-full bg-neutral-800 placeholder-gray-400"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={wantsBonus}
              onChange={() => setWantsBonus(!wantsBonus)}
              className="w-4 h-4"
            />
            QUIERO MI BONO DEL 50%
          </label>
          <button
            onClick={handleClick}
            disabled={!name.trim() || !amount.trim()}
            className={`
                font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300
                ${
                  !name.trim() || !amount.trim()
                    ? "bg-gray-500 cursor-not-allowed" // botón gris y deshabilitado
                    : "bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105 text-white"
                } 
              `}
          >
            Contactar con una cajera
          </button>
          {(!name.trim() || !amount.trim()) && (
            <div className="text-red-300 mb-1 text-sm w-full text-center">
              Completa tu nombre y monto de carga.
            </div>
          )}

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

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Popup({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('blur-background');
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('blur-background');
        if (onClose) onClose(); // Уведомляем родительский компонент
      }
    }
  }, [isOpen, isClient]);

  if (!isClient || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative text-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Добро пожаловать!</h2>
        <p className="text-gray-600">Это всплывающее окно при загрузке страницы.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setIsOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </div>,
    document.body
  );
}

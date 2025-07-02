import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="m-2 p-2 bg-gray-800 text-white rounded">
      {dark ? 'لایت مود' : 'دارک مود'}
    </button>
  );
}
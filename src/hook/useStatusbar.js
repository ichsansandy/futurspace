import { useEffect, useState } from 'react';

export default function useStatusbar() {
  const [statusInitialValue, setStatusInitialValue] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setStatusInitialValue(true);
    }

    function handleOffline() {
      setStatusInitialValue(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    statusInitialValue,
  };
}

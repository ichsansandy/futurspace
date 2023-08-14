import { useState } from 'react';

export default function useDisclosure() {
  const [initialStatus, setInitialStatus] = useState(false);

  function handleChangeInitialStatus() {
    setInitialStatus(!initialStatus);
  }

  return {
    initialStatus,
    handleChangeInitialStatus,
  };
}

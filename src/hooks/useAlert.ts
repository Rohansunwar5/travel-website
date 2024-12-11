import { useState } from 'react';

// Define the Alert type
export interface AlertType {
  show: boolean;
  text: string;
  type: 'danger' | 'success';
}

// Define the ShowAlertParams type
interface ShowAlertParams {
  text: string;
  type?: 'danger' | 'success';
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertType>({ 
    show: false, 
    text: '', 
    type: 'danger' 
  });

  const showAlert = ({ text, type = 'danger' }: ShowAlertParams) => 
    setAlert({ show: true, text, type });

  const hideAlert = () => 
    setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
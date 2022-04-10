import { useState, useEffect } from 'react';

export const useCurrentLocation = (options = {}) => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState();

  const handleSuccess = position => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    setLocation([latitude, longitude]);
  };

  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) setError('Geolocation is not supported.');

    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, []);

  const clearError = () => {
    setError(null);
  };

  return { location, error, clearError };
};

import { useEffect } from 'react';

export const useBrowserHistory = (
  name: string,
  isOpen: boolean,
  onBack?: () => void,
  onForward?: () => void,
) => {
  const handleBack = () => {
    if (window.history.state && window.history.state[name]) {
      window.history.go(-1);
    }

    if (onBack) {
      onBack();
    }
  };

  const handleForward = () => {
    if (onForward) {
      onForward();
    }
  };

  const handlePopState = (event: PopStateEvent) => {
    if (!event.state || !event.state[name]) {
      handleBack();
    } else {
      handleForward();
    }
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);

    if (isOpen && (!window.history.state || !window.history.state[name])) {
      window.history.pushState(
        {
          ...window.history.state,
          [name]: true,
        },
        '',
      );
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);

  return { handleBack, handleForward };
};

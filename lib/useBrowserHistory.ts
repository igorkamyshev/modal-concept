import { useEffect, useCallback } from 'react';

const hasHistoryIn = (target: any) => (name: string): boolean =>
  target.state && target.state[name];
const hasHistoryInWindow = hasHistoryIn(window.history);

export const useBrowserHistory = (
  name: string,
  onBack: () => void,
  onForward: () => void,
) => {
  const handleBack = useCallback(() => {
    if (hasHistoryInWindow(name)) {
      window.history.go(-1);
    }

    onBack();
  }, [onBack, name]);

  const handleForward = useCallback(() => {
    if (!hasHistoryInWindow(name)) {
      window.history.pushState(
        {
          ...window.history.state,
          [name]: true,
        },
        '',
      );
    }

    onForward();
  }, [onForward, name]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (hasHistoryIn(event)(name)) {
        handleForward();
      } else {
        handleBack();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleBack, handleForward, name]);

  return { handleBack, handleForward };
};

import { useState, useRef, useCallback } from "react";

export const MAX_LENGTHS = {
  title: 100,
  short_description: 300,
  web_description: 300,
  og_description: 300,
  web_title: 100,
  og_title: 100,
  keywords: 250,
} as const;

export type FieldName = keyof typeof MAX_LENGTHS;

export interface ToastNotification {
  id: number;
  message: string;
}

export const useMaxLengthHandler = () => {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const toastIdRef = useRef(0);

  const showToast = useCallback((fieldName: string, maxLength: number) => {
    const id = ++toastIdRef.current;
    const message = `Поле "${fieldName}" ограничено ${maxLength} символами. Текст обрезан.`;
    
    setToasts(prev => [...prev, { id, message }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const handleChange = useCallback((
    value: string,
    field: FieldName,
    setter: (value: string) => void,
    displayName: string
  ) => {
    const maxLength = MAX_LENGTHS[field];
    if (value.length > maxLength) {
      setter(value.slice(0, maxLength));
      showToast(displayName, maxLength);
    } else {
      setter(value);
    }
  }, [showToast]);

  return { toasts, handleChange };
};
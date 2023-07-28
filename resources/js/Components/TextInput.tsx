import React, { useEffect, useRef, RefObject } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  isFocused?: boolean;
}

const TextInput = React.forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }: TextInputProps,
  ref: RefObject<HTMLInputElement>
) {
  const input = ref ? ref : useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && input.current) {
      input.current.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      ref={input}
    />
  );
});

export default TextInput;
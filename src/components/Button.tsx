import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  type?: 'submit' | 'button';
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  htmlAttributes?: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button: React.FCX<Props> = ({
  children, onClick, htmlAttributes, loading = false, ...props
}) => {
  const type = props.type || htmlAttributes?.type;
  return (
    <button
      {...htmlAttributes}
      type={type === 'submit' ? 'submit' : 'button'}
      className="
        py-2 px-4 rounded-md text-sm min-w-24
        border border-gray-100 text-gray-500 hover:text-black hover:border-black
        transition
      "
      onClick={onClick}
    >
      {loading ? (
        <span>
          ...
        </span>
      ) : children}
    </button>
  );
};

export default Button;

import React, { FormHTMLAttributes } from 'react';

interface NetlifyFormProps extends FormHTMLAttributes<HTMLFormElement> {
  'data-netlify'?: boolean;
  'data-netlify-honeypot'?: string;
  netlify?: boolean;
}

const NetlifyForm: React.FC<NetlifyFormProps> = ({
  children,
  'data-netlify': dataNetlify,
  'data-netlify-honeypot': dataNetlifyHoneypot,
  netlify,
  ...props
}) => {
  return (
    <form
      {...props}
      data-netlify={dataNetlify ? true : undefined}
      data-netlify-honeypot={dataNetlifyHoneypot}
      // @ts-expect-error - netlify is a valid attribute for Netlify forms
      netlify={netlify ? 'true' : undefined}
    >
      {children}
    </form>
  );
};

export default NetlifyForm;

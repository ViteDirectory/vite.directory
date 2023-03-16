import React from "react";

type Props = React.HTMLProps<HTMLAnchorElement>;

const A = ({ href, children, className }: Props) => {
  return (
    <a
      href={href}
      target={href![0] === "#" ? "" : "_blank"}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default A;

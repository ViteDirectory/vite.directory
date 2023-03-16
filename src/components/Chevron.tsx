type Props = {
  className?: string;
};

const Chevron = ({ className }: Props) => (
  <svg className={className} width="22" height="14" viewBox="0 0 22 14" fill="none">
    <path
      d="M0.393753 11.4187L11 0.8125L21.6063 11.4187L19.8388 13.1875L11 4.3475L2.16125 13.1875L0.393753 11.4187Z"
      fill="black"
    />
  </svg>
);

export default Chevron;

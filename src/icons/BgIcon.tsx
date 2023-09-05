interface BgIconProp {
  className: string;
}
const BgIcon = ({ className }: BgIconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 530 543"
      fill="none"
      className={className}
    >
      <path
        d="M422.636 68.2809C326.59 -55.3824 215.627 16.7545 172.152 68.2809C127.949 68.2809 42.2716 92.3145 53.1859 188.449C66.8288 308.617 -19.3943 283.491 4.07146 381.81C27.5372 480.128 111.032 517.817 253.464 539.666C395.896 561.515 517.59 473.574 525.776 346.305C533.962 219.037 542.693 222.86 422.636 68.2809Z"
        fill="#5660C0"
        fill-opacity="0.3"
      />
    </svg>
  );
};

export default BgIcon;

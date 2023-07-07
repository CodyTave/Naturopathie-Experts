import { motion } from "framer-motion";
interface props {
  toggled: boolean;
}
function NavToggle({ toggled }: props) {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_17_57)">
          <motion.path
            animate={!toggled ? "open" : "closed"}
            variants={{
              closed: { d: "M24 4.00024H0V6.00024H24V4.00024Z" },
              open: {
                d: "M24 10.9998H0V12.9998H24V10.9998Z",
              },
            }}
            fill="#457938"
          />
          <path d="M24 4.00024H0V6.00024H24V4.00024Z" fill="#457938" />
          <motion.path
            animate={!toggled ? "open" : "closed"}
            variants={{
              closed: { d: "M24 4.00024H0V6.00024H24V4.00024Z" },
              open: {
                d: "M24 18H0V20H24V18Z",
              },
            }}
            fill="#457938"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_57">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default NavToggle;

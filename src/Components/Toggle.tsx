import { motion } from "framer-motion";
interface ToggleButtonProps {
  isToggled: boolean;
  handleClick: () => void;
}
function Toggle({ isToggled, handleClick }: ToggleButtonProps) {
  return (
    <motion.svg
      width="70"
      height="68"
      viewBox="0 0 167 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="cursor-pointer"
    >
      <rect width="167" height="68" rx="30" fill="#DFECDC" />
      <motion.circle
        animate={{ x: isToggled ? "60%" : "0%" }}
        transition={{ duration: 0.5 }}
        cx="33.5"
        cy="34.5"
        r="19.5"
        fill="#457938"
      />
    </motion.svg>
  );
}

export default Toggle;

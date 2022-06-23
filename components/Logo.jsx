import { CameraIcon, EyeIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="my-2 flex items-center space-x-1 my-font text-pink-700">
        <EyeIcon className="h-8 w-8 flex-shrink-0 mr-3" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400">
          Point Of View
        </span>
      </a>
    </Link>
  );
};

export default Logo;

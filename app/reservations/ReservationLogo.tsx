"use client";

import { Logo, MobileLogo } from "@/public/assets/svgs";
import { useRouter } from "next/navigation";

function ReservationsLogo() {
  const router = useRouter();

  return (
    <div>
      <Logo
        onClick={() => router.push("/")}
        className="relative mb-[70px] mt-16p cursor-pointer max-sm:hidden lg:mb-[153px]"
      />
      <MobileLogo
        onClick={() => router.push("/")}
        className="mb-[44px] mt-14 cursor-pointer sm:hidden"
      />
    </div>
  );
}

export default ReservationsLogo;

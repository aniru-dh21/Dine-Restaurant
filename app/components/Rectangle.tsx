import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const rectangle = tv({
  base: "absolute z-10 h-[320px] w-[895px] bg-[#5C6779] opacity-[7.74%] max-sm:hidden",
});

type RectangleProps = ComponentProps<"div"> & VariantProps<typeof rectangle>;

function Rectangle({ className }: RectangleProps) {
  return <div className={rectangle({ className })} />;
}

export default Rectangle;

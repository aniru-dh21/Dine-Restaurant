import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const field = tv({
  base: `flex items-center justify-between`,
});

type FieldProps = ComponentProps<"fieldset"> & VariantProps<typeof field>;

export function Field({ className, ...props }: FieldProps) {
  return <fieldset {...props} className={field({ className })} />;
}

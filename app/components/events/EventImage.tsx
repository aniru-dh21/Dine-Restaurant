import { PatternLines } from "@/public/assets/svgs";
import Image from "next/image";

type EventImageProps = { src: string };

function EventImage({ src }: EventImageProps) {
  return (
    <section className="relative z-20 hidden">
      <div>
        <PatternLines className="absolute left-[-3.6rem] top-[-1rem] max-sm:hidden md:left-[-2.5rem] md:top-[-2.5rem]" />
        <Image
          width={1080}
          height={1200}
          alt="event-image"
          src={`/assets/eventsImages/${src}-desktop@2x.jpg`}
          className="h-[400px] w-[326px] object-cover object-top shadow-3xl sm:h-[360px] sm:w-[573px] md:h-[600px] md:w-[400px] xl:w-[540px]"
        />
      </div>
    </section>
  );
}

export default EventImage;

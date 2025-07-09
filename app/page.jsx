import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="conatainer mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center lg:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Fasil sebsibe </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I execl at crafting elegant digital expriences and I am Proficient
              various programming language and tecnology
            </p>
            {/* buttons and social links */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                varient="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">socials</div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}

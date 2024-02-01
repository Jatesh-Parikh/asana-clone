import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <section className="flex flex-col p-10 md:p-40 md:py-20 bg-[#E5E4E2]">
      <div className="flex flex-col pb-10 space-y-6 md:px-20">
        <div className="text-xl">Get started easily</div>
        <div className="text-4xl">Prioritize Revenue-Driving Work</div>
        <div className="text-xl">
          Connect what needs to get done, who is responsible, and how to get it
          done
        </div>
      </div>

      <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0">
        <div className="flex flex-col justify-between bg-white rounded-sm p-8">
          <Image
            src={"/images/tab-1.webp"}
            alt="illustration"
            className="w-96"
            width={500}
            height={500}
          />
          <div>
            <div className="text-2xl pt-8">Start with a template</div>
            <div className="flex justify-between pt-10">
              <div className="text-xl">View Templates</div>
              <ArrowRight className="w-6 h-6 ml-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-sm p-8">
          <Image
            src={"/images/tab-2.webp"}
            alt="illustration"
            className="w-96"
            width={500}
            height={500}
          />
          <div>
            <div className="text-2xl pt-8">See Bird in Action</div>
            <div className="flex justify-between pt-10">
              <div className="text-xl">View Templates</div>
              <ArrowRight className="w-6 h-6 ml-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-sm p-8">
          <Image
            src={"/images/tab-4.webp"}
            alt="illustration"
            className="w-96"
            width={500}
            height={500}
          />
          <div>
            <div className="text-2xl pt-8">Talk to our Sales Team</div>
            <div className="flex justify-between pt-10">
              <div className="text-xl">View Templates</div>
              <ArrowRight className="w-6 h-6 ml-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;

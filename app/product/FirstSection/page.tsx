import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="md:flex md:space-x-20 py-20 space-y-10 items-center justify-center">
      <div className="space-y-10 flex flex-col md:w-1/3 px-10 ">
        <div className="text-3xl md:text-6xl ">
          The #1 software in product and project management
        </div>
        <div className="text-xl md:text-2xl">
          Bird connects company-wide goals to the work needed to achieve
          them—across teams and functions.
        </div>

        <div className="flex space-x-4">
          <div className="bg-black p-4 text-white text-xl rounded-md">
            Get Started
          </div>

          <div className="border p-4 text-xl rounded-md">View Demo</div>
        </div>
      </div>

      <Image
        src="/images/tab-6.webp"
        alt="Image"
        width={700}
        height={700}
        className="px-10"
      />
    </section>
  );
};

export default FirstSection;

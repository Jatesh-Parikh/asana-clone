import Image from "next/image";

const FifthSection = () => {
  return (
    <section className="py-20 px-10">
      <div className="text-4xl text-center pb-10 md:pb-0">
        The best platform for cross-team work
      </div>
      <div className="md:flex items-center pb-20 md:pb-0 space-y-20 justify-center">
        <div className="flex flex-col justify-around gap-10 md:w-1/2">
          <div className="text-3xl">
            Quickly connect complex work across teams
          </div>
          <div className="text-2xl">
            Get more work done across teams with unlimited monthly actions, the
            ability to track hundreds of projects in one place, and by reporting
            against your entire organization.
          </div>
          <div className=" p-6 border w-40 rounded-xl text-xl">Get started</div>
        </div>
        <div className="bg-gradient-to-r from-gray-400 to-gray-100 flex items-center justify-center rounded-md p-6">
          <Image
            src="/images/tab-3.webp"
            width={530}
            height={500}
            alt="logo"
            className="rounded-md w-80 h-60 md:w-96 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;

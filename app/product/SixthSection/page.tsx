import Image from "next/image";

const SixthSection = () => {
  return (
    <section className="py-20 md:space-y-20 md:space-x-20 items-center justify-center flex flex-col">
      <div className="text-4xl text-center">
        80% of Fortune 500 companies use Bird
      </div>
      <div className="md:flex md:space-x-10 items-center justify-center">
        <div className="border-b md:border-r md:border-b-0 md:w-60 md:pr-5">
          <Image
            src="/images/logo/logo-6.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
        <div className="border-b md:border-r md:border-b-0 md:w-60 md:pr-5">
          <Image
            src="/images/logo/logo-8.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
        <div className="border-b md:border-r md:border-b-0 md:w-60 md:pr-5">
          <Image
            src="/images/logo/logo-5.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
        <div className="border-b md:border-r md:border-b-0 md:w-60 md:pr-5">
          <Image
            src="/images/logo/logo-9.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
      </div>
    </section>
  );
};

export default SixthSection;

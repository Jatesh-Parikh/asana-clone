import Image from "next/image";

const SeventhSection = () => {
  return (
    <section className="py-20 space-y-20 items-center justify-center flex flex-col bg-[#E5E4E2]">
      <div className="text-4xl md:w-3/5 text-center">
        Robust features to achieve any business objective as your company grows
      </div>

      <div className="md:w-[1200px] space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-96 space-y-4 flex">
          <Image
            src="/images/icons/gears.png"
            width={300}
            height={300}
            alt="logo"
            className="h-20 w-20 self-center"
          />

          <div className="text-xl font-semibold self-center">
            Drive cross-team efficiency
          </div>
          <div className="ml-6 space-y-4">
            <div className="text-md">
              • Connect teams and automate work to improve productivity.
            </div>
            <div className="text-md">
              • Gain clarity on bottlenecks and allocate work with Workload
            </div>
            <div className="text-md">
              • Manage resourcing for teams with messaging, comments, and unique
              views
            </div>
          </div>
        </div>
        <div className="flex-col w-96 space-y-4 flex">
          <Image
            src="/images/icons/puzzle.png"
            width={300}
            height={300}
            alt="logo"
            className="h-20 w-20 self-center"
          />
          <div className="text-xl font-semibold self-center">
            Automate processes
          </div>
          <div className="ml-2 space-y-4">
            <div className="text-md">
              • Systemize intakes with Workflow Builder and Forms
            </div>
            <div className="text-md">
              • Reduce manual work with custom Rules like assigning tasks and
              updating statuses
            </div>
            <div className="text-md">
              • Automate work in one place with 200+ integrations
            </div>
          </div>
        </div>
        <div className="flex-col w-96 space-y-4 flex">
          <Image
            src="/images/icons/refresh-2.png"
            width={500}
            height={500}
            alt="logo"
            className="h-20 w-20 self-center"
          />
          <div className="text-xl font-semibold self-center">
            Get real-time insights
          </div>
          <div className="ml-6 space-y-4">
            <div className="text-md">
              • Monitor progress across teams, without manual work
            </div>
            <div className="text-md">
              • Build personalized visualizations with Custom Fields and Charts
            </div>
            <div className="text-md">
              • Save time on creating reports with a robust Charts template
              library
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[1200px] space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-96 space-y-4 flex">
          <Image
            src="/images/icons/lock.png"
            width={300}
            height={300}
            alt="logo"
            className="h-20 w-20 self-center"
          />
          <div className="text-xl font-semibold self-center">
            Protect sensitive data
          </div>
          <div className="ml-6 space-y-4">
            <div className="text-md">
              • Connect teams and automate work to improve productivity.
            </div>
            <div className="text-md">
              • Gain clarity on bottlenecks and allocate work with Workload
            </div>
            <div className="text-md">
              • Manage resourcing for teams with messaging, comments, and unique
              views
            </div>
          </div>
        </div>
        <div className="flex-col w-96 space-y-4 flex">
          <Image
            src="/images/icons/contacts.png"
            width={300}
            height={300}
            alt="logo"
            className="h-20 w-20 self-center"
          />
          <div className="text-xl font-semibold self-center">
            Manage permissions and settings
          </div>
          <div className="ml-2 space-y-4">
            <div className="text-md">
              • Control permissions, privacy settings, security requirements and
              more from a centralized admin console
            </div>
            <div className="text-md">
              • Reduce manual work with custom Rules like assigning tasks and
              updating statuses
            </div>
          </div>
        </div>
        <div className="flex-col w-96 space-y-4 flex">
          <Image
            src="/images/icons/menu.png"
            width={500}
            height={500}
            alt="logo"
            className="h-20 w-20 self-center"
          />
          <div className="text-xl font-semibold self-center">
            Set goals and drive alignment
          </div>
          <div className="ml-6 space-y-4">
            <div className="text-md">
              • Align your organization and inspire ownership with Goals
            </div>
            <div className="text-md">
              • Track all of your team&apos;s projects in a single view with
              Portfolios
            </div>
            <div className="text-md">
              • Save time on creating reports with a robust Charts template
              library
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;

export default function Projects() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-y-auto">
      <h1 className="text-[32px] px-4">New York High Rise / Task</h1>
      {/* -- create Architectural Concept --  */}
      <div className="w-full rounded-xl bg-white p-8 flex flex-col gap-4">
        {/* -- Project Title and buttons --  */}
        <div className="flex justify-between text-[28px] font-bold">
          <h1>Create Architectural Concepts</h1>
          <div className="flex gap-4 text-[18px] items-center font-normal">
            <button className="px-8 p-2 h-fit border-2 border-black bg-black rounded-3xl text-white">
              Edit Task
            </button>
            <button className="h-fit px-8 p-2 border-2 border-black rounded-3xl">
              End Task
            </button>
          </div>
        </div>
        {/* -- columns section-- */}
        <div className="flex gap-16 w-full ">
          <div className="flex flex-col w-[40%] gap-4 text-[20px] font-bold text-nowrap">
            <h1 className="flex gap-4 items-center">
              Assigned to:{" "}
              <span className="text-[18px] font-normal text-brand-link underline">
                Brain Jenek
              </span>
            </h1>
            <h1 className="flex gap-4 items-center">
              Assigned by:{" "}
              <span className="text-[18px] font-normal text-brand-link underline">
                Suzette Goldstein
              </span>
            </h1>
            <h1 className="flex gap-4 items-center">
              Due Date:{" "}
              <span className="text-[18px] font-normal ">09/19/2023</span>
            </h1>
            <h1 className="flex gap-4 items-center">
              Project:{" "}
              <span className="text-[18px] font-normal ">
                New Yourk High Rise
              </span>
            </h1>
            <h1 className="flex gap-4 items-center">
              Status:{" "}
              <span className="text-[16px] font-normal bg-brnad-green-light border-2 border-brand-green-dark px-4 rounded-3xl">
                In Progress
              </span>
            </h1>
            <h1 className="flex gap-4 items-center">
              Priority:{" "}
              <span className="text-[16px] font-normal bg-brand-red-light border-2 border-brand-red-dark px-4 rounded-3xl">
                High
              </span>
            </h1>
            <h1 className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              2
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[20px] font-bold">Description:</h1>
            <p className="text-[18px] font-regular">
              Conduct extensive research to gather inspiration from various
              sources. This research can include studying historical precedents,
              exploring architectural trends, and seeking innovative design
              solutions. Based on the information gathered from the client, site
              analysis, and research, senior architects begin the process of
              developing a design concept. This is the foundational idea that
              will guide the entire project. The concept should align with the
              client&aposs objectives, site conditions, and the firm's design
              philosophy.
            </p>
          </div>
        </div>
      </div>
      {/* -- document section -- */}
      <div className="w-full bg-white p-8 flex flex-col gap-4 rounded-xl">
        <h1>Documents:</h1>
      </div>
    </div>
  );
}

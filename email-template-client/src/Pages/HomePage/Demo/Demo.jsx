const Demo = () => {
  return (
    <div className="mx-[12%] py-[1%] ">
      <div className="flex flex-col items-center my-[4%] gap-y-4">
        <span className="font-bold text-3xl bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Some of our Templates
        </span>
        <span className="w-[60%] h-[3px] bg-gradient-to-r from-orange-600 via-transparent to-orange-600"></span>
      </div>

      {/* Dynamic container with reserved height */}
      <div>
        {demoTemplate.map((template) => (
          <div key={template.id}>
            <img
              src={template.image}
              alt={template.name}
              className="w-[200px] md:w-[300px] shadow-lg rounded-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;

const demoTemplate = [
  {
    id: 1,
    image:
      "https://s3-alpha.figma.com/hub/file/4927480915/3835a38d-4275-43de-9694-577ff819411c-cover.png",
    name: "Creative Template",
  },
  {
    id: 2,
    image:
      "https://mailbakery.s3.amazonaws.com/wp-content/uploads/2017/05/14074042/mb-free-email-templates-preview.jpg",
    name: "Business Template",
  },
  {
    id: 3,
    image:
      "https://designmodo.com/wp-content/uploads/2024/01/email-template.jpg",
    name: "Minimalist Template",
  },
  {
    id: 4,
    image:
      "https://i2.wp.com/www.theme-junkie.com/wp-content/uploads/figma-email-template.jpeg",
    name: "Modern Template",
  },
];

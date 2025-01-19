import { Link } from "react-router";
const TemplatePage = () => {
  return (
    <div className="mx-[12%] my-[2%]">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {templates?.map((template, idx) => (
          <div key={idx}>
            <Link to={`/edit/template/${template.id}`}>
              <img
                src={template.image}
                alt={template.name}
                className="w-[250px] rounded-md mx-auto mb-5"
              />
              <p className="text-xl font-bold text-center">{template.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatePage;

const templates = [
  {
    id: 1,
    name: "Minimalist Template",
    image:
      "https://i.ibb.co.com/ZLWhQc4/Screenshot-2025-01-19-at-13-01-50-etsymil-Mail-Builder-Customize-Content-Dashboard-by-Viola-Dwi-for.png",
    section: [
      {
        id: 1,
        type: "logo",
        url: "/",
        classes: "w-[100px] rounded-full mx-auto",
      },
      {
        id: 2,
        type: "title",
        content: "Edit you Title for the Email",
        classes: "text-4xl font-bold text-center",
      },
      {
        id: 3,
        type: "content",
        content: "Event details here...",
        classes: "text-base text-left",
      },
      {
        id: 5,
        type: "button",
        content: "Your Button",
        url: "/",
        classes: "bg-green-500 text-white font-bold py-2 px-5  rounded",
      },
      { id: 6, type: "divider", content: "", classes: "border-t my-4" },
      { id: 4, type: "image", url: "", classes: "w-full my-4" },
      {
        id: 7,
        type: "content",
        content: "Additional information here.",
        classes: "text-base text-left",
      },
      {
        id: 8,
        type: "footer",
        content: "Contact us at contact@example.com",
        classes: "text-sm text-center mt-4",
      },
      {
        id: 9,
        type: "social",
        links: [
          { platform: "facebook", url: "https://facebook.com" },
          { platform: "twitter", url: "https://twitter.com" },
          { platform: "instagram", url: "https://instagram.com" },
        ],
        classes: "flex justify-center mt-4 space-x-4",
      },
    ],
  },
  {
    id: 2,
    name: "Blog Template",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-email-template-colorlib-8.jpg",
    section: [],
  },
  {
    id: 3,
    name: "Wedding Template",
    image:
      "https://cdn.dribbble.com/userupload/16340444/file/original-1c7accb2ebd50c180c20ed06e39cf3bb.png?resize=1600x1200&vertical=center",
    section: [],
  },
];

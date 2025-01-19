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
    layout: [],
  },
  {
    id: 2,
    name: "Blog Template",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-email-template-colorlib-8.jpg",
    layout: [],
  },
  {
    id: 3,
    name: "Wedding Template",
    image:
      "https://cdn.dribbble.com/userupload/16340444/file/original-1c7accb2ebd50c180c20ed06e39cf3bb.png?resize=1600x1200&vertical=center",
    layout: [],
  },
];

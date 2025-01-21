import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
const TemplatePage = () => {
  const { data: templates } = useQuery({
    querykey: "templates",
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/api/get/templates");
      return response.json();
    },
  });
  console.log(templates);
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

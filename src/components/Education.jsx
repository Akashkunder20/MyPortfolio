import React from "react";

function Education() {
  const data = [
    {
      title: "MSc in Computer Science",
      subtitle: "Currently Pursuing",
      year: "2024 - Present",
    },
    {
      title: "BCA - MGM College, Udupi",
      subtitle: "CGPA: 8.4",
      year: "2021 - 2024",
    },
    {
      title: "2nd PUC - Shamili PU College",
      subtitle: "87%",
      year: "2019 - 2021",
    },
  ];

  return (
    <>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-500/30 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50"></div>

              {/* Card */}
              <div className="w-full md:w-5/12">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg 
                                hover:scale-105 hover:shadow-blue-500/20 transition duration-300">

                  <p className="text-sm text-blue-400 mb-2">{item.year}</p>

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">{item.subtitle}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
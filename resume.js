let resume = {
  //nested ojects
  personal_details: {
    name: "Rahamadullah",
    age: 28,
    qualification: "BE Mech",
    email: "rahamadullah@gmail.com",
    phoneNo: +916369141946,
  },
  technical_skills: {
    programming_languages_known: "Java, JavaScript",
    web_technologies: "HTML, CSS",
  },
  education: {
    B_E: {
      specialization: "Mechanical Engineering",
      Aggregate: 80.7,
    },
    HSC: {
      specialization: "CS",
      Aggregate: 87.25,
    },
    SSLC: {
      specialization: "General",
      Aggregate: 92.8,
    },
  },
};
//to print B.E details in Education .
console.log(resume.education.B_E);

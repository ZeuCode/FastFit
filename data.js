module.exports = function () {
  var data = {
    clients: [
      {
        id: 1,
        userName: "Ricardo14",
        password: "holaMundo",
        names: "Cesar Ricardo",
        lastNames: "Rodriguez Ccorahua",
        emailAddress: "ricardito12hola@gmail.com",
        phoneNumber: "976238462",
        age: 23,
        UserStatus_id: 1,
        Gender_id: 1,
      },
      {
        id: 2,
        userName: "Miguelaso",
        password: "adiosMiguel",
        names: "Miguel Angel",
        lastNames: "Huaman Sosa",
        emailAddress: "miguelito15as@gmail.com",
        phoneNumber: "956336482",
        age: 25,
        UserStatus_id: 1,
        Gender_id: 1,
      },
      {
        id: 3,
        userName: "Marcos15",
        password: "messi23fw",
        names: "Marcos Alonso",
        lastNames: "Salinas Cotrina",
        emailAddress: "mymessi10best@gmail.com",
        phoneNumber: "994233461",
        age: 33,
        UserStatus_id: 1,
        Gender_id: 1,
      },
      {
        id: 4,
        userName: "princesa12",
        password: "rockstarforever",
        names: "Angela Jimena",
        lastNames: "Valenzuela Hoyos",
        emailAddress: "siemprehappy15@gmail.com",
        phoneNumber: "956438361",
        age: 20,
        UserStatus_id: 1,
        Gender_id: 2,
      },
    ],
    reviews:[
      {
        id:1,
        content:"excelente servicio",
        date:"2023-04-10",
        likes:4,
        Client_id: 2,
        Psychologist_id:3,
      },
      {
        id:2,
        content:"trato muy agradable",
        date:"2022-07-22",
        likes:3,
        Client_id: 4,
        Psychologist_id:2,
      },
      {
        id:3,
        content:"muy recomendado",
        date:"2022-02-18",
        likes:5,
        Client_id: 4,
        Psychologist_id:1,
      }
    ]
  };
  return data;
};

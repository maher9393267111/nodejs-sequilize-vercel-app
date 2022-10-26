import Sequelize from "sequelize";
const option = {
  host: "mysql-93288-0.cloudclusters.net",
  //"sql11.freesqldatabase.com",
  dialect: "mysql",
  port: 10016,
//   pool: {
//     max: 30,
//     min: 0,
//   },
};

const databaseName = "myFIRST";
const databaseUsername = "admin";
const databasePassword = "xC8D2L3M";

const sequelize = new Sequelize(
  databaseName,
  databaseUsername,
  databasePassword,
  option
);
try {
  await sequelize.authenticate();
  console.log("connection successful");
} catch (error) {
  console.log(error , 'ERROR TO CONNECT TO DATABASE');
}

// // }
export default sequelize;

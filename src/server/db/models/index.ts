import Positions from "./positions";
import Users from "./users";
import Companys from "./companys";
import Brands from "./brands";
import Categorys from "./categorys";
import Products from "./products";
import Images from "./images";
import Orders from "./orders";
import Ratings from "./ratings";
import Policies from "./policies";
import Serevices from "./services";
import Filters from "./filters";
import ResultOrders from "./resultorders";
import Recruitments from "./recruitments";
import JobPositions from "./jobpositions";

Positions.hasMany(Users, { foreignKey: "idPosition" });
Users.belongsTo(Positions, { foreignKey: "idPosition" });
Companys.hasMany(Brands, { foreignKey: "idCompany" });
Brands.belongsTo(Companys, { foreignKey: "idCompany" });
Categorys.hasMany(Products, { foreignKey: "idCate" });

Products.belongsTo(Categorys, { foreignKey: "idCate" });
Products.hasMany(Images, { foreignKey: "idProduct" });
Products.hasMany(Ratings, { foreignKey: "idProduct" });
Products.hasMany(Filters, { foreignKey: "idProduct" });
Products.hasMany(ResultOrders, { foreignKey: "idProduct" });

Orders.hasMany(ResultOrders, { foreignKey: "idOrder" });

Images.belongsTo(Products, { foreignKey: "idProduct" });
Ratings.belongsTo(Products, { foreignKey: "idProduct" });
Filters.belongsTo(Products, { foreignKey: "idProduct" });
ResultOrders.belongsTo(Products, { foreignKey: "idProduct" });
ResultOrders.belongsTo(Orders, { foreignKey: "idOrder" });
Recruitments.hasMany(JobPositions, { foreignKey: "idRecruitment" });
JobPositions.belongsTo(Recruitments, { foreignKey: "idRecruitment" });

export {
  Positions,
  Users,
  Companys,
  Brands,
  Categorys,
  Products,
  Images,
  Orders,
  Ratings,
  Policies,
  Serevices,
  Filters,
  ResultOrders,
  Recruitments,
  JobPositions
}
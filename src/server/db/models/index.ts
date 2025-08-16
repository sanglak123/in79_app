import Positions from "./positions";
import Users from "./users";
import Companys from "./companys";
import Brands from "./brands";

Positions.hasMany(Users, { foreignKey: "idPosition" });
Users.belongsTo(Positions, { foreignKey: "idPosition" });
Companys.hasMany(Brands, { foreignKey: "idCompany" });
Brands.belongsTo(Companys, { foreignKey: "idCompany" });

export {
  Positions,
  Users,
  Companys,
  Brands
}
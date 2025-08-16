import Positions from "./positions";
import Users from "./users";

Positions.hasMany(Users, { foreignKey: "idPosition" });
Users.belongsTo(Positions, { foreignKey: "idPosition" });

export {
  Positions,
  Users
}
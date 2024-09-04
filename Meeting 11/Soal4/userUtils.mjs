// Soal 4 GDrive
function getUser(nama) {
  return `User: ${nama}`;
}

var userRole = "admin";
function getUserRole (userRole) {
  return `Role: ${userRole}`;
}

export default getUser
export { userRole, getUserRole }
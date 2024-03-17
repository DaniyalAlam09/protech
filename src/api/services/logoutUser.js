
export const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("loggedInUserPermission");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userRole");
    window.location.replace("/");

}
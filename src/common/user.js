const userInfo = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default userInfo;
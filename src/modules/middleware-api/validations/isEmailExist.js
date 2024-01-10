const isEmailExist = (data, email) => {
    return data.some((element) => {
        return element.email === email;
    });
};

export default isEmailExist;

import axios from "axios";

const github = axios.create({
    baseURL:"https://api.github.com/users",
    timeout:2500   // it will fetch upto 25 sec if get then show data otherwise show error
});

export {github};
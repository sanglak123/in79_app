import { root_axios } from "../config";

const api_auth = {
    SignIn: async (user: { username: string, password: string }) => {
        await root_axios({
            method: "post",
            url: "/auth/sign-in",
            data: user
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
};

export default api_auth;
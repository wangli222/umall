import axios from "axios"

//注册
export let reqRegister = (user) => {
    return axios({
        // 请求的路径，请求方式，数据
        url: "/api/register",
        method: "POST",
        // data: {
        //   phone: "",
        //   nickname: "",
        //   password: "",
        // },
        data: user,
    })
}
//登录
export let reqLogin = (user) => {
    return axios.post("/api/login", user)
}

//获取列表

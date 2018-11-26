import { message } from "antd";

/**
 *
 * @param {*} url
 * @param {*} data
 * @param {string} method
 */
function ajax(url: string, data: any, method: "GET" | "POST" | "PUT" | "DELETE") {
    const promise = new Promise((resolve, reject) => {
        let params = "";
        for (const p in data) {
            if (data.hasOwnProperty(p)) {
                params += `${p}=${data[p]}&`;
            }
        }
        params = params.substr(0, params.length - 1);
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            credentials: "include",
            body: "",
        };
        switch (method.toUpperCase()) {
            case "GET":
            case "DELETE": {
                url = url + "?" + params;
                break;
            }
            case "POST":
            case "PUT": {
                options.body = params;
                break;
            }
            default:
                break;
        }

        fetch(url, options).then((res) => {
            try {
                if (!res.ok) {
                    // 请求失败
                    res.json().then((resultData) => {
                        if (resultData.reason && resultData.reason.indexOf("UnLoginError") > -1) {
                            window.location.href = "/login";
                        }
                        reject(resultData.message);
                    });
                    return;
                }
                res.text().then((resultData) => {
                    resolve(resultData);
                });
            } catch (e) {
                reject("无法解析的返回值");
            }
        }).catch((msg) => {
            reject(msg);
        });
    });
    promise.catch((msg) => {
        message.error(msg);
    });
    return promise;
}

export function get(url: string, data: any) {
    return ajax(url, data, "GET");
}

export function post(url: string, data: any) {
    return ajax(url, data, "POST");
}

export function del(url: string, data: any) {
    return ajax(url, data, "DELETE");
}

export function put(url: string, data: any) {
    return ajax(url, data, "PUT");
}

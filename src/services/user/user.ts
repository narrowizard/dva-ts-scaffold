import { getUser, postUser, delUser, putUser, getAuth, postAuth, delAuth, putAuth } from "../common/proxy";

const pagesize = 10;

/**
 * 获取用户列表
 * @param {number} page 页码
 * @param {string} search 搜索内容
 */
export function getUserList(page: number, search: string) {
    return getUser("/user/list", {
        page: page,
        pagesize: pagesize,
        search: search
    });
}

/**
 * 获取用户详细信息
 * @param {number} id 用户编号
 */
export function getUserInfo(id: number) {
    return getUser("/user/info", {
        id: id
    })
}

/**
 * 创建新用户
 * @param {string} account 帐号 
 * @param {string} password 密码
 */
export function createUser(account: string, password: string, menus: []) {
    return postUser("/user/new", {
        account: account,
        password: password,
        menus: menus
    });
}

/**
 * 删除用户
 * @param {number} userid 用户编号
 */
export function deleteUser(userid: number) {
    return delUser("/user/delete", {
        userid: userid
    });
}

/**
 * 更新用户数据
 * @param {number} userid 用户编号
 * @param {number} status 用户状态
 */
export function updateUserStatus(userid: number, status: number) {
    return putUser("/user/update", {
        userid: userid,
        status: status
    })
}

/**
 * 更新用户的菜单信息
 * @param {number} userid 用户编号
 * @param {string} menus json字符串,int数组
 */
export function updateUserModules(userid: number, modules: string) {
    return putUser("/user/update", {
        userid: userid,
        menus: modules
    })
}

/**
 * 登录接口
 * @param {string} account 用户名
 * @param {string} password 密码
 */
export function login(account: string, password: string) {
    return postAuth("/user/login", {
        account: account,
        password: password
    })
}

export function logout() {
    return delAuth("/user/logout");
}

/**
 * 获取登录状态
 */
export function isLogin() {
    return getAuth("/user/islogin");
}

/**
 * 修改密码
 * @param {string} oldpwd 旧密码
 * @param {string} newpwd 新密码
 */
export function updatePassword(oldpwd: string, newpwd: string) {
    return putAuth("/user/updatepassword", {
        oldpwd: oldpwd,
        newpwd: newpwd
    })
}

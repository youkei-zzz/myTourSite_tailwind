import { ResPage, User,Testimony, ResultData } from "@/api/interface/index";
import http from "@/api";

/**
 * @name 用户模块
 */
// 获取用户评论列表
export const getUserTestimony = () => {
  return http.get<Testimony.homeTestimony>('/testimony');
};

// // 获取树形用户列表
// export const getUserTreeList = (params: User.ReqUserParams) => {
//   return http.post<ResPage<User.ResUserList>>(prefix + `/user/tree/list`, params);
// };

// // 新增用户
// export const addUser = (params: { id: string }) => {
//   return http.post(prefix + `/user/add`, params);
// };

// // 批量添加用户
// export const BatchAddUser = (params: FormData) => {
//   return http.post(prefix + `/user/import`, params);
// };

// // 编辑用户
// export const editUser = (params: { id: string }) => {
//   return http.post(prefix + `/user/edit`, params);
// };

// // 删除用户
// export const deleteUser = (params: { id: string[] }) => {
//   return http.post(prefix + `/user/delete`, params);
// };

// // 切换用户状态
// export const changeUserStatus = (params: { id: string; status: number }) => {
//   return http.post(prefix + `/user/change`, params);
// };

// // 重置用户密码
// export const resetUserPassWord = (params: { id: string }) => {
//   return http.post(prefix + `/user/rest_password`, params);
// };

// // 导出用户数据
// export const exportUserInfo = (params: User.ReqUserParams) => {
//   return http.download(prefix + `/user/export`, params);
// };

// // 获取用户状态字典
// export const getUserStatus = () => {
//   return http.get<User.ResStatus[]>(prefix + `/user/status`);
// };

// // 获取用户性别字典
// export const getUserGender = () => {
//   return http.get<User.ResGender[]>(prefix + `/user/gender`);
// };

// // 获取用户部门列表
// export const getUserDepartment = () => {
//   return http.get<User.ResDepartment[]>(prefix + `/user/department`);
// };

// // 获取用户角色字典
// export const getUserRole = () => {
//   return http.get<User.ResRole[]>(prefix + `/user/role`);
// };

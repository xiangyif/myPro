// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/role/add */
export async function saveUsingPOST21(body: API.RoleSaveDTO, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/role/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/role/delete */
export async function deleteUsingDELETE18(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE18Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/role/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/role/edit */
export async function editUsingPUT18(body: API.RoleSaveDTO, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/role/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询员工的角色 查询员工的角色 GET /storeApp/role/findRoleIdByEmployeeId */
export async function findRoleIdByEmployeeIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findRoleIdByEmployeeIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListString_>('/storeApp/role/findRoleIdByEmployeeId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询可用角色列表 GET /storeApp/role/list */
export async function listUsingGET5(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListSysRoleVo_>('/storeApp/role/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/role/page */
export async function pageUsingGET15(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET15Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageSysRoleVo_>('/storeApp/role/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询角色拥有的资源id GET /storeApp/role/resourceList */
export async function findResourceListByRoleIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findResourceListByRoleIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoSysRoleAuthorityDTO_>('/storeApp/role/resourceList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户分配角色 POST /storeApp/role/saveRoleUser */
export async function saveRoleUserUsingPOST(
  body: API.SysUserRoleDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/role/saveRoleUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色分配用户 POST /storeApp/role/saveUserRole */
export async function saveUserRoleUsingPOST(
  body: API.SysUserRoleDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/role/saveUserRole', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/role/updateOrderById */
export async function updateOrderByIdUsingPUT14(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/role/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/role/updateStatusById */
export async function updateStatusByIdUsingPUT14(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/role/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

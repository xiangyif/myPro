// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/employee/add */
export async function saveUsingPOST5(body: API.EmployeeDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/employee/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/employee/delete */
export async function deleteUsingDELETE6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE6Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取员工详情 GET /storeApp/employee/detail */
export async function detailUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoEmployeeDetailVo_>('/storeApp/employee/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/employee/edit */
export async function editUsingPUT5(body: API.EmployeeDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改登陆手机号 PUT /storeApp/employee/editLoginMobile */
export async function editLoginMobileUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editLoginMobileUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/editLoginMobile', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取下拉列表 GET /storeApp/employee/employeeNameList */
export async function employeeNameListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.employeeNameListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListEmployeeNameVo_>('/storeApp/employee/employeeNameList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前登录用户详情 GET /storeApp/employee/getDetailByToken */
export async function getDetailByTokenUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoEmployeeDetailVo_>('/storeApp/employee/getDetailByToken', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取员工基础信息列表 GET /storeApp/employee/getEmployeeBase */
export async function getEmployeeBaseUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListEmployeeBaseVo_>('/storeApp/employee/getEmployeeBase', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/employee/page */
export async function pageUsingGET5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET5Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageEmployeeVo_>('/storeApp/employee/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取已删除员工列表 GET /storeApp/employee/pageDeleteEmployee */
export async function pageDeleteEmployeeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageDeleteEmployeeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageEmployeeVo_>('/storeApp/employee/pageDeleteEmployee', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取已删除员工列表 GET /storeApp/employee/recoverDeleteEmployee */
export async function recoverDeleteEmployeeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recoverDeleteEmployeeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/recoverDeleteEmployee', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询员工工资统计 GET /storeApp/employee/salaryRecord */
export async function salaryRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.salaryRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoSalaryRecordVo_>('/storeApp/employee/salaryRecord', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 结算工资 GET /storeApp/employee/settleSalary */
export async function settleSalaryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.settleSalaryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/settleSalary', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/employee/updateOrderById */
export async function updateOrderByIdUsingPUT4(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/employee/updateStatusById */
export async function updateStatusByIdUsingPUT4(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/employee/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/member/add */
export async function saveUsingPOST10(body: API.MemberDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/member/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证手机号是否存在 POST /storeApp/member/checkMobile */
export async function checkMobileUsingPOST(
  body: API.CheckMobileDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCheckMobileVo_>('/storeApp/member/checkMobile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/member/delete */
export async function deleteUsingDELETE11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE11Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/member/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取会员详情 GET /storeApp/member/detail */
export async function detailUsingGET5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET5Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMemberDetailVo_>('/storeApp/member/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/member/edit */
export async function editUsingPUT11(body: API.MemberDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/member/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** es查询列表 GET /storeApp/member/esPage */
export async function esPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.esPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageMemberDoc_>('/storeApp/member/esPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询会员列表(app) GET /storeApp/member/esPageNew */
export async function esPageNewUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.esPageNewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageMemberDoc_>('/storeApp/member/esPageNew', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有会员手机号 GET /storeApp/member/getAllMemberMobile */
export async function getAllMemberMobileUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListString_>('/storeApp/member/getAllMemberMobile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取会员信息(短信营销) GET /storeApp/member/getMemberForSms */
export async function getMemberForSmsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMemberForSmsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageMemberForSmsVo_>('/storeApp/member/getMemberForSms', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据文件url获取手机号码列表 GET /storeApp/member/getMobileByUrl */
export async function getMobileByUrlUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMobileByUrlUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListString_>('/storeApp/member/getMobileByUrl', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取会员卡信息 GET /storeApp/member/getMoneyMealDoc */
export async function getMoneyMealDocUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoneyMealDocUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMoneyMealDocVo_>('/storeApp/member/getMoneyMealDoc', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/member/page */
export async function pageUsingGET9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET9Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageMemberVo_>('/storeApp/member/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/member/updateOrderById */
export async function updateOrderByIdUsingPUT8(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/member/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改头像 PUT /storeApp/member/updateProfile */
export async function updateProfileUsingPUT(
  body: API.UpdateProfileDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/member/updateProfile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/member/updateStatusById */
export async function updateStatusByIdUsingPUT8(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/member/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/* eslint-disable */
// @ts-ignore
import { request } from 'umi';

/** 获取短信验证码 POST /storeApp/loginApi/getMobileCode */
export async function getMobileCodeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMobileCodeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoString_>('/storeApp/loginApi/getMobileCode', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 手机验证码登录接口 POST /storeApp/loginApi/loginByCode */
export async function loginByCodeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginByCodeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/loginApi/loginByCode', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 账号密码登录接口 POST /storeApp/loginApi/loginByPassWord */
export async function loginByPassWordUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginByPassWordUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/loginApi/loginByPassWord', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 手机注册接口 POST /storeApp/loginApi/register */
export async function registerUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.registerUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/loginApi/register', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改密码 PUT /storeApp/loginApi/updatePassword */
export async function updatePasswordUsingPUT(
  body: API.UpdatePasswordDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/loginApi/updatePassword', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

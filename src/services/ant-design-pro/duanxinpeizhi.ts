// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取短信配置 GET /storeApp/message/configDetail */
export async function configDetailUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMessageConfigVo_>('/storeApp/message/configDetail', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改短信配置 PUT /storeApp/message/configEdit */
export async function configEditUsingPUT(
  body: API.MessageConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/message/configEdit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改短信模板 PUT /storeApp/message/templateEdit */
export async function templateEditUsingPUT(
  body: API.MessageTemplateDto[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/message/templateEdit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取短信模板列表 GET /storeApp/message/templateList */
export async function templateListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListMessageTemplateVo_>('/storeApp/message/templateList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 恢复默认模板 PUT /storeApp/message/templateSetDefault */
export async function templateSetDefaultUsingPUT(
  body: API.SetDefaultDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/message/templateSetDefault', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

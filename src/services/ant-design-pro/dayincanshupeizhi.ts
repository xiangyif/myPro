// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取打印参数列表 GET /storeApp/printConfig/list */
export async function listUsingGET2(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListPrintConfigVo_>('/storeApp/printConfig/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 保存打印参数 POST /storeApp/printConfig/save */
export async function saveUsingPOST16(body: API.PrintConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/printConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

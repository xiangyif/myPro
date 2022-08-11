// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取短信账户详情 GET /storeApp/msgoperation/getMsgAccountDetail */
export async function getMsgAccountDetailUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMsgAccountDetail_>(
    '/storeApp/msgoperation/getMsgAccountDetail',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取短信账户变更记录 GET /storeApp/msgoperation/getMsgAccountRecords */
export async function getMsgAccountRecordsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgAccountRecordsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMsgAccountRecordVo_>(
    '/storeApp/msgoperation/getMsgAccountRecords',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取短信账户变更记录 GET /storeApp/msgoperation/getMsgSendDetail */
export async function getMsgSendDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgSendDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMsgSendDetail_>('/storeApp/msgoperation/getMsgSendDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 短信群发 POST /storeApp/msgoperation/massTexting */
export async function massTextingUsingPOST(
  body: API.MassTextingDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/msgoperation/massTexting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

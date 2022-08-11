// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取会员余额明细 GET /storeApp/extend/accountBalanceRecord */
export async function accountBalanceRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.accountBalanceRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoAccountBalanceRecordVo_>(
    '/storeApp/extend/accountBalanceRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取会员扩展信息 GET /storeApp/extend/detail */
export async function detailUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoExtendVo_>('/storeApp/extend/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询账户明细 GET /storeApp/extend/getAccountChangeRecord */
export async function getAccountChangeRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAccountChangeRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageAccountChangeRecordVo_>(
    '/storeApp/extend/getAccountChangeRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取当前门店积分余额 GET /storeApp/extend/getIntegralBalance */
export async function getIntegralBalanceUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoIntegralBalanceVo_>('/storeApp/extend/getIntegralBalance', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询积分变更明细 GET /storeApp/extend/integralChangeRecord */
export async function integralChangeRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.integralChangeRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageIntegralChangeRecordVo_>(
    '/storeApp/extend/integralChangeRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 保存会员扩展信息(新增/修改) POST /storeApp/extend/save */
export async function saveUsingPOST6(body: API.ExtendSaveDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/extend/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调整会员积分 PUT /storeApp/extend/updateIntegral */
export async function updateIntegralUsingPUT(
  body: API.UpdateIntegralDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/extend/updateIntegral', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

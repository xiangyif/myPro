// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取详情 GET /storeApp/projectConfig/detail */
export async function detailUsingGET11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET11Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoProjectConfigVo_>('/storeApp/projectConfig/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取项目提成/业绩配置 GET /storeApp/projectConfig/list */
export async function listUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListProjectConfigVo_>('/storeApp/projectConfig/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 计算业绩提成 POST /storeApp/projectConfig/performanceCommission */
export async function performanceCommissionUsingPOST(
  body: API.QueryProjectPerformanceCommissionDto[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPerformanceCommissionVo_>(
    '/storeApp/projectConfig/performanceCommission',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 保存项目提成/业绩配置 POST /storeApp/projectConfig/save */
export async function saveUsingPOST18(
  body: API.ProjectConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/projectConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /storeApp/rechargeConfig/detail */
export async function detailUsingGET12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET12Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoRechargeConfigVo_>('/storeApp/rechargeConfig/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取开卡充值提成/业绩配置 GET /storeApp/rechargeConfig/list */
export async function listUsingGET4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET4Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListRechargeConfigVo_>('/storeApp/rechargeConfig/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 计算业绩提成 POST /storeApp/rechargeConfig/performanceCommission */
export async function performanceCommissionUsingPOST1(
  body: API.QueryRechargePerformanceCommissionDto[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPerformanceCommissionVo_>(
    '/storeApp/rechargeConfig/performanceCommission',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 保存开卡充值提成/业绩配置 POST /storeApp/rechargeConfig/save */
export async function saveUsingPOST19(
  body: API.RechargeConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/rechargeConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /storeApp/saleConfig/detail */
export async function detailUsingGET13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET13Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoSaleConfigVo_>('/storeApp/saleConfig/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取次卡销售提成/业绩配置 GET /storeApp/saleConfig/list */
export async function listUsingGET6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET6Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListSaleConfigVo_>('/storeApp/saleConfig/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 计算业绩提成 POST /storeApp/saleConfig/performanceCommission */
export async function performanceCommissionUsingPOST2(
  body: API.QuerySalePerformanceCommissionDto[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPerformanceCommissionVo_>(
    '/storeApp/saleConfig/performanceCommission',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 保存次卡销售提成/业绩配置 POST /storeApp/saleConfig/save */
export async function saveUsingPOST24(body: API.SaleConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/saleConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

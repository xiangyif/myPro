// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询员工业务分析 GET /storeApp/orderEmployeeCommission/businessAnalyse */
export async function businessAnalyseUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.businessAnalyseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageBusinessAnalyseVo_>(
    '/storeApp/orderEmployeeCommission/businessAnalyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询员工业务分析趋势图 GET /storeApp/orderEmployeeCommission/businessAnalyseTrend */
export async function businessAnalyseTrendUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.businessAnalyseTrendUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListBusinessAnalyseTrendVo_>(
    '/storeApp/orderEmployeeCommission/businessAnalyseTrend',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询员工提成汇总 GET /storeApp/orderEmployeeCommission/commissionSummary */
export async function commissionSummaryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.commissionSummaryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCommissionSummaryVo_>(
    '/storeApp/orderEmployeeCommission/commissionSummary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询个人业绩提成汇总 GET /storeApp/orderEmployeeCommission/commissionTypeSummary */
export async function commissionTypeSummaryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.commissionTypeSummaryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCommissionTypeSummaryVo_>(
    '/storeApp/orderEmployeeCommission/commissionTypeSummary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询员工提成明细-次卡销售 GET /storeApp/orderEmployeeCommission/countMealSaleRecord */
export async function countMealSaleRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.countMealSaleRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCountMealSaleRecordVo_>(
    '/storeApp/orderEmployeeCommission/countMealSaleRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询员工提成明细-开卡充值 GET /storeApp/orderEmployeeCommission/openRechargeRecord */
export async function openRechargeRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.openRechargeRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOpenRechargeRecordVo_>(
    '/storeApp/orderEmployeeCommission/openRechargeRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询项目分析 GET /storeApp/orderEmployeeCommission/projectAnalyse */
export async function projectAnalyseUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectAnalyseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoProjectAnalyseVo_>(
    '/storeApp/orderEmployeeCommission/projectAnalyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询项目分析趋势图 GET /storeApp/orderEmployeeCommission/projectAnalyseTrend */
export async function projectAnalyseTrendUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectAnalyseTrendUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListProjectAnalyseTrendVo_>(
    '/storeApp/orderEmployeeCommission/projectAnalyseTrend',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询员工提成明细-服务/产品 GET /storeApp/orderEmployeeCommission/projectSaleRecord */
export async function projectSaleRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectSaleRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoProjectSaleRecordVo_>(
    '/storeApp/orderEmployeeCommission/projectSaleRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询员工提成明细-还款 GET /storeApp/orderEmployeeCommission/reimbursementRecord */
export async function reimbursementRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.reimbursementRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoReimbursementRecordVo_>(
    '/storeApp/orderEmployeeCommission/reimbursementRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

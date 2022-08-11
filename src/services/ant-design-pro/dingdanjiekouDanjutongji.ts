// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 前台报表_顾客充值明细表 POST /storeApp/statistics/chargeOrderStatistics */
export async function chargeOrderStatisticsUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderStatisticsDetailVoOrderStatisticsChargeExtension_>(
    '/storeApp/statistics/chargeOrderStatistics',
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

/** 前台报表_顾客消费汇总表 POST /storeApp/statistics/consumeSummary */
export async function consumeSummaryUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoConsumeSummaryInfo_>('/storeApp/statistics/consumeSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 前台报表_次卡销售明细表 POST /storeApp/statistics/countMealOrderStatistics */
export async function countMealOrderStatisticsUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderStatisticsDetailVoOrderStatisticsCountMealExtension_>(
    '/storeApp/statistics/countMealOrderStatistics',
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

/** 首页统计 POST /storeApp/statistics/homePage */
export async function homePageUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoHomePageVo_>('/storeApp/statistics/homePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 营收分析_营收汇总 POST /storeApp/statistics/paymentSummary */
export async function paymentSummaryUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderStatisticsPaymentStatistics_>(
    '/storeApp/statistics/paymentSummary',
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

/** 营收分析_营收利润 POST /storeApp/statistics/profitSummary */
export async function profitSummaryUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.profitSummaryUsingPOSTParams & {
    // header
    /** store_id */
    store_id?: number;
  },
  body: API.OrderStatisticProfitDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListOrderStatisticProfitVo_>(
    '/storeApp/statistics/profitSummary',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...params },
      data: body,
      ...(options || {}),
    },
  );
}

/** 前台报表_顾客消费明细表 POST /storeApp/statistics/projectOrderStatistics */
export async function projectOrderStatisticsUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderStatisticsDetailVoOrderStatisticsProjectExtension_>(
    '/storeApp/statistics/projectOrderStatistics',
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

/** 营收分析_营收趋势 POST /storeApp/statistics/takingTrend */
export async function takingTrendUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderStatisticsTakingTrend_>(
    '/storeApp/statistics/takingTrend',
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

// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 次卡套餐_购买列表 POST /storeApp/orderBills/buyCountMealList */
export async function buyCountMealListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionCountMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionCountMealBuyItemVo_>(
    '/storeApp/orderBills/buyCountMealList',
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

/** 次卡套餐_购买详情 GET /storeApp/orderBills/buyCountMealListDetail */
export async function buyCountMealListDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buyCountMealListDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoListExtensionCountMealDetailVo_>(
    '/storeApp/orderBills/buyCountMealListDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 金额套餐_购买详情 GET /storeApp/orderBills/buyMoneyMealDetail */
export async function buyMoneyMealDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buyMoneyMealDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoExtensionMoneyMealDetailVo_>(
    '/storeApp/orderBills/buyMoneyMealDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 金额套餐_购买列表 POST /storeApp/orderBills/buyMoneyMealList */
export async function buyMoneyMealListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionMoneyMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionMoneyMealCreateListVo_>(
    '/storeApp/orderBills/buyMoneyMealList',
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

/** 会员_消费记录列表  POST /storeApp/orderBills/consumptionRecords */
export async function consumptionRecordsUsingPOST(
  body: API.MemberRecordsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderDetailCommonDocDelayExtensionRecordsQueryVo_>(
    '/storeApp/orderBills/consumptionRecords',
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

/** 项目_购买/退货详情 GET /storeApp/orderBills/costDetail */
export async function detailUsingGET9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET9Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoListExtensionProjectItemDetailVo_>(
    '/storeApp/orderBills/costDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 项目_购买列表 POST /storeApp/orderBills/costList */
export async function getOrderListUsingPOST(
  body: API.OrderCommonQueryDtoObject_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionProjectItemVo_>(
    '/storeApp/orderBills/costList',
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

/** 次卡消费明细 POST /storeApp/orderBills/countMealCostList */
export async function countMealCostListUsingPOST(
  body: API.OrderStatisticsQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderStatisticsItemsVoExtensionCountMealStatistics_>(
    '/storeApp/orderBills/countMealCostList',
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

/** 次卡套餐_延期列表 POST /storeApp/orderBills/countMealDelayList */
export async function countMealDelayListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionCountMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionCountMealDelayVo_>(
    '/storeApp/orderBills/countMealDelayList',
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

/** 次卡套餐_退卡详情 GET /storeApp/orderBills/countMealReimburseDetail */
export async function countMealReimburseDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.countMealReimburseDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoListExtensionCountMealDetailVo_>(
    '/storeApp/orderBills/countMealReimburseDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 次卡套餐_退卡列表 POST /storeApp/orderBills/countMealReimburseList */
export async function countMealReimburseListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionCountMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionCountMealBuyItemVo_>(
    '/storeApp/orderBills/countMealReimburseList',
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

/** 优惠券_赠送详情 GET /storeApp/orderBills/couponGivingDetail */
export async function couponGivingDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.couponGivingDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoListExtensionCouponDetailVo_>(
    '/storeApp/orderBills/couponGivingDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 优惠券_赠送列表 POST /storeApp/orderBills/couponGivingList */
export async function couponGivingListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionCouponQueryDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionCouponHivingVo_>(
    '/storeApp/orderBills/couponGivingList',
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

/** 会员_积分兑换详情 POST /storeApp/orderBills/giftExchangeDetail */
export async function giftExchangeDetailUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.giftExchangeDetailUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoExtensionGiftExchangeVo_>(
    '/storeApp/orderBills/giftExchangeDetail',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 会员_积分兑换列表 POST /storeApp/orderBills/giftExchangeList */
export async function giftExchangeListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionGiftExchangeQueryDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionGiftItemVo_>(
    '/storeApp/orderBills/giftExchangeList',
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

/** 收支单据列表 POST /storeApp/orderBills/incomeExpensesList */
export async function incomeExpensesListUsingPOST(
  body: API.OrderCommonQueryDtoCreateExtensionIncomeExpense_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionIncomeExpenseVo_>(
    '/storeApp/orderBills/incomeExpensesList',
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

/** 金额套餐_退卡列表 POST /storeApp/orderBills/moneyMealCancellation */
export async function moneyMealCancellationUsingPOST(
  body: API.OrderCommonQueryDtoExtensionMoneyMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionMoneyMealCreateListVo_>(
    '/storeApp/orderBills/moneyMealCancellation',
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

/** 会员_还款列表 POST /storeApp/orderBills/moneyMealReimbursementList */
export async function moneyMealReimbursementListUsingPOST(
  body: API.OrderCommonQueryDtoExtensionMoneyMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionMemberReimbursementItemVo_>(
    '/storeApp/orderBills/moneyMealReimbursementList',
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

/** 金额套餐_充值详情 POST /storeApp/orderBills/moneyMealTopUpDetail */
export async function moneyMealTopUpDetailUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.moneyMealTopUpDetailUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailCommonVoObject_>(
    '/storeApp/orderBills/moneyMealTopUpDetail',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 金额套餐_充值列表 POST /storeApp/orderBills/moneyMealTopUpList */
export async function moneyMealTopUpListUsingPOST(
  body: API.OrderCommonQueryDtoCreateExtensionTopUpListQueryDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionMoneyMealCreateListVo_>(
    '/storeApp/orderBills/moneyMealTopUpList',
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

/** 金额套餐_取款列表   POST /storeApp/orderBills/moneyMealWithdraw */
export async function moneyMealWithdrawUsingPOST(
  body: API.OrderCommonQueryDtoExtensionMoneyMealDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionMoneyMealCreateListVo_>(
    '/storeApp/orderBills/moneyMealWithdraw',
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

/** 挂单_详情 GET /storeApp/orderBills/pending/detail */
export async function pendingOrderDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pendingOrderDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCreateOrderDto_>('/storeApp/orderBills/pending/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 挂单_列表 POST /storeApp/orderBills/pending/list */
export async function pendingOrderListUsingPOST(
  body: API.OrderCommonQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPendingInfos_>('/storeApp/orderBills/pending/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目_退货列表 POST /storeApp/orderBills/salesReturnList */
export async function salesReturnListUsingPOST(
  body: API.OrderCommonQueryDtoObject_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderListCommonVoExtensionProjectItemVo_>(
    '/storeApp/orderBills/salesReturnList',
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

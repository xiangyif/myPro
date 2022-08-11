// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 次卡套餐_购买 POST /storeApp/orderOperation/buyCountMeal */
export async function buyCountMealUsingPOST(
  body: API.CreateOrderMealDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/buyCountMeal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 金额套餐_购买 POST /storeApp/orderOperation/buyMoneyMeal */
export async function buyMoneyMealUsingPOST(
  body: API.CreateOrderMealDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/buyMoneyMeal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 金额套餐_注销 POST /storeApp/orderOperation/cancellation */
export async function cancellationUsingPOST(
  body: API.OrderCommonCreateDtoCreateExtensionCancellation_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/cancellation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 金额套餐_充值  POST /storeApp/orderOperation/chargeMoneyMeal */
export async function chargeMoneyMealUsingPOST(
  body: API.OrderCommonCreateDtoCreateExtensionTopUp_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>(
    '/storeApp/orderOperation/chargeMoneyMeal',
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

/** 次卡套餐_延期 POST /storeApp/orderOperation/countMealDelay */
export async function countMealDelayUsingPOST(
  body: API.OrderCommonCreateDtoExtensionCountMealDelay_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/countMealDelay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 次卡套餐_退项目 POST /storeApp/orderOperation/countMealReimburse */
export async function countMealReimburseUsingPOST(
  body: API.OrderCommonCreateDtoExtensionCountMealReimburse_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>(
    '/storeApp/orderOperation/countMealReimburse',
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

/** 会员_积分兑换 POST /storeApp/orderOperation/giftExchange */
export async function giftExchangeUsingPOST(
  body: API.OrderCommonCreateDtoExtensionGiftExchangeDto_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/giftExchange', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 会员_还款 POST /storeApp/orderOperation/reimbursement */
export async function reimbursementUsingPOST(
  body: API.OrderCommonCreateDtoCreateExtensionReimbursement_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/reimbursement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 次卡套餐_结算  POST /storeApp/orderOperation/settleCountMeal */
export async function settleCountMealUsingPOST(
  body: API.SettleOrderMealDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailOperationCountMealVo_>(
    '/storeApp/orderOperation/settleCountMeal',
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

/** 金额套餐_取款 POST /storeApp/orderOperation/withdrawMoney */
export async function withdrawMoneyUsingPOST(
  body: API.OrderCommonCreateDtoCreateExtensionWithdraw_,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/withdrawMoney', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

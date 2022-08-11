// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 操作_审核订单 POST /storeApp/orderOperation/audit */
export async function auditUsingPOST(
  body: API.OrderCreateAuditDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/audit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 操作_作废订单 POST /storeApp/orderOperation/cancel */
export async function cancelUsingPOST(body: API.OrderCancelDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListOrderCancelVo_>('/storeApp/orderOperation/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 计算订单 POST /storeApp/orderOperation/compute */
export async function computeOrderOperationUsingPOST(
  body: API.OrderDetailOperationServiceDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailOperationVo_>('/storeApp/orderOperation/compute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建_消费订单_同步 POST /storeApp/orderOperation/create */
export async function createOrderUsingPOST(
  body: API.CreateOrderDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建_消费订单_异步/同步 POST /storeApp/orderOperation/createAutoPay */
export async function createAutoPayUsingPOST(
  body: API.CreateOrderDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/createAutoPay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建_消费订单_异步 POST /storeApp/orderOperation/createSync */
export async function createSyncUsingPOST(
  body: API.CreateOrderDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/createSync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 操作_修改提成 POST /storeApp/orderOperation/editCommission */
export async function editCommissionUsingPOST(
  body: API.EditCommissionDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoObject_>('/storeApp/orderOperation/editCommission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 操作_修改订单 POST /storeApp/orderOperation/editOrder */
export async function editOrderUsingPOST(body: API.EditOrderDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/editOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取_收支单据支付方式  POST /storeApp/orderOperation/getExpendPaymentInfo */
export async function getExpendPaymentInfoUsingPOST(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListPaymentMethodVo_>(
    '/storeApp/orderOperation/getExpendPaymentInfo',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 获取_支付方式 POST /storeApp/orderOperation/getPaymentInfo */
export async function createOrderUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListPaymentMethodVo_>(
    '/storeApp/orderOperation/getPaymentInfo',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 创建_收支单据 POST /storeApp/orderOperation/incomeExpenses */
export async function createIncomeExpensesUsingPOST(
  body: API.CreateInComeExpendDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/incomeExpenses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建_挂单 POST /storeApp/orderOperation/pending/add */
export async function pendingOrderUsingPOST(
  body: API.CreateOrderDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/pending/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除_挂单 DELETE /storeApp/orderOperation/pending/delete */
export async function deletePendingUsingDELETE(
  body: API.PendingDeleteDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/pending/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取_房间列表 POST /storeApp/orderOperation/pending/roomlist */
export async function getRoomListUsingPOST(
  body: API.PendingRoomDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPendingCategory_>(
    '/storeApp/orderOperation/pending/roomlist',
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

/** 操作_发送短信  GET /storeApp/orderOperation/processMessage */
export async function processMessageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.processMessageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/processMessage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询_订单状态 POST /storeApp/orderOperation/queryOrderResult */
export async function queryOrderResultUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryOrderResultUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoAsyncVo_>('/storeApp/orderOperation/queryOrderResult', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建_退货订单 POST /storeApp/orderOperation/salesReturn */
export async function salesReturnUsingPOST(
  body: API.CreateOrderDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/orderOperation/salesReturn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取_结算订单 POST /storeApp/orderOperation/settle */
export async function settleOrderOperationUsingPOST(
  body: API.OrderDetailOperationServiceDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoOrderDetailOperationVo_>('/storeApp/orderOperation/settle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

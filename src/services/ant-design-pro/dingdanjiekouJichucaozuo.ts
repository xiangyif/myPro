// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询订单基础信息列表  POST /storeApp/order/baseInfos */
export async function baseInfosListUsingPOST(
  body: API.OrderBaseInfosDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageOrderBaseInfosVo_>('/storeApp/order/baseInfos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

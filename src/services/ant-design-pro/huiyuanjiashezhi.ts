// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取详情 GET /storeApp/moneyMealPriceConfig/detail */
export async function detailUsingGET8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET8Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMoneyMealPriceConfigVo_>(
    '/storeApp/moneyMealPriceConfig/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 保存会员价设置 POST /storeApp/moneyMealPriceConfig/save */
export async function saveUsingPOST13(
  body: API.MoneyMealPriceConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMealPriceConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

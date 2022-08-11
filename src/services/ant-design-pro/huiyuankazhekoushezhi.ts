// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取详情 GET /storeApp/moneyMealDiscountConfig/detail */
export async function detailUsingGET7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET7Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMoneyMealDiscountConfigVo_>(
    '/storeApp/moneyMealDiscountConfig/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 保存会员卡折扣设置 POST /storeApp/moneyMealDiscountConfig/save */
export async function saveUsingPOST12(
  body: API.MoneyMealDiscountConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMealDiscountConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

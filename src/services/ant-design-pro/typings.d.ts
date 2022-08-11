declare namespace API {
  type AccountBalanceRecord = {
    /** 实收账户剩余 */
    amountBalance?: number;
    /** 实收消费 */
    amountConsume?: number;
    /** 实收充值 */
    amountRecharge?: number;
    /** 赠送账户剩余 */
    giveBalance?: number;
    /** 赠送消费 */
    giveConsume?: number;
    /** 赠送充值 */
    giveRecharge?: number;
    /** 会员卡模板id */
    mealModelId?: string;
    /** 会员卡模板名称 */
    mealModelName?: string;
    /** 开卡数 */
    openCount?: number;
    /** 续卡数 */
    rechargeCount?: number;
    /** 总账户剩余 */
    totalBalance?: number;
    /** 累计有效卡数 */
    validCount?: number;
  };

  type accountBalanceRecordUsingGETParams = {
    /** 开始时间 */
    beginTime?: string;
    /** 当前页 */
    current: number;
    /** 结束时间 */
    endTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type AccountBalanceRecordVo = {
    /** 实收账户剩余(总计) */
    amountBalanceSum?: number;
    /** 实收消费(总计) */
    amountConsumeSum?: number;
    /** 实收充值(总计) */
    amountRechargeSum?: number;
    /** 当前剩余积分 */
    balanceIntegral?: number;
    /** 累计积分 */
    cumulativeIntegral?: number;
    /** 赠送账户剩余(总计) */
    giveBalanceSum?: number;
    /** 赠送消费(总计) */
    giveConsumeSum?: number;
    /** 赠送充值(总计) */
    giveRechargeSum?: number;
    /** 开卡数(总计) */
    openCountSum?: number;
    /** 续卡数(总计) */
    rechargeCountSum?: number;
    records?: PageAccountBalanceRecord_;
    /** 总账户剩余(总计) */
    totalBalanceSum?: number;
    /** 累计有效卡数(总计) */
    validCountSum?: number;
  };

  type AccountChangeRecordVo = {
    /** 账户类型1积分账户2欠款账户3实收账户4赠送账户 */
    accountType?: number;
    /** 当前余额 */
    balance?: number;
    /** 变更金额/积分 */
    change?: number;
    /** 操作类型1开卡充值2续卡充值3消费支出4取款支出5购买次卡6开卡赠送7充值赠送8开卡积分9充值积分10消费赠送11兑换礼品12调整增加13调整减少14还欠款15消费欠款 */
    operationType?: number;
    /** 单据日期 */
    orderDate?: string;
    /** 单据号 */
    orderSn?: string;
    /** 备注 */
    remark?: string;
    /** 发生店铺 */
    storeName?: string;
  };

  type AsyncVo = {
    errors?: string[];
    /** 订单完成状态(1:成功,2:失败,3:等待) */
    status?: number;
    /** 状态描述 */
    statusDesc?: string[];
  };

  type BaseScopeDto = {
    /** 作用域范围列表 */
    scopeEntities?: BaseScopeEntity[];
    /** 作用域id,1:商品,2:服务,3:套餐,4:开卡,5:充值 */
    scopeId: number;
    /** 作用域名称 */
    scopeName?: string;
    /** 作用域类型,1:全部可用, 2:部分可用, 3:部分不可用 */
    scopeType: number;
  };

  type BaseScopeEntity = {
    /** 项目id */
    projectId: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目价格 */
    projectPrice: number;
    /** 规格值 */
    specsValue?: string;
  };

  type BrandDto = {
    /** 品牌id(新增时不填) */
    id: string;
    /** 品牌名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type BrandVo = {
    /** 品牌id */
    id?: string;
    /** 品牌名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type businessAnalyseTrendUsingGETParams = {
    /** employeeId */
    employeeId: number;
  };

  type BusinessAnalyseTrendVo = {
    /** 指定订单 */
    appointCount?: number;
    /** 日期 */
    date?: string;
    /** 开卡业绩 */
    openPerformance?: number;
    /** 总服务订单 */
    orderCount?: number;
    /** 项目业绩 */
    projectPerformance?: number;
  };

  type businessAnalyseUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 结束时间 */
    endDate: string;
    /** 排序规则(desc,asc) */
    order?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 排序(performance,orderCount,commission,appointCount) */
    sort?: string;
  };

  type BusinessAnalyseVo = {
    /** 指定数 */
    appointCount?: number;
    /** 指定占比 */
    appointProportion?: number;
    /** 提成 */
    commission?: number;
    /** 提成占比 */
    commissionProportion?: number;
    /** 员工id */
    employeeId?: string;
    /** 员工名称 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 单数 */
    orderCount?: number;
    /** 业绩 */
    performance?: number;
    /** 业绩占比 */
    performanceProportion?: number;
    /** 排序 */
    sortValue?: number;
  };

  type buyCountMealListDetailUsingGETParams = {
    /** orderId */
    orderId: number;
  };

  type buyMoneyMealDetailUsingGETParams = {
    /** orderId */
    orderId: number;
  };

  type CategoryBaseVo = {
    id?: string;
    name?: string;
  };

  type CategoryDto = {
    /** 分类id(新增时不填) */
    id: string;
    /** 分类名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 父分类id(一级为0) */
    parentId: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type CategoryProductTree = {
    children?: CategoryProductTree[];
    id?: string;
    name?: string;
    parentId?: string;
    productBaseVos?: ProductBaseVo[];
    tempParentId?: string;
  };

  type CategoryServeTree = {
    children?: CategoryServeTree[];
    id?: string;
    name?: string;
    parentId?: string;
    serveBaseVos?: ServeBaseVo[];
    tempParentId?: string;
  };

  type CategoryTreeSelect = {
    children?: CategoryTreeSelect[];
    id?: string;
    name?: string;
    parentId?: string;
    parentName?: string;
    projectNum?: number;
    status?: number;
    tempParentId?: string;
  };

  type ChangePersonDto = {
    /** 验证码 */
    code: string;
    /** 是否删除 */
    isDelete: boolean;
    /** 手机号 */
    mobile: string;
    /** 角色 */
    roleId: number;
  };

  type changeStoreUsingPOSTParams = {
    /** storeId */
    storeId: number;
    /** user_id */
    user_id?: number;
  };

  type ChannelDto = {
    /** 渠道id(新增时不填) */
    id: string;
    /** 渠道名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type ChannelVo = {
    /** 渠道id */
    id?: string;
    /** 渠道名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type CheckMobileDto = {
    /** 会员电话 */
    mobile: string;
    /** 会员名称 */
    name: string;
  };

  type CheckMobileVo = {
    /** 会员id */
    memberId?: string;
    /** 描述 */
    msg?: string;
  };

  type CommissionConfigDto = {
    /** 项目业绩设置区分卡类型(0:禁用,1启用) */
    achievementDistinguishMeal: number;
    /** 购买次卡,员工提成(1:显示且允许修改,2:显示但不允许修改,3:不显示) */
    buyCountMealCommission: number;
    /** 前台收银,员工提成(1:显示且允许修改,2:显示但不允许修改,3:不显示) */
    cashierCommission: number;
    /** 项目提成设置区分卡类型(0:禁用,1启用) */
    commissionDistinguishMeal: number;
    /** 次卡消费提成设置(0:禁用,1启用) */
    countMealCommission: number;
    /** 次卡消费业绩设置(0:禁用,1启用) */
    countMealPerformance: number;
    /** 次卡销售业绩自动平分(0:禁用,1启用) */
    countMealPerformanceAuto: number;
    /** 不允许修改员工职位(0:禁用,1启用) */
    notAllowEditPost: number;
    /** 开卡充值业绩自动平分(0:禁用,1启用) */
    projectPerformanceAuto: number;
    /** 开卡充值,员工提成(1:显示且允许修改,2:显示但不允许修改,3:不显示) */
    rechargeCommission: number;
    /** 开卡充值业绩自动平分(0:禁用,1启用) */
    rechargePerformanceAuto: number;
  };

  type CommissionConfigVo = {
    /** 项目业绩设置区分卡类型(0:禁用,1启用) */
    achievementDistinguishMeal?: number;
    /** 购买次卡,员工提成(1:显示且允许修改,2:显示但不允许修改,3:不显示) */
    buyCountMealCommission?: number;
    /** 前台收银,员工提成(1:显示且允许修改,2:显示但不允许修改,3:不显示) */
    cashierCommission?: number;
    /** 项目提成设置区分卡类型(0:禁用,1启用) */
    commissionDistinguishMeal?: number;
    /** 次卡消费提成设置(0:禁用,1启用) */
    countMealCommission?: number;
    /** 次卡消费业绩设置(0:禁用,1启用) */
    countMealPerformance?: number;
    /** 次卡销售业绩自动平分(0:禁用,1启用) */
    countMealPerformanceAuto?: number;
    /** 不允许修改员工职位(0:禁用,1启用) */
    notAllowEditPost?: number;
    /** 项目业绩自动平分(0:禁用,1启用) */
    projectPerformanceAuto?: number;
    /** 开卡充值,员工提成(1:显示且允许修改,2:显示但不允许修改,3:不显示) */
    rechargeCommission?: number;
    /** 开卡充值业绩自动平分(0:禁用,1启用) */
    rechargePerformanceAuto?: number;
  };

  type CommissionSummary = {
    /** 次卡销售提成 */
    countMealSaleCommission?: number;
    /** 次卡销售数量 */
    countMealSaleNum?: number;
    /** 次卡销售业绩 */
    countMealSalePerformance?: number;
    /** 员工姓名 */
    employeeName?: string;
    /** id */
    id?: string;
    /** 开卡充值提成 */
    openRechargeCommission?: number;
    /** 开卡充值数量 */
    openRechargeNum?: number;
    /** 开卡充值业绩 */
    openRechargePerformance?: number;
    /** 产品销售提成 */
    productSaleCommission?: number;
    /** 产品销售数量 */
    productSaleNum?: number;
    /** 产品销售业绩 */
    productSalePerformance?: number;
    /** 还款提成 */
    reimbursementCommission?: number;
    /** 还款数量 */
    reimbursementNum?: number;
    /** 还款业绩 */
    reimbursementPerformance?: number;
    /** 服务项目提成 */
    serveSaleCommission?: number;
    /** 服务项目数量 */
    serveSaleNum?: number;
    /** 服务项目业绩 */
    serveSalePerformance?: number;
    /** 总提成额 */
    totalCommission?: number;
  };

  type commissionSummaryUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 部门id-1全部 */
    deptId?: number;
    /** 结束时间 */
    endDate: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type CommissionSummaryVo = {
    /** 次卡销售提成(合计) */
    countMealSaleCommissionSum?: number;
    /** 次卡销售数量(合计) */
    countMealSaleNumSum?: number;
    /** 次卡销售业绩(合计) */
    countMealSalePerformanceSum?: number;
    /** 开卡充值提成(合计) */
    openRechargeCommissionSum?: number;
    /** 开卡充值数量(合计) */
    openRechargeNumSum?: number;
    /** 开卡充值业绩(合计) */
    openRechargePerformanceSum?: number;
    page?: PageCommissionSummary_;
    /** 产品销售提成(合计) */
    productSaleCommissionSum?: number;
    /** 产品销售数量(合计) */
    productSaleNumSum?: number;
    /** 产品销售业绩(合计) */
    productSalePerformanceSum?: number;
    /** 还款提成(合计) */
    reimbursementCommissionSum?: number;
    /** 还款数量(合计) */
    reimbursementNumSum?: number;
    /** 还款业绩(合计) */
    reimbursementPerformanceSum?: number;
    /** 服务项目提成(合计) */
    serveSaleCommissionSum?: number;
    /** 服务项目数量(合计) */
    serveSaleNumSum?: number;
    /** 服务项目业绩(合计) */
    serveSalePerformanceSum?: number;
    /** 总提成额(合计) */
    totalCommissionSum?: number;
  };

  type CommissionTypeSummary = {
    /** 提成 */
    commission?: number;
    /** 客数 */
    customerNum?: number;
    /** id */
    id?: string;
    /** 业绩 */
    performance?: number;
    /** 项目名称 */
    projectName?: string;
    /** 数量 */
    projectNum?: number;
    /** 项目类型1产品2服务3开卡4充值5次卡销售6次卡服务7次卡产品8还款 */
    projectType?: number;
  };

  type commissionTypeSummaryUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 员工id */
    employeeId: number;
    /** 结束时间 */
    endDate: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 项目类型-1全部1产品2服务3开卡4充值5次卡销售6次卡服务7次卡产品 */
    projectTypes?: number[];
  };

  type CommissionTypeSummaryVo = {
    /** 指定提成 */
    appointCommission?: number;
    /** 指定客数 */
    appointNum?: number;
    /** 指定业绩 */
    appointPerformance?: number;
    /** 散客提成 */
    customerCommission?: number;
    /** 散客客数 */
    customerNum?: number;
    /** 散客业绩 */
    customerPerformance?: number;
    /** 次卡消费提成 */
    mealConsumeCommission?: number;
    /** 次卡消费客数 */
    mealConsumeNum?: number;
    /** 次卡消费业绩 */
    mealConsumePerformance?: number;
    /** 次卡销售提成 */
    mealSaleCommission?: number;
    /** 次卡销售客数 */
    mealSaleNum?: number;
    /** 次卡销售业绩 */
    mealSalePerformance?: number;
    /** 会员提成 */
    memberCommission?: number;
    /** 会员客数 */
    memberNum?: number;
    /** 会员业绩 */
    memberPerformance?: number;
    /** 非指定提成 */
    notAppointCommission?: number;
    /** 非指定客数 */
    notAppointNum?: number;
    /** 非指定业绩 */
    notAppointPerformance?: number;
    /** 开卡提成 */
    openCommission?: number;
    /** 开卡客数 */
    openNum?: number;
    /** 开卡业绩 */
    openPerformance?: number;
    page?: PageCommissionTypeSummary_;
    /** 产品提成 */
    productCommission?: number;
    /** 产品客数 */
    productNum?: number;
    /** 产品业绩 */
    productPerformance?: number;
    /** 充值提成 */
    rechargeCommission?: number;
    /** 充值客数 */
    rechargeNum?: number;
    /** 充值业绩 */
    rechargePerformance?: number;
    /** 还款提成 */
    reimbursementCommission?: number;
    /** 还款数量 */
    reimbursementNum?: number;
    /** 还款业绩 */
    reimbursementPerformance?: number;
    /** 服务提成 */
    serveCommission?: number;
    /** 服务客数 */
    serveNum?: number;
    /** 服务业绩 */
    servePerformance?: number;
    /** 提成 */
    totalCommission?: number;
    /** 总数量 */
    totalCount?: number;
    /** 总客数 */
    totalNum?: number;
    /** 总业绩 */
    totalPerformance?: number;
  };

  type ConsumerSummaryItem = {
    /** 女客数 */
    femaleNum?: number;
    /** 男客数 */
    maleNum?: number;
    /** 订单数量 */
    orderNum?: number;
    /** 项目业绩均价 */
    projectDiscountedPriceAvg?: number;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目数量 */
    projectNum?: number;
    /** 项目业绩 */
    projectPerformanceSum?: number;
  };

  type ConsumeSummary = {
    /** 分类业绩占比 */
    categoryDiscountedPricePercentiles?: number;
    /** 分类业绩 */
    categoryDiscountedPriceSum?: number;
    /** 分类id */
    categoryId?: string;
    /** 分类产品销售数量 */
    categoryProjectCostSum?: number;
    /** 分类名称 */
    orderCategoryName?: string;
    /** 项目列表 */
    productItems?: ConsumerSummaryItem[];
  };

  type ConsumeSummaryInfo = {
    /** 分类列表 */
    categoryItems?: ConsumeSummary[];
    /** 商品总业绩 */
    productProjectDiscountedPrice?: number;
    /** 服务总业绩 */
    serviceProjectDiscountedPrice?: number;
    /** 总业绩 */
    totalProjectDiscountedPrice?: number;
  };

  type CountMealBaseDto = {
    /** 指定激活时间(有效期类型为3时输入) */
    activationTime?: string;
    /** 提成设置 */
    commissionInfos?: ProjectCommissionItem[];
    /** 固定有效期开始时间(有效期类型为2时输入) */
    fixedBeginTime?: string;
    /** 固定有效期结束时间(有效期类型为2时输入) */
    fixedEndTime?: string;
    id?: number;
    /** 次卡id */
    mealId: string;
    /** 次卡名称 */
    name: string;
    /** 售价 */
    price: number;
    /** 项目 */
    projects: ProjectBaseDto[];
    /** 总次数 */
    total: number;
  };

  type CountMealBaseVo = {
    /** 过期时间 */
    expireTime?: string;
    /** 次卡id */
    id?: string;
    /** 次卡模板id */
    mealId?: string;
    /** 次卡名称 */
    name?: string;
    /** 售价 */
    price?: number;
    /** 项目 */
    projects?: ProjectBaseDto[];
    total?: number;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    type?: number;
  };

  type CountMealBuyDto = {
    /** 次卡内容 */
    countMealDtos: CountMealBaseDto[];
    /** 服务员工id */
    employeeId?: number;
    /** 赠送积分 */
    integral?: number;
    /** 会员id */
    memberId: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单id */
    orderId?: number;
    /** 备注 */
    orderRemark?: string;
    /** 单据号 */
    orderSn?: string;
  };

  type CountMealDetailVo = {
    /** 指定激活时间(有效期类型为3时输入) */
    activationTime?: string;
    /** 激活方式1购买时激活2使用时激活3指定日期激活 */
    activationType?: number;
    /** 指定有效期时间类型(1年2月3日) */
    appointTimeType?: number;
    /** 指定有效期时间值 */
    appointTimeValue?: number;
    /** 是否开启最多消费次数0不开启1开启 */
    enableMaxCount?: number;
    /** 固定有效期开始时间 */
    fixedBeginTime?: string;
    /** 固定有效期结束时间 */
    fixedEndTime?: string;
    /** 次卡id */
    id?: string;
    /** 图片路径 */
    img?: string;
    /** 次卡名称 */
    name?: string;
    /** 售价 */
    price?: number;
    /** 项目 */
    projects?: ProjectBaseDto[];
    /** 销售开始时间 */
    saleBeginTime?: string;
    /** 销售结束时间 */
    saleEndTime?: string;
    /** 总次数 */
    total?: number;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    type?: number;
    /** 有效期类型(1永久2固定3指定) */
    validTimeType?: number;
  };

  type CountMealDoc = {
    /** 消费金额 */
    consumeAmount?: number;
    /** 消费次数 */
    consumeCount?: number;
    /** 次卡Id */
    countMealId?: string;
    /** 次卡名称 */
    countMealName?: string;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    countMealType?: number;
    /** 过期时间 */
    expireTime?: string;
    /** 主键 */
    id?: string;
    /** 顾客手机 */
    memberMobile?: string;
    /** 顾客姓名 */
    memberName?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 剩余金额 */
    surplusAmount?: number;
    /** 剩余次数 */
    surplusTotal?: number;
    /** 总金额 */
    totalAmount?: number;
    /** 总次数 */
    totalCount?: number;
  };

  type CountMealDto = {
    /** 激活方式(1购买时激活2使用时激活3指定日期激活) */
    activationType: number;
    /** 指定有效期时间类型(1年2月3日)(有效期类型为3时输入) */
    appointTimeType: number;
    /** 指定有效期时间值(有效期类型为3时输入) */
    appointTimeValue: number;
    /** 是否开启最多消费次数0不开启1开启 */
    enableMaxCount?: number;
    /** 固定有效期开始时间(有效期类型为2时输入) */
    fixedBeginTime: string;
    /** 固定有效期结束时间(有效期类型为2时输入) */
    fixedEndTime: string;
    /** 次卡id(新增时不填) */
    id: string;
    /** 图片路径 */
    img: string;
    /** 次卡名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 售价 */
    price: number;
    /** 项目 */
    projects: ProjectBaseDto[];
    /** 销售开始时间 */
    saleBeginTime?: string;
    /** 销售结束时间 */
    saleEndTime?: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 总次数 */
    total: number;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    type: number;
    /** 有效期类型(1永久2固定3指定)(有效期类型为3时输入) */
    validTimeType: number;
  };

  type CountMealModelVo = {
    /** 次卡模板id */
    mealModelId?: string;
    /** 次卡模板名称 */
    mealModelName?: string;
    /** 项目内容 */
    projects?: ProjectDto[];
  };

  type countMealReimburseDetailUsingGETParams = {
    /** orderId */
    orderId: number;
  };

  type CountMealSaleRecord = {
    /** 金额 */
    amount?: number;
    /** 提成 */
    commission?: number;
    /** 次卡名称 */
    countMealName?: string;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    /** id */
    id?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 单据号 */
    orderSn?: string;
    /** 业绩 */
    performance?: number;
  };

  type countMealSaleRecordUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 员工id */
    employeeId: number;
    /** 结束时间 */
    endDate: string;
    /** 关键字(单据号,顾客姓名,手机号,次卡名称) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type CountMealSaleRecordVo = {
    /** 金额(当页合计) */
    amountCurrentSum?: number;
    /** 金额(总合计) */
    amountSum?: number;
    /** 提成(当页合计) */
    commissionCurrentSum?: number;
    /** 提成(总合计) */
    commissionSum?: number;
    page?: PageCountMealSaleRecord_;
    /** 业绩(当页合计) */
    performanceCurrentSum?: number;
    /** 业绩(总合计) */
    performanceSum?: number;
  };

  type countMealSummaryUsingGETParams = {
    /** 开始时间 */
    beginTime?: string;
    /** 当前页 */
    current: number;
    /** 结束时间 */
    endTime?: string;
    /** 搜索关键字(姓名,姓名首拼,手机号,次卡名称,项目名称) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态(0正常1已使用2已退卡3已过期) */
    status?: number;
  };

  type CountMealTotalVo = {
    /** 可售数量 */
    normalCount?: number;
    /** 过期数量 */
    overdueCount?: number;
    /** 停售数量 */
    suspendCount?: number;
    /** 总数 */
    total?: number;
  };

  type CountMealTypeBaseVo = {
    /** 次卡id */
    id?: string;
    /** 次卡名称 */
    name?: string;
  };

  type CountMealTypeSummary = {
    /** 持卡人数 */
    cardHolderNum?: number;
    /** 消费金额 */
    consumeAmount?: number;
    /** 消费次数 */
    consumeCount?: number;
    /** 随机id */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** 剩余金额 */
    surplusAmount?: number;
    /** 剩余次数 */
    surplusTotal?: number;
    /** 总金额 */
    totalAmount?: number;
    /** 总次数 */
    totalCount?: number;
  };

  type countMealTypeSummaryUsingGETParams = {
    /** 开始时间 */
    beginTime?: string;
    /** 次卡名称 */
    countMealName?: string;
    /** 当前页 */
    current: number;
    /** 结束时间 */
    endTime?: string;
    /** 姓名,手机号 */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 项目名称 */
    projectName?: string;
    /** 状态(0正常1已使用2已退卡3已过期) */
    status?: number;
    /** 类型1单项计次2整体计次3不限计次 */
    type: number;
  };

  type CountMealTypeSummaryVo = {
    /** 持卡人数 */
    cardHolderNumSum?: number;
    /** 消费金额 */
    consumeAmountSum?: number;
    /** 消费次数 */
    consumeCountSum?: number;
    page?: PageCountMealTypeSummary_;
    /** 剩余金额 */
    surplusAmountSum?: number;
    /** 剩余次数 */
    surplusTotalSum?: number;
    /** 总金额 */
    totalAmountSum?: number;
    /** 总次数 */
    totalCountSum?: number;
  };

  type CountMealVo = {
    /** 指定有效期时间类型(1年2月3日)(有效期类型为3时输入) */
    appointTimeType: number;
    /** 指定有效期时间值(有效期类型为3时输入) */
    appointTimeValue: number;
    /** 信息来源 */
    channel?: string;
    /** 固定有效期开始时间(有效期类型为2时输入) */
    fixedBeginTime: string;
    /** 固定有效期结束时间(有效期类型为2时输入) */
    fixedEndTime: string;
    /** 套餐id */
    id?: string;
    /** 套餐名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 售价 */
    price?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 总次数 */
    total?: number;
    /** 套餐类型(1单项计次2整体计次3不限计次) */
    type?: number;
    /** 有效期类型(1永久2固定3指定)(有效期类型为3时输入) */
    validTimeType: number;
  };

  type couponGivingDetailUsingGETParams = {
    /** orderId */
    orderId: number;
  };

  type CouponInfo = {
    /** 优惠金额 */
    discountAmount?: number;
    /** 优惠类别 */
    discountCategory?: number;
    /** 优惠方式名称 */
    discountName?: string;
    /** 排序 */
    sort?: number;
  };

  type CouponInfoDto = {
    /** 自定义订单金额 */
    customerOrderAmount?: number;
    /** 自定义订单折扣 */
    customerOrderDiscount?: number;
    /** 折扣券折id */
    discountCouponId?: string;
    /** 是否实收卡金支付(默认为实收卡金, 可不传) */
    isGivingAmountPayment?: number;
    /** 金额卡id */
    moneyMealId?: string;
    /** 金额卡密码 */
    voucherCouponIds?: string;
  };

  type CouponInfos = {
    /** 优惠券名字 */
    couponGroupName: string;
    /** 优惠券类型 */
    couponType?: string;
    /** 优惠券值类型(1:项目券,2:代金券,3:折扣券) */
    couponTypeValue?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 有效期 */
    endTime?: string;
    /** 有效期值 */
    endTimeValue?: string;
    /** 面值 */
    faceValue?: string;
    /** 优惠券id */
    id: string;
    /** 激活状态,0代表不是,没有,否, 1代表是, 有值, 真(接口约定, 今后不再说明) */
    isActivation?: number;
  };

  type CouponModelInfosVo = {
    /** 优惠券名字 */
    couponGroupName?: string;
    /** 优惠券类型(1:项目券,2:代金券,3:折扣券) */
    couponType?: number;
    /** 优惠券类型描述 */
    couponTypeDesc?: string;
    /** 面值 */
    faceValue?: number;
    /** 0.5折或100元 */
    faceValueDesc?: string;
    /** 优惠券id */
    id?: string;
  };

  type CouponQueryDto = {
    /** 优惠券类型,1:项目券分组,2:代金券,3:折扣券 */
    couponType?: number;
    /** 页码 */
    current?: number;
    /** 状态,1:可发,0:停用 */
    isActivation?: number;
    /** 关键字 */
    keyword?: string;
    /** 分页大小 */
    pageSize?: number;
  };

  type CreateExtensionCancellation = {
    /** 会员卡id */
    moneyMealId: string;
    /** 退款积分 */
    withDrawIntegral?: number;
    /** 退款金额 */
    withDrawMoney: number;
    /** 退款赠送金额 */
    withDrawMoneyGiveMoney?: number;
  };

  type CreateExtensionIncomeExpense = {
    /** 收支分类id */
    categoryId?: string;
    /** 收支类别(13:收入,14:支出) */
    categoryType?: number;
  };

  type CreateExtensionReimbursement = {
    /** 提成设置 */
    commissionInfos?: ProjectCommissionItem[];
    /** 还款金额 */
    withDrawMoney: number;
  };

  type CreateExtensionTopUp = {
    /** 提成设置 */
    commissionInfos?: ProjectCommissionItem[];
    /** 赠送金额 */
    givenAmount?: number;
    /** 赠送积分 */
    integral?: number;
    /** 会员卡id */
    moneyMealId: string;
    /** 实收金额 */
    paidInAmount: number;
  };

  type CreateExtensionTopUpListQueryDto = {
    /** 金额止 */
    max?: number;
    /** 金额起 */
    min?: number;
    /** 金额卡ID */
    moneyMealId?: string;
    /** 金额卡模板id */
    moneyMealModelId: string;
  };

  type CreateExtensionWithdraw = {
    /** 赠送金额 */
    giveMoney: number;
    /** 金额 */
    money: number;
    /** 会员卡id */
    moneyMealId: string;
  };

  type CreateInComeExpendDto = {
    /** 收支分类id */
    categoryId?: string;
    /** 收支分类名称 */
    categoryName?: string;
    /** 收支类别(13:收入,14:支出) */
    incomeExpenses?: number;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 订单备注 */
    remark?: string;
    /** 附件地址 */
    scanningUrl?: string;
    /** 结算人id */
    settleBy?: string;
    /** 结算人姓名 */
    settleByEmployeeName?: string;
  };

  type CreateOrderDiscountCouponDto = {
    /** 优惠券名字 */
    couponGroupName: string;
    /** 有效期,年月日的大小, 如1, 100 */
    delayTime?: number;
    /** 日期类型,1:年,2:月,3:日 */
    delayTimeType?: number;
    /** 使用 说 明 */
    description?: string;
    /** 结束时间 */
    fixedEndTime?: string;
    /** 开始日期 */
    fixedStartTime?: string;
    /** 优惠券id */
    id: string;
    /** 折扣限额 */
    limitPreferential?: number;
    /** 折扣值 */
    preferentialDiscount: number;
    /** 适用项目价格,1正价, 2折扣价 */
    priceScope?: number;
    /** 项目范围 */
    projectScope?: BaseScopeDto[];
    /** 满金额 */
    requirementsPrice?: number;
  };

  type CreateOrderDto = {
    countMeal?: CountMealBuyDto;
    couponInfoDto?: CouponInfoDto;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 订单明细 */
    items: OrderDetailOperationItemDto[];
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    moneyMeal?: MoneyMealBuyDto;
    /** 金额卡密码 */
    moneyMealPassword?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 订单id,仅退货有效 */
    orderId?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 挂单单据id */
    pendingOrderId?: string;
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 房间id */
    roomId?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type CreateOrderMealDto = {
    countMeal?: CountMealBuyDto;
    couponInfoDto?: CouponInfoDto;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    moneyMeal?: MoneyMealBuyDto;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type CreateOrderVouchersCouponDto = {
    /** 优惠券名字 */
    couponGroupName: string;
    /** 有效期,年月日的大小, 如1, 100 */
    delayTime?: number;
    /** 日期类型,1:年,2:月,3:日 */
    delayTimeType?: number;
    /** 使用 说 明 */
    description?: string;
    /** 结束时间 */
    fixedEndTime?: string;
    /** 开始日期 */
    fixedStartTime?: string;
    /** 优惠券id */
    id: string;
    /** 减金额 */
    preferentialPrice: number;
    /** 适用项目价格,1正价, 2折扣价 */
    priceScope?: number;
    /** 项目范围 */
    projectScope?: BaseScopeDto[];
    /** 满金额 */
    requirementsPrice: number;
  };

  type CreatePersonDto = {
    /** 确认密码 */
    confirmPassword: string;
    /** 是否删除 */
    isDelete: boolean;
    /** 手机号 */
    mobile: string;
    /** 负责人名称 */
    name: string;
    /** 密码 */
    password: string;
    /** 角色 */
    roleId: number;
  };

  type CreateProjectCouponGroupDto = {
    /** 优惠券名字 */
    couponGroupName: string;
    /** 有效期,年月日的大小, 如1, 100 */
    delayTime?: number;
    /** 日期类型,1:年,2:月,3:日 */
    delayTimeType?: number;
    /** 使用 说 明 */
    description?: string;
    /** 面值 */
    faceValue: number;
    /** 结束时间 */
    fixedEndTime?: string;
    /** 开始日期 */
    fixedStartTime?: string;
    /** 优惠券id */
    id: string;
    /** 适用项目价格,1正价, 2折扣价 */
    priceScope?: number;
    /** 项目列表 */
    projects: CreateProjectCouponItemDto[];
  };

  type CreateProjectCouponItemDto = {
    /** 图片地址 */
    img?: string;
    /** 返回的优惠券实例id,加入购物车时携带此id */
    instanceId?: string;
    /** 项目id(商品skuId或服务Id) */
    projectId: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目数量 */
    projectNum: number;
    /** 项目价格 */
    projectPrice: number;
    /** 类别,1:商品,2:服务,3:套餐,4:开卡,5:充值 */
    projectType: number;
    /** 规格值 */
    specsValues?: string;
  };

  type CreateShopDto = {
    /** 详细地址 */
    address?: string;
    /** 市 */
    city?: string;
    /** 国家 */
    country?: string;
    /** 区 */
    district?: string;
    /** 行业id */
    industryId: string;
    /** 纬度 */
    latitude?: number;
    /** 店铺logo */
    logoUrl?: string;
    /** 经度 */
    longitude?: number;
    /** 店铺名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 省 */
    province?: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type CustomerRecordDto = {
    /** 分类Id */
    categoryId?: string;
    /** 内容 */
    chargeContent: string;
    /** 服务员工 */
    employees?: string;
    /** 顾客记录ID(新增时不传) */
    id: string;
    /** 图片路径 */
    img?: string[];
    /** 会员id */
    memberId: string;
    /** 单据号 */
    orderCard: string;
  };

  type CustomerRecordVo = {
    /** 分类Id */
    categoryId?: string;
    /** 分类名称 */
    categoryName?: string;
    /** 变更内容 */
    chargeContent?: string;
    /** 操作人 */
    createName?: string;
    /** 操作人头像 */
    createProfile?: string;
    /** 操作时间 */
    createTime?: string;
    /** 服务员工名称 */
    employeeNames?: string[];
    /** 服务员工id集合 */
    employees?: string;
    /** 顾客记录ID */
    id?: string;
    /** 图片路径 */
    img?: string[];
    /** 单据号 */
    orderCard?: string;
  };

  type DeleteBatchBaseDto = {
    /** id集合 */
    ids: string;
  };

  type deleteUsingDELETE10Params = {
    /** 主键id */
    id: number;
  };

  type deleteUsingDELETE11Params = {
    id: string;
  };

  type deleteUsingDELETE12Params = {
    id: string;
  };

  type deleteUsingDELETE13Params = {
    id: string;
  };

  type deleteUsingDELETE14Params = {
    id: string;
  };

  type deleteUsingDELETE15Params = {
    id: string;
  };

  type deleteUsingDELETE16Params = {
    id: string;
  };

  type deleteUsingDELETE17Params = {
    id: string;
  };

  type deleteUsingDELETE18Params = {
    id: string;
  };

  type deleteUsingDELETE19Params = {
    id: string;
  };

  type deleteUsingDELETE1Params = {
    id: string;
  };

  type deleteUsingDELETE20Params = {
    id: string;
  };

  type deleteUsingDELETE21Params = {
    id: string;
  };

  type deleteUsingDELETE22Params = {
    id: string;
  };

  type deleteUsingDELETE23Params = {
    id: string;
  };

  type deleteUsingDELETE24Params = {
    id: string;
  };

  type deleteUsingDELETE25Params = {
    id: string;
  };

  type deleteUsingDELETE26Params = {
    /** 主键id */
    id: number;
  };

  type deleteUsingDELETE27Params = {
    id: string;
  };

  type deleteUsingDELETE2Params = {
    id: string;
  };

  type deleteUsingDELETE3Params = {
    /** id */
    id: number;
    /** 优惠券类型(1:项目券分组,2:代金券,3:折扣券) */
    type: number;
  };

  type deleteUsingDELETE4Params = {
    /** id */
    id: number;
  };

  type deleteUsingDELETE5Params = {
    id: string;
  };

  type deleteUsingDELETE6Params = {
    id: string;
  };

  type deleteUsingDELETE7Params = {
    id: string;
  };

  type deleteUsingDELETE8Params = {
    id: string;
  };

  type deleteUsingDELETE9Params = {
    id: string;
  };

  type deleteUsingDELETEParams = {
    id: string;
  };

  type DeptDto = {
    /** 部门id */
    id: string;
    /** 负责人Id */
    leader?: string;
    /** 部门名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 父部门id(一级填0) */
    parentId?: string;
    /** 部门电话 */
    phone?: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type DeptTreeSelect = {
    children?: DeptTreeSelect[];
    employeeTotal?: number;
    id?: string;
    leaderId?: string;
    leaderName?: string;
    name?: string;
    parentId?: string;
    status?: number;
    tempParentId?: string;
  };

  type detailUsingGET10Params = {
    id: string;
  };

  type detailUsingGET11Params = {
    /** 分类id(选择服务和商品时需要填入,选择分类时传上级分类id,,,选择次卡时1单项计次2整体计次3不限计次) */
    categoryId?: number;
    /** 次卡id(只有选择次卡内项目时才需要填入) */
    countMealModelId?: number;
    /** 会员卡模板id(-1全部) */
    moneyMealModelId: number;
    /** 职位id(-1全部) */
    postId: number;
    /** 项目id(选择分类时为分类id)(选择次卡时为次卡id) */
    projectId: number;
    /** 项目类型(1商品2服务3次卡) */
    projectType: number;
    /** 类型(1:项目提成,2:项目业绩) */
    type: number;
  };

  type detailUsingGET12Params = {
    /** 会员卡模板id(-1全部) */
    moneyMealModelId: number;
    /** 职位id(-1全部) */
    postId: number;
    /** 类型(1:次卡销售提成,2次卡销售业绩) */
    type: number;
  };

  type detailUsingGET13Params = {
    /** 次卡模板id(选择次卡类型时(1单项计次2整体计次3不限计次)) */
    countMealModelId: number;
    /** 职位id(-1全部) */
    postId: number;
    /** 类型(1:次卡销售提成,2次卡销售业绩) */
    type: number;
  };

  type detailUsingGET1Params = {
    /** id */
    id: number;
  };

  type detailUsingGET2Params = {
    id: string;
  };

  type detailUsingGET3Params = {
    /** memberId */
    memberId: number;
  };

  type detailUsingGET5Params = {
    id: string;
  };

  type detailUsingGET6Params = {
    /** id */
    id: number;
  };

  type detailUsingGET7Params = {
    /** 项目id */
    projectId: number;
  };

  type detailUsingGET8Params = {
    /** 项目id */
    projectId: number;
  };

  type detailUsingGET9Params = {
    /** orderId */
    orderId: number;
  };

  type DistinguishAll = {
    customerAppoint?: PerformanceCommissionValueDto;
    customerNotAppoint?: PerformanceCommissionValueDto;
    memberAppoint?: PerformanceCommissionValueDto;
    memberNotAppoint?: PerformanceCommissionValueDto;
  };

  type DistinguishAllNot = {
    base?: PerformanceCommissionValueDto;
  };

  type DistinguishAppoint = {
    appoint?: PerformanceCommissionValueDto;
    notAppoint?: PerformanceCommissionValueDto;
  };

  type DistinguishMember = {
    customer?: PerformanceCommissionValueDto;
    member?: PerformanceCommissionValueDto;
  };

  type EditCommissionDto = {
    /** 删除列表 */
    deleteItems?: string;
    /** 提成列表 */
    items?: ProjectCommissionItem[];
    /** 订单id */
    orderId?: number;
  };

  type editLoginMobileUsingPUTParams = {
    /** 验证码 */
    code: string;
    /** 员工id */
    id: number;
    /** 手机号 */
    mobile: string;
  };

  type EditOrderDiscountCouponVo = {
    /** 优惠券名字 */
    couponGroupName?: string;
    /** 有效期,年月日的大小, 如1, 100 */
    delayTime?: number;
    /** 日期类型,1:年,2:月,3:日 */
    delayTimeType?: number;
    /** 使用说明 */
    description?: string;
    /** 结束时间 */
    fixedEndTime?: string;
    /** 开始日期 */
    fixedStartTime?: string;
    /** 优惠券组合id */
    id?: string;
    /** 折扣限额 */
    limitPreferential: number;
    /** 减金额 */
    preferentialDiscount: number;
    /** 适用项目价格,1正价, 2折扣价 */
    priceScope?: number;
    /** 项目范围 */
    projectScope?: BaseScopeDto[];
    /** 减满金额金额 */
    requirementsPrice: number;
  };

  type EditOrderDto = {
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 订单日期 */
    orderDate?: string;
    /** 订单id */
    orderId: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 订单备注 */
    remark?: string;
  };

  type EditOrderVouchersCouponVo = {
    /** 优惠券名字 */
    couponGroupName?: string;
    /** 有效期,年月日的大小, 如1, 100 */
    delayTime?: number;
    /** 日期类型,1:年,2:月,3:日 */
    delayTimeType?: number;
    /** 使用说明 */
    description?: string;
    /** 结束时间 */
    fixedEndTime?: string;
    /** 开始日期 */
    fixedStartTime?: string;
    /** 优惠券组合id */
    id?: string;
    /** 减金额 */
    preferentialPrice: number;
    /** 适用项目价格,1正价, 2折扣价 */
    priceScope?: number;
    /** 项目范围 */
    projectScope?: BaseScopeDto[];
    /** 减满金额金额 */
    requirementsPrice: number;
  };

  type EditProjectCouponGroupVo = {
    /** 优惠券名字 */
    couponGroupName?: string;
    /** 有效期,年月日的大小, 如1, 100 */
    delayTime?: number;
    /** 日期类型,1:年,2:月,3:日 */
    delayTimeType?: number;
    /** 使用说明 */
    description?: string;
    /** 面值 */
    faceValue?: number;
    /** 结束时间 */
    fixedEndTime?: string;
    /** 开始日期 */
    fixedStartTime?: string;
    /** 优惠券组合id */
    id?: string;
    /** 适用项目价格,1正价, 2折扣价 */
    priceScope?: number;
    /** 项目范围 */
    projects: EditProjectCouponItemVo[];
  };

  type EditProjectCouponItemVo = {
    /** 图片地址 */
    img?: string;
    /** 返回的优惠券实例id,加入购物车时携带此id */
    instanceId?: string;
    /** 项目id(商品skuId或服务Id) */
    projectId: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目数量 */
    projectNum: number;
    /** 项目价格 */
    projectPrice: number;
    /** 类别,1:商品,2:服务,3:套餐,4:开卡,5:充值 */
    projectType: number;
    /** 规格值 */
    specsValues?: string;
  };

  type EmployeeBaseVo = {
    /** 1男,2女 */
    gender?: number;
    /** 员工id */
    id?: string;
    /** 是否手艺人, 1是,0否 */
    isCraftMan?: number;
    /** 员工电话 */
    mobile: string;
    /** 员工姓名 */
    name?: string;
    /** 员工头像 */
    profile?: string;
    /** 用户id */
    userId?: string;
  };

  type EmployeeDetailVo = {
    /** 生日 */
    birthday?: string;
    /** 入职日期 */
    createTime?: string;
    /** 部门id */
    deptId?: string;
    /** 邮箱 */
    email?: string;
    /** 1男,2女 */
    gender?: number;
    /** 入职日期 */
    hireDate?: string;
    /** 员工id */
    id?: string;
    /** 身份证 */
    identity?: string;
    /** 是否手艺人, 1是,0否 */
    isCraftMan?: number;
    /** 登陆电话 */
    loginMobile?: string;
    /** 是否创建账号(0不创建1创建) */
    loginStatus?: number;
    /** 员工电话 */
    mobile?: string;
    /** 员工姓名 */
    name?: string;
    /** 昵称 */
    nickname?: string;
    /** 员工工号 */
    number?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 职位id */
    postId?: string;
    /** 员工头像 */
    profile?: string;
    /** 角色id集合 */
    roleIds?: string;
    /** 员工薪资 */
    salary?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type EmployeeDto = {
    /** 员工生日 */
    birthday?: string;
    /** 验证码 */
    code?: string;
    /** 部门id */
    deptId: string;
    /** 邮箱 */
    email?: string;
    /** 性别, 1男,2女,0空 */
    gender?: number;
    /** 入职日期 */
    hireDate?: string;
    /** 员工id(新增时不填) */
    id: string;
    /** 身份证 */
    identity?: string;
    /** 是否手艺人, 1是,0否 */
    isCraftMan?: number;
    /** 是否创建账号(0不创建1创建) */
    loginStatus?: number;
    /** 员工电话 */
    mobile: string;
    /** 员工姓名 */
    name: string;
    /** 昵称 */
    nickname?: string;
    /** 员工工号 */
    number?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 职位id */
    postId: string;
    /** 员工头像 */
    profile?: string;
    /** 员工薪资 */
    salary?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 类型 1门店，2企业 */
    type: number;
  };

  type employeeNameListUsingGETParams = {
    /** 是否手艺人, 1查手艺 */
    isCraftMan?: number;
    /** 员工姓名 */
    name?: string;
  };

  type EmployeeNameVo = {
    /** 员工id */
    id?: string;
    /** 员工姓名 */
    name?: string;
  };

  type EmployeeVo = {
    /** 创建时间 */
    createTime?: string;
    /** 部门id */
    deptId?: string;
    /** 部门名称 */
    deptName?: string;
    /** 员工性别 */
    gender?: number;
    /** 入职日期 */
    hireDate?: string;
    /** 员工id */
    id?: string;
    /** 是否是负责人(0不是1是) */
    isPrincipal?: number;
    /** 登陆手机 */
    loginMobile?: string;
    /** 是否创建账号(0不创建1创建) */
    loginStatus?: number;
    /** 员工电话 */
    mobile?: string;
    /** 员工姓名 */
    name?: string;
    /** 昵称 */
    nickname?: string;
    /** 员工工号 */
    number?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 职位id */
    postId?: string;
    /** 职位名称 */
    postName?: string;
    /** 员工头像 */
    profile?: string;
    /** 员工薪资 */
    salary?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type esPageNewUsingGETParams = {
    /** 起始位置 */
    from: number;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type esPageUsingGET1Params = {
    /** 分类id(全部传空) */
    categoryId?: number;
    /** 当前页 */
    current: number;
    /** 搜索关键字(项目名称,项目名称首拼, 检索码) */
    keyword?: string;
    /** 排序方式 */
    order?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type esPageUsingGET2Params = {
    /** 分类id(全部传空) */
    categoryId?: number;
    /** 当前页 */
    current: number;
    /** 搜索关键字(项目名称,项目名称首拼, 检索码) */
    keyword?: string;
    /** 排序方式 */
    order?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type esPageUsingGETParams = {
    /** 当前页 */
    current: number;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type EsSpecsDetailVo = {
    /** 售价 */
    price: number;
    /** 商品规格条形码 */
    specsBarCode: string;
    /** 商品规格id */
    specsId: string;
    /** 商品规格值id集合 */
    specsValueDetailVos: string;
  };

  type EsSpecsKeyDetailVo = {
    /** 商品规格属性id */
    id: string;
    /** 商品规格属性名称 */
    name: string;
    /** 商品规格属性值列表 */
    valueVos: EsSpecsValueVo[];
  };

  type EsSpecsValueVo = {
    /** 商品规格属性值id */
    id: string;
    /** 商品规格属性id */
    specsKeyId: string;
    /** 商品规格属性值 */
    value: string;
  };

  type ExchangeDto = {
    /** 请输入兑换数量 */
    count: number;
    /** 礼品ID */
    id: string;
    /** 兑换积分 */
    integral: number;
    /** 兑换总积分 */
    integralTotal: number;
  };

  type ExtendDto = {
    /** 扩展名称 */
    name?: string;
    /** 扩展值 */
    value?: string;
  };

  type ExtendSaveDto = {
    /** 会员扩展信息 */
    extend?: ExtendDto[];
    /** 会员id */
    memberId: string;
  };

  type ExtendTemplateDto = {
    /** 扩展模板ID(新增时不传) */
    id: string;
    /** 扩展模板名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type ExtendTemplateVo = {
    /** 创建时间 */
    createTime?: string;
    /** 扩展模板ID */
    id?: string;
    /** 扩展模板名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type ExtendVo = {
    /** 会员扩展信息 */
    extend?: ExtendDto[];
  };

  type ExtensionCountMeaItemDetailVo = {
    /** 剩余金额 */
    projectBalanceAmount?: number;
    /** 剩余次数 */
    projectBalanceNum?: number;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 变动金额 */
    projectOperationAmount?: number;
    /** 变动次数 */
    projectOperationNum?: number;
    /** 项目规格 */
    projectSpecificationValue?: string;
    /** 项目类型 */
    projectType?: number;
  };

  type ExtensionCountMealBuyItemVo = {
    /** 次卡名称 */
    countMealNames?: string[];
    /** 次卡类型描述 */
    countMealTypes?: string[];
  };

  type ExtensionCountMealDelay = {
    /** 次卡id */
    countMealId: string;
    /** 截止日期 */
    endTime?: string;
    /** 金额卡id */
    moneyMealId: string;
  };

  type ExtensionCountMealDelayVo = {
    /** 次卡名称 */
    countMealName?: string;
    /** 次卡类型描述 */
    countMealType?: string;
    /** 新到期日期 */
    currentEndTime?: string;
    /** 原到期日期 */
    originEndTime?: string;
  };

  type ExtensionCountMealDetailVo = {
    /** 购物车id */
    carId?: string;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 剩余总金额 */
    countMealBalanceAmount?: number;
    /** 剩余总次数 */
    countMealBalanceNum?: number;
    /** 结束日期 */
    countMealEndTime?: string;
    /** 次卡id */
    countMealId?: string;
    /** 次卡模板id */
    countMealModelId?: string;
    /** 次卡名称 */
    countMealName?: string;
    /** 变动金额 */
    countMealOperationAmount?: number;
    /** 变动前日期 */
    countMealOperationEndTime?: string;
    /** 变动次数 */
    countMealOperationNum?: number;
    /** 次卡类型 */
    countMealType?: number;
    /** 次卡类型描述 */
    countMealTypeDesc?: string;
    /** 项目明细 */
    projects?: ExtensionCountMeaItemDetailVo[];
  };

  type ExtensionCountMealDto = {
    /** 次卡模板id */
    countMealModelId?: string;
    /** 次卡类型 */
    countMealType?: number;
    /** 金额止 */
    max?: number;
    /** 金额起 */
    min?: number;
  };

  type ExtensionCountMealReimburse = {
    /** 次卡id */
    mealId: string;
    /** 金额卡id */
    moneyMealId: string;
    /** 项目id(单项计次需填) */
    projectId: string;
    /** 退回金额 */
    reimburseGivenAmount: number;
    /** 退回实收卡金 */
    reimbursePaidInAmount: number;
    /** 退回次数 */
    returnCount: number;
    /** 退回金额 */
    returnMoney: number;
  };

  type ExtensionCountMealStatistics = {
    /** 次卡id */
    countMealId?: string;
    /** 次卡名称 */
    countMealName?: string[];
    /** 消费次数 */
    countMealOperationNum?: number;
    /** 项目名称 */
    projects?: string[];
  };

  type ExtensionCouponDetailItemVo = {
    /** 面值 */
    projectFacePrice?: number;
    /** 项目id */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 项目数量 */
    projectNum?: number;
    /** 项目规格 */
    projectSpecificationValue?: string;
    /** 项目类型 */
    projectType?: number;
    /** 项目类型 */
    projectTypeDesc?: string;
  };

  type ExtensionCouponDetailVo = {
    /** 赠送数量 */
    couponHivingNum?: number;
    /** 赠送类别 */
    couponHivingType?: number;
    /** 赠送类别 */
    couponHivingTypeDesc?: string;
    /** 优惠券模板id */
    couponModelId?: number;
    /** 优惠券名称 */
    couponName?: string;
    /** 总面值 */
    couponTotalFacePrice?: number;
    /** 优惠券总数量 */
    couponTotalNum?: number;
    /** 优惠券类型 */
    couponType?: number;
    /** 到期时间 */
    endTime?: string;
    /** 限额 */
    limit?: number;
    /** 项目明细 */
    projects?: ExtensionCouponDetailItemVo[];
  };

  type ExtensionCouponHivingVo = {
    /** 优惠券名称列表 */
    couponNames?: string[];
    /** 优惠券类别描述 */
    couponTypesDesc?: string[];
    /** 优惠券赠送方式 */
    hivingType?: number;
    /** 优惠券赠送方式描述 */
    hivingTypeDesc?: string;
  };

  type ExtensionCouponQueryDto = {
    /** 优惠券类别 */
    couponType?: number;
    /** 优惠券赠送方式 */
    hivingType?: number;
  };

  type ExtensionGiftExchangeDto = {
    /** 兑换类型1兑换码2积分 */
    exchangeType: number;
    /** 要兑换的礼品 */
    exchanges: ExchangeDto[];
    /** 金额卡id */
    moneyMealId: string;
    /** 备注 */
    remark?: string;
  };

  type ExtensionGiftExchangeItemVo = {
    /** 兑换数量 */
    count?: number;
    /** 积分 */
    exchangeIntegral?: number;
    /** 礼品名称 */
    giftName?: string;
  };

  type ExtensionGiftExchangeQueryDto = {
    /** 兑换类型(1:兑换码,2:积分 */
    exchangeType?: number;
    /** 兑换状态 */
    status?: number;
  };

  type ExtensionGiftExchangeVo = {
    /** 有效期 */
    endTime?: string;
    /** 兑换明细 */
    exchangeItems?: ExtensionGiftExchangeItemVo[];
    /** 兑换类型 */
    exchangeType?: number;
    /** 兑换类型描述 */
    exchangeTypeDesc?: string;
    /** 兑换状态(1:已兑换,2:已作废) */
    status?: number;
    /** 状态描述 */
    statusDesc?: string;
    /** 总积分/兑换码 */
    totalIntegralOrCode?: string;
  };

  type ExtensionGiftItemVo = {
    /** 兑换码 */
    code?: string;
    /** 有效期 */
    endTime?: string;
    /** 积分总额 */
    exchangeIntegral?: number;
    /** 积分类型 */
    exchangeType?: number;
    /** 积分类型描述 */
    exchangeTypeDesc?: string;
    /** 礼品名称列表 */
    giftNames?: string[];
    /** 兑换状态(1:已兑换,2:已作废) */
    status?: number;
    /** 状态描述 */
    statusDesc?: string;
  };

  type ExtensionIncomeExpenseVo = {
    /** 收支分类id */
    categoryId?: string;
    /** 收支分类名称 */
    categoryName?: string;
    /** 单据名称 */
    orderCategory?: number;
    /** 单据名称描述 */
    orderCategoryDesc?: string;
    /** 附件地址 */
    scanningUrl?: string;
  };

  type ExtensionMemberReimbursementItemVo = {
    /** 剩余欠款 */
    creditAmountBalance?: number;
    /** 还款金额 */
    creditOperationAmount?: number;
    /** 积分余额 */
    integralBalance?: number;
    /** 积分变动数 */
    integralOperation?: number;
  };

  type ExtensionMoneyMealCreateListVo = {
    /** 类型(1:新开卡,2:补老卡 */
    crateTypeDesc?: string;
    /** 到期时间 */
    endTime?: string;
    /** 赠送账户变动金额(开卡/充值/取款/退卡) */
    givenOperationAmount?: number;
    /** 积分变动((开卡/充值/取款/退卡)) */
    integralOperation?: number;
    /** 入会费 */
    joinAmount?: number;
    /** 金额卡卡号 */
    moneyMealCardId?: string;
    /** 金额卡名称(卡类型) */
    moneyMealCardName?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 金额卡模板id */
    moneyMealModelId?: string;
    /** 实收账户变动金额(开卡/充值/取款/退卡) */
    paidInOperationAmount?: number;
  };

  type ExtensionMoneyMealDetailVo = {
    /** 类型 */
    crateTypeDesc?: string;
    /** 到期时间 */
    endTime?: string;
    /** 入会费 */
    joinAmount?: number;
  };

  type ExtensionMoneyMealDto = {
    /** 金额卡卡号 */
    moneyMealCardId: string;
    /** 金额卡模板id */
    moneyMealModelId: string;
  };

  type ExtensionProjectCommissionItemDoc = {
    activationStatus?: number;
    carId?: number;
    commissionRate?: number;
    commissionValue?: number;
    employeeId?: number;
    employeeName?: string;
    id?: number;
    isAppoint?: number;
    performanceRate?: number;
    performanceValue?: number;
    postId?: number;
    postName?: string;
    projectId?: number;
  };

  type ExtensionProjectItemCommissionVo = {
    /** 激活状态0散客1正式会员 */
    activationStatus: number;
    commissionRate?: number;
    commissionValue?: number;
    employeeId?: string;
    employeeName?: string;
    id?: string;
    /** 是否指定0不指定1指定 */
    isAppoint: number;
    performanceRate?: number;
    performanceValue?: number;
    postId?: string;
    postName?: string;
  };

  type ExtensionProjectItemDetailVo = {
    /** 购物车id */
    carId?: string;
    /** 分类id */
    categoryId?: string;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 套餐id */
    countMealId?: string;
    /** 最终优惠后金额 */
    couponAmount?: number;
    /** 订单id */
    orderId?: string;
    /** 原价总金额 */
    originAmount?: number;
    /** 商品原始id */
    productId?: string;
    /** 项目券id */
    projectCouponInstanceId?: string;
    /** 项目折扣 */
    projectDiscount?: number;
    /** 折后金额 */
    projectDiscountedPrice?: number;
    /** 商品/服务多规格id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 订单级折扣后总金额 */
    projectNeedPayAmount?: number;
    /** 项目数量 */
    projectNum?: number;
    /** 项目价格 */
    projectPrice?: number;
    /** 项目规格 */
    projectSpecification?: string;
    /** 类别(1:商品,2:服务) */
    projectType?: number;
    /** 退货数量 */
    returnNum?: number;
    /** 退货单价 */
    returnPrice?: number;
    /** 退货总价 */
    returnTotalPrice?: number;
  };

  type ExtensionProjectItemVo = {
    /** 消费订单_项目列表 */
    items?: string[];
    /** 原单号 */
    originOrderSn?: string;
  };

  type ExtensionRecordsQueryVo = {
    /** 项目明细 */
    items?: string[];
    /** 项目数量 */
    projectNum?: number;
    /** 服务员工 */
    serviceEmployees?: string[];
    /** 店铺名称 */
    storeName?: string;
  };

  type findResourceListByRoleIdUsingGETParams = {
    /** roleId */
    roleId: number;
  };

  type findRoleIdByEmployeeIdUsingGETParams = {
    /** employeeId */
    employeeId: number;
  };

  type getAccountChangeRecordUsingGETParams = {
    /** 账户类型1积分账户2欠款账户3实收账户4赠送账户 */
    accountType?: number[];
    /** 开始时间 */
    beginTime?: string;
    /** 当前页 */
    current: number;
    /** 员工id(-1全部) */
    employeeId?: number;
    /** 结束时间 */
    endTime?: string;
    /** 会员卡id */
    mealId: number;
    /** 会员id */
    memberId: number;
    /** 操作类型-1全部1开卡充值2续卡充值3消费支出4取款支出5购买次卡6开卡赠送7充值赠送8开卡积分9充值积分10消费赠送11兑换礼品12调整增加13调整减少14还欠款15消费欠款 */
    operationType?: number;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type getBySearchCodeUsingGETParams = {
    /** searchCode */
    searchCode: string;
  };

  type getLastShopUsingPOSTParams = {
    /** user_id */
    user_id?: number;
  };

  type getMemberCountMealAppUsingGETParams = {
    /** 会员id */
    memberId: number;
    /** 次卡/项目名称 */
    name?: string;
    /** 状态(0正常1已使用2已退卡3已过期) */
    status?: number;
  };

  type getMemberCountMealUsingGETParams = {
    /** 会员id */
    memberId: number;
    /** 次卡/项目名称 */
    name?: string;
    /** 状态(0正常1已使用2已退卡3已过期) */
    status?: number;
  };

  type getMemberForSmsUsingGETParams = {
    /** 办卡类型 1有卡顾客2无卡顾客-1全部 */
    activationStatus: number;
    /** 当前页 */
    current: number;
    /** 会员性别 1：男，2：女，-1:全部 */
    gender: number;
    /** 积分开始 */
    integralBegin?: number;
    /** 积分结束 */
    integralEnd?: number;
    /** 查询条件(姓名手机号卡号车牌号) */
    keyword?: string;
    mealModelIds?: number[];
    /** 开卡开始时间 */
    openCardBeginDate?: string;
    /** 开卡结束时间 */
    openCardEndDate?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type getMobileByUrlUsingGETParams = {
    /** url */
    url: string;
  };

  type getMobileCodeUsingPOSTParams = {
    /** mobile */
    mobile: string;
  };

  type getMoneyMealDocUsingGETParams = {
    /** 开卡人id(-1全部) */
    createBy?: number;
    /** 当前页 */
    current: number;
    /** 到期开始时间 */
    expireBeginTime?: string;
    /** 到期结束时间 */
    expireEndTime?: string;
    /** 搜索关键字(姓名,姓名首拼,手机号,卡号) */
    keyword?: string;
    /** 卡类型id(-1全部) */
    mealTypeId?: number;
    /** 开卡开始时间 */
    openBeginTime?: string;
    /** 开卡结束时间 */
    openEndTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type getMoneyMealMemberByIdUsingGETParams = {
    /** mealId */
    mealId: number;
  };

  type getMoneyMealMembersUsingGETParams = {
    /** memberId */
    memberId: number;
  };

  type getMsgAccountRecordsUsingGETParams = {
    /** 变更开始时间 */
    beginDate?: string;
    /** 当前页 */
    current: number;
    /** 变更结束时间 */
    endDate?: string;
    /** 操作类型1充值2赠送3扣除4发送 */
    operation?: number;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type getMsgSendDetailUsingGETParams = {
    /** msgSendRecordId */
    msgSendRecordId: number;
  };

  type getNormalListUsingGET1Params = {
    /** 次卡名称 */
    name?: string;
    /** 次卡类型(-1全部1单项计次2整体计次3不限计次) */
    type?: number;
  };

  type getNormalListUsingGET3Params = {
    /** keyword */
    keyword: string;
  };

  type getNormalListUsingGET4Params = {
    /** name */
    name?: string;
  };

  type getOrderDiscountCouponDetailUsingGETParams = {
    /** projectCouponId */
    projectCouponId: number;
  };

  type getOrderVouchersCouponDetailUsingGETParams = {
    /** projectCouponId */
    projectCouponId: number;
  };

  type getPostTreeUsingGETParams = {
    /** status */
    status: number;
  };

  type getProjectCouponDetailUsingGETParams = {
    /** projectCouponId */
    projectCouponId: number;
  };

  type getServeBaseVosUsingGETParams = {
    /** condition */
    condition: string;
  };

  type getSpecsBaseUsingGETParams = {
    /** 商品id */
    productId: number;
    /** 商品规格属性值id集合 */
    specsValueIds: string[];
  };

  type getSpecsKeyDetailUsingGETParams = {
    /** id */
    id: number;
  };

  type getSpecsValueBaseVosUsingGETParams = {
    /** condition */
    condition: string;
  };

  type getStoreDetailInfoByStoreIdUsingGETParams = {
    /** store_id */
    store_id: number;
  };

  type GiftDto = {
    /** 条形码 */
    barCode: string;
    /** 编号 */
    giftCode: string;
    /** 礼品ID(新增时不传) */
    id: string;
    /** 兑换积分 */
    integral: number;
    /** 礼品名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 备注 */
    remarks: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 有效期类型1年2月3日 */
    validTimeType: number;
    /** 有效期时间值 */
    validTimeValue: number;
  };

  type giftExchangeDetailUsingPOSTParams = {
    /** orderId */
    orderId: number;
  };

  type GiftVo = {
    /** 条形码 */
    barCode: string;
    /** 编号 */
    giftCode: string;
    /** 礼品ID */
    id: string;
    /** 兑换积分 */
    integral: number;
    /** 礼品名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 备注 */
    remarks: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 有效期类型1年2月3日 */
    validTimeType: number;
    /** 有效期时间值 */
    validTimeValue: number;
  };

  type GivingCouponDetailDto = {
    /** 优惠券组合id */
    couponModelId: string;
    /** 优惠券名称 */
    couponName: string;
    /** 优惠券类型 */
    couponType: number;
    endTime?: string;
    /** 会员id */
    memberId?: string;
    /** 优惠券总数量 */
    num: number;
    /** 项目列表 */
    projects: CreateProjectCouponItemDto[];
    /** 优惠券总面值 */
    totalFacePrice: number;
  };

  type HandDto = {
    /** 性别1男2女 */
    gender?: number;
    /** 手牌编号id(新增时不填) */
    id: string;
    /** 手牌编号 */
    number: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(0空闲1停用) */
    status?: number;
  };

  type HandVo = {
    /** 性别1男2女 */
    gender?: number;
    /** 房间分类id */
    id?: string;
    /** 手牌编号 */
    number: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(0空闲1停用) */
    status?: number;
  };

  type HivingCouponDto = {
    /** 优惠券列表 */
    couponItems: GivingCouponDetailDto[];
    /** 赠送类型(1:开卡,2:充值,3:消费,4:微信互动,5:其他) */
    hivingType: number;
    /** 会员id */
    memberId: string;
    /** 自定义订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 订单备注 */
    remark?: string;
  };

  type HomePageItem = {
    /** 现金业绩 */
    cashIncome?: number;
    /** 客数 */
    clientCount?: number;
    /** 日期 */
    date?: string;
    /** 收入 */
    income?: number;
  };

  type HomePageVo = {
    /** 日期序列 */
    items?: HomePageItem[];
    /** 会员转化率 */
    memberDealRate?: number;
    /** 新增会员 */
    newMember?: number;
    /** 客单价 */
    orderAvgAmount?: number;
    /** 现金业绩 */
    totalCashIncome?: number;
    /** 总客数 */
    totalClientCount?: number;
    /** 总收入 */
    totalIncome?: number;
    /** 散客数 */
    totalIndividualCount?: number;
    /** 会员数 */
    totalMemberCount?: number;
  };

  type IndustryDetail = {
    /** 行业id, 新建为0 */
    id: string;
    /** 行业名称 */
    name: string;
    /** 父级id */
    parentId: string;
  };

  type IntegralBalanceVo = {
    /** 当前剩余积分 */
    balanceIntegral?: number;
    /** 累计积分 */
    cumulativeIntegral?: number;
  };

  type integralChangeRecordUsingGETParams = {
    /** 开始时间 */
    beginTime?: string;
    /** 当前页 */
    current: number;
    /** 结束时间 */
    endTime?: string;
    /** 会员id */
    keyword?: string;
    /** 操作类型3消费支出4取款支出5购买次卡8开卡积分9充值积分10消费赠送11兑换礼品12调整增加13调整减少 */
    operationType?: number;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type IntegralChangeRecordVo = {
    /** 当前余额 */
    balance?: number;
    /** 变更金额/积分 */
    change?: number;
    /** 变更时间 */
    changeTime?: string;
    /** 主键 */
    id?: string;
    /** 会员id */
    memberId?: string;
    /** 会员名称 */
    memberName?: string;
    /** 会员电话 */
    mobile?: string;
    /** 操作类型3消费支出4取款支出5购买次卡8开卡积分9充值积分10消费赠送11兑换礼品12调整增加13调整减少 */
    operationType?: number;
    /** 单据号 */
    orderSn?: string;
  };

  type IntegralConfigDto = {
    /** 消费积分比 */
    consumeIntegral?: number;
    /** 积分兑现 */
    integralCash?: number;
    /** 套餐积分比 */
    mealIntegral?: number;
    /** 开卡积分比 */
    openIntegral?: number;
    /** 充值积分比 */
    rechargeIntegral?: number;
  };

  type IntegralConfigVo = {
    /** 消费积分比 */
    consumeIntegral?: number;
    /** 积分兑现(1元=xx积分, 如integralCash=10, 表示10积分兑换1元.) */
    integralCash?: number;
    /** 套餐积分比 */
    mealIntegral?: number;
    /** 开卡积分比 */
    openIntegral?: number;
    /** 充值积分比 */
    rechargeIntegral?: number;
  };

  type IntroduceDto = {
    /** 描述图片 */
    imgs: string[];
    /** 描述 */
    remark: string;
  };

  type LadderConfigDto = {
    /** 提成计算方式1落段2逐段 */
    calculation: number;
    /** 区分指定非指定(0不区分1区分) */
    distinguishAppointType?: number;
    /** 区分会员散客(0不区分1区分) */
    distinguishMemberType?: number;
    /** id(新增时不填) */
    id?: string;
    /** 区段设置 */
    ladderSections: LadderSectionConfig[];
    /** 业绩类型(1:服务业绩,2:产品业绩,3:开卡业绩,4:充值业绩,5次卡业绩) */
    performanceTypes: number[];
    /** 职位id(-1全部) */
    postId: string;
  };

  type LadderConfigVo = {
    /** 提成计算方式1落段2逐段 */
    calculation?: number;
    /** 区分指定非指定(0不区分1区分) */
    distinguishAppointType?: number;
    /** 区分会员散客(0不区分1区分) */
    distinguishMemberType?: number;
    /** id */
    id?: string;
    /** 区段设置 */
    ladderSections?: LadderSectionConfig[];
    /** 业绩类型(1:服务业绩,2:产品业绩,3:开卡业绩,4:充值业绩,5次卡业绩) */
    performanceTypes?: number[];
    /** 职位id(-1全部) */
    postId?: string;
  };

  type LadderSectionConfig = {
    distinguishAll?: DistinguishAll;
    distinguishAllNot?: DistinguishAllNot;
    distinguishAppoint?: DistinguishAppoint;
    distinguishMember?: DistinguishMember;
    /** 提成区段起始 */
    sectionBegin: number;
    /** 提成区段结束 */
    sectionEnd: number;
  };

  type listUsingGET1Params = {
    /** 职位id */
    postId: number;
  };

  type listUsingGET3Params = {
    /** 类型(1:项目提成,2:项目业绩) */
    type: number;
  };

  type listUsingGET4Params = {
    /** 类型(1:开卡充值提成,2:开卡充值业绩) */
    type: number;
  };

  type listUsingGET6Params = {
    /** 类型(1:次卡销售提成,2次卡销售业绩) */
    type: number;
  };

  type listUsingGET7Params = {
    /** 职位id */
    postId: number;
  };

  type loginByCodeUsingPOSTParams = {
    /** 验证码 */
    code: string;
    /** 手机号 */
    mobile: string;
  };

  type loginByPassWordUsingPOSTParams = {
    /** mobile */
    mobile: string;
    /** password */
    password: string;
  };

  type MapStringString_ = true;

  type MassTextingDto = {
    /** 手机号列表 */
    mobiles?: string[];
    /** 短信内容 */
    msg?: string;
  };

  type MealBaseVo = {
    /** 会员卡卡号 */
    cardSn?: string;
    /** 到期时间 */
    endTime?: string;
    /** 赠送账户余额 */
    giveMoneyBalance?: number;
    /** 赠送账户变动金额 */
    giveOperationMoney?: number;
    /** 会员卡id */
    id?: string;
    /** 入会费 */
    joinMoney?: number;
    /** 会员卡模板id */
    mealId?: string;
    /** 实收账户余额 */
    moneyBalance?: number;
    /** 实收账户变动金额 */
    moneyOperation?: number;
    /** 会员卡名称 */
    name?: string;
    /** 金额卡类型1新开卡2补老卡 */
    type?: number;
  };

  type MealTypeBaseVo = {
    /** 会员卡类型id */
    id?: string;
    /** 会员卡类型名称 */
    name?: string;
  };

  type MemberCountMealAppVo = {
    /** 余额 */
    balance?: number;
    /** 过期时间 */
    expireTime?: string;
    /** 次卡id */
    mealId?: string;
    /** 次卡名称 */
    mealName?: string;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    mealType?: number;
    /** 售价 */
    price?: number;
    /** 项目内容 */
    projects?: ProjectAppVo[];
    /** 状态(-1全部0正常1已使用2已退卡3已过期) */
    status?: number;
    /** 剩余数量 */
    surplusCount?: number;
    /** 总数量 */
    totalCount?: number;
  };

  type MemberCountMealVo = {
    /** 余额 */
    balance?: number;
    /** 过期时间 */
    expireTime?: string;
    /** 是否已激活(0未激活1已激活) */
    isActivation?: number;
    /** 次卡id */
    mealId?: string;
    /** 次卡名称 */
    mealName?: string;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    mealType?: number;
    /** 项目内容 */
    projects?: ProjectDto[];
    /** 状态(-1全部0正常1已使用2已退卡3已过期) */
    status?: number;
    /** 剩余数量 */
    surplusCount?: number;
  };

  type MemberDetailVo = {
    /** 激活状态0散客1正式会员 */
    activationStatus?: number;
    /** 生日 */
    birthday?: string;
    /** 生日类型1公历2农历 */
    birthdayType?: number;
    /** 车牌号 */
    carNum?: string;
    /** 来源渠道 */
    channel?: string;
    /** 挂账金额 */
    chargeMoney?: number;
    /** 服务顾问 */
    consultants?: Record<string, any>;
    /** 手艺人 */
    craftMans?: Record<string, any>;
    /** 会员性别 1：男，2：女，0：空 */
    gender?: number;
    /** 会员id */
    id?: string;
    /** 身份证 */
    identity?: string;
    /** 积分 */
    integral?: number;
    /** 最后消费时间 */
    lastConsumeTime?: string;
    /** 会员电话 */
    mobile?: string;
    /** 会员名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 头像 */
    profile?: string;
    /** 最后一次消费项目 */
    projectNames?: string[];
    /** 推荐人Id */
    recommendId?: string;
    /** 推荐人名称 */
    recommendName?: string;
    /** 备注 */
    remarks?: string;
    /** 最后一次服务员工 */
    serviceEmployeeNames?: string[];
    /** 状态 */
    status?: number;
    /** 所属门店名称 */
    storeName?: string;
  };

  type MemberDoc = {
    /** 生日 */
    birthday?: string;
    /** 车牌号 */
    carNum?: string;
    /** 会员卡卡号集合 */
    cardIds?: string[];
    /** 服务顾问 */
    consultants?: string;
    /** 首拼 */
    firstLetter?: string;
    /** 会员性别 1：男，2：女，0：空 */
    gender?: number;
    /** 会员 id */
    id?: string;
    /** 最后消费时间 */
    lastConsumeTime?: string;
    /** 会员电话 */
    mobile?: string;
    /** 会员名称 */
    name?: string;
    /** 头像 */
    profile?: string;
    /** 推荐人 */
    recommends?: string;
    /** 状态 */
    status?: number;
  };

  type MemberDto = {
    /** 生日 */
    birthday?: string;
    /** 生日类型1公历2农历 */
    birthdayType?: number;
    /** 车牌号 */
    carNum?: string;
    /** 来源渠道 */
    channel?: string;
    /** 服务顾问 */
    consultantIds?: string;
    /** 手艺人 */
    craftManIds?: string;
    /** 会员性别 1：男，2：女，0：空 */
    gender: number;
    /** 会员id(新增时不传) */
    id: string;
    /** 身份证 */
    identity?: string;
    /** 会员电话 */
    mobile: string;
    /** 会员名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 会员头像 */
    profile?: string;
    /** 推荐人 */
    recommendId?: string;
    /** 备注 */
    remarks?: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type MemberForSmsVo = {
    /** 余额 */
    balance?: number;
    /** 车牌号 */
    carNum?: string;
    /** 会员性别 1：男，2：女，0：未知 */
    gender?: number;
    /** id */
    id?: string;
    /** 卡类型 */
    mealModelName?: string;
    /** 卡号 */
    mealModelNum?: string;
    /** 会员电话 */
    mobile?: string;
    /** 会员名称 */
    name?: string;
    /** 头像 */
    profile?: string;
  };

  type MemberRecordsQueryDto = {
    /** 当前页 */
    current: number;
    /** 结束日期 */
    endTime?: string;
    /** 搜索关键字(单据号,卡号) */
    keyword?: string;
    /** 会员id */
    memberId: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: number[];
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 开始日期 */
    startTime?: string;
  };

  type MemberVo = {
    /** 生日 */
    birthday?: string;
    /** 生日类型1公历2农历 */
    birthdayType?: number;
    /** 车牌号 */
    carNum?: string;
    /** 持卡数 */
    cardholderCount?: number;
    /** 获取渠道 */
    channel?: string;
    /** 欠款 */
    chargeMoney?: number;
    /** 累计欠款 */
    chargeMoneyCumulative?: number;
    /** 服务顾问 */
    consultants?: string;
    /** 消费次数 */
    consumeCount?: number;
    /** 手艺人 */
    crafts?: string;
    /** 会员性别 1：男，2：女，0：未知 */
    gender?: number;
    /** 会员id */
    id?: string;
    /** 剩余积分 */
    integralBalance?: number;
    /** 累计积分 */
    integralCumulative?: number;
    /** 最后消费时间 */
    lastConsumeTime?: string;
    /** 会员电话 */
    mobile?: string;
    /** 会员名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 推荐人 */
    recommendName?: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 所属店铺 */
    storeName?: string;
  };

  type MessageConfigDto = {
    /** 短信签名 */
    autograph: string;
    /** 收银短信的发送模式1不发送2发送前提示3直接发送 */
    cashierMode: number;
    /** 消费短信的余额显示1实收卡金2实收赠送总额3同时显示实收和赠送金额4不显示余额 */
    consumeBalanceMode: number;
    /** 次卡销售短信的发送模式1不发送2发送前提示3直接发送 */
    countMealMode: number;
    /** 短信中顾客称谓1顾客姓名2姓氏+先生女士3小姐姐或者小哥哥 */
    customerTitle: number;
    /** 主键id */
    id: string;
    /** 短信服务费收取方式1年2月 */
    messageCost: number;
    /** 短信服务费收取方式为年时需要输入 */
    messageCostValue: number;
    /** 短信预警1开启2关闭 */
    messageWarning: number;
    /** 短信预警值 */
    messageWarningValue?: number;
    /** 充值短信的余额显示1实收卡金2实收赠送总额3同时显示实收和赠送金额4不显示余额 */
    rechargeBalanceMode: number;
    /** 充值/开卡短信的发送模式1不发送2发送前提示3直接发送 */
    rechargeMode: number;
  };

  type MessageConfigVo = {
    /** 短信签名 */
    autograph?: string;
    /** 收银短信的发送模式1不发送2发送前提示3直接发送 */
    cashierMode?: number;
    /** 消费短信的余额显示1实收卡金2实收赠送总额3同时显示实收和赠送金额4不显示余额 */
    consumeBalanceMode?: number;
    /** 次卡销售短信的发送模式1不发送2发送前提示3直接发送 */
    countMealMode?: number;
    /** 短信中顾客称谓1顾客姓名2姓氏+先生女士3小姐姐或者小哥哥 */
    customerTitle?: number;
    /** 主键id */
    id?: string;
    /** 短信服务费收取方式1年2月 */
    messageCost?: number;
    /** 短信服务费收取方式为年时需要输入 */
    messageCostValue?: number;
    /** 短信预警1开启2关闭 */
    messageWarning?: number;
    /** 短信预警值 */
    messageWarningValue?: number;
    /** 充值短信的余额显示1实收卡金2实收赠送总额3同时显示实收和赠送金额4不显示余额 */
    rechargeBalanceMode?: number;
    /** 充值/开卡短信的发送模式1不发送2发送前提示3直接发送 */
    rechargeMode?: number;
    /** 主键id */
    storeId?: number;
  };

  type MessageTemplateDto = {
    /** 模板内容 */
    content: string;
    /** 主键id */
    id: string;
  };

  type MessageTemplateVo = {
    /** 模板内容 */
    content?: string;
    /** 主键id */
    id?: string;
    /** 模板可用参数 */
    params?: string[];
    /** 模板类型1收银2充值/办卡3次卡销售 */
    type?: number;
  };

  type MoneyMealBuyDto = {
    /** 卡号 */
    cardNum?: string;
    /** 提成设置 */
    commissionInfos?: ProjectCommissionItem[];
    /** 创建时间 */
    createTime?: string;
    /** 过期时间 */
    expireTime?: string;
    /** 赠送金额 */
    giveMoney?: number;
    /** 赠送积分 */
    integral?: number;
    /** 入会费 */
    joinMoney?: number;
    /** 会员id */
    memberId: string;
    /** 金额 */
    money: number;
    /** 金额套餐id */
    moneyMealId: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单id */
    orderId?: number;
    /** 备注 */
    orderRemark?: string;
    /** 单据号 */
    orderSn?: string;
    /** 密码 */
    pwd?: string;
    /** 备注 */
    remark?: string;
    /** 类型1新开卡2补老卡 */
    type: number;
  };

  type MoneyMealDetailVo = {
    /** 指定有效期时间类型(1年2月3日)(有效期类型为3时输入) */
    appointTimeType?: number;
    /** 指定有效期时间值(有效期类型为3时输入) */
    appointTimeValue?: number;
    /** 消费积分比 */
    consumeIntegral?: number;
    /** 固定有效期开始时间(有效期类型为2时输入) */
    fixedBeginTime?: string;
    /** 固定有效期结束时间(有效期类型为2时输入) */
    fixedEndTime?: string;
    /** 套餐id */
    id?: string;
    /** 图片路径 */
    img?: string;
    /** 是否开启短信服务0不开启1开启 */
    isNote?: boolean;
    /** 赠送金额是否享受卡折扣(0不享受1享受) */
    isRecharge?: boolean;
    /** 入会费 */
    joinMoney?: number;
    /** 最小余额 */
    minBalance?: number;
    /** 最低开卡金额 */
    minOpenMoney?: number;
    /** 最低充值金额 */
    minRechargeMoney?: number;
    /** 套餐名称 */
    name?: string;
    /** 短信服务费 */
    noteMoney?: number;
    /** 开卡赠送金额 */
    openGiveMoney?: number;
    /** 开卡积分比 */
    openIntegral?: number;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品折扣 */
    productDiscount?: number;
    /** 快捷充值 */
    quickRecharge?: QuickRechargeDto[];
    /** 充值赠送金额 */
    rechargeGiveMoney?: number;
    /** 充值积分比 */
    rechargeIntegral?: number;
    /** 备注 */
    remark?: string;
    /** 销售开始时间 */
    saleBeginTime?: string;
    /** 销售结束时间 */
    saleEndTime?: string;
    /** 服务折扣 */
    serveDiscount?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 有效期类型(1永久2固定3指定) */
    validTimeType?: number;
  };

  type MoneyMealDiscount = {
    /** 折扣 */
    discount?: number;
    /** 会员卡模板id */
    moneyMealModelId?: string;
  };

  type MoneyMealDiscountConfigDto = {
    /** 散客折扣 */
    customerDiscount?: number;
    /** 会员卡折扣 */
    discounts?: MoneyMealDiscount[];
    /** 会员折扣 */
    memberDiscount?: number;
    /** 项目id */
    projectId: string;
  };

  type MoneyMealDiscountConfigVo = {
    /** 散客折扣 */
    customerDiscount?: number;
    /** 会员卡折扣 */
    discounts?: MoneyMealDiscount[];
    /** 会员折扣 */
    memberDiscount?: number;
    /** 项目id */
    projectId?: string;
  };

  type MoneyMealDoc = {
    /** 卡号 */
    cardNum?: string;
    /** 创建人id(这里是员工id) */
    createBy?: number;
    /** 创建人名称 */
    createName?: string;
    /** 开卡时间 */
    createTime?: string;
    /** 过期时间 */
    expireTime?: string;
    /** 会员名称首拼 */
    firstLetter?: string;
    /** 赠送余额 */
    giveMoneyBalance?: number;
    /** 会员卡id */
    id?: string;
    /** 会员卡类型Id */
    mealTypeId?: number;
    /** 会员卡类型名称 */
    mealTypeName?: string;
    /** 会员id */
    memberId?: string;
    /** 会员手机 */
    memberMobile?: string;
    /** 会员名称 */
    memberName?: string;
    /** 实收余额 */
    moneyBalance?: number;
    /** 总余额 */
    totalBalance?: number;
    /** 累计充值 */
    totalRecharge?: number;
  };

  type MoneyMealDocVo = {
    /** 赠送余额 */
    giveMoneyBalanceSum?: number;
    /** 实收余额 */
    moneyBalanceSum?: number;
    page?: PageMoneyMealDoc_;
    /** 总余额 */
    totalBalanceSum?: number;
    /** 累计充值 */
    totalRechargeSum?: number;
  };

  type MoneyMealDto = {
    /** 指定有效期时间类型(1年2月3日)(有效期类型为3时输入) */
    appointTimeType: number;
    /** 指定有效期时间值(有效期类型为3时输入) */
    appointTimeValue: number;
    /** 消费积分比 */
    consumeIntegral?: number;
    /** 固定有效期开始时间(有效期类型为2时输入) */
    fixedBeginTime: string;
    /** 固定有效期结束时间(有效期类型为2时输入) */
    fixedEndTime: string;
    /** 套餐id(新增时不填) */
    id: string;
    /** 图片路径 */
    img: string;
    /** 是否开启短信服务0不开启1开启 */
    isNote: boolean;
    /** 赠送金额是否享受卡折扣(0不享受1享受) */
    isRecharge: boolean;
    /** 入会费 */
    joinMoney?: number;
    /** 最小余额 */
    minBalance?: number;
    /** 最低开卡金额 */
    minOpenMoney?: number;
    /** 最低充值金额 */
    minRechargeMoney?: number;
    /** 套餐名称 */
    name: string;
    /** 短信服务费 */
    noteMoney?: number;
    /** 开卡赠送金额 */
    openGiveMoney?: number;
    /** 开卡积分比 */
    openIntegral?: number;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品折扣 */
    productDiscount?: number;
    /** 快捷充值 */
    quickRecharge?: QuickRechargeDto[];
    /** 充值赠送金额 */
    rechargeGiveMoney?: number;
    /** 充值积分比 */
    rechargeIntegral?: number;
    /** 备注 */
    remark?: string;
    /** 销售开始时间 */
    saleBeginTime?: string;
    /** 销售结束时间 */
    saleEndTime?: string;
    /** 服务折扣 */
    serveDiscount?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 有效期类型(1永久2固定3指定) */
    validTimeType: number;
  };

  type MoneyMealMemberVo = {
    /** 卡号 */
    cardNum?: string;
    /** 信息来源 */
    channel?: string;
    /** 消费积分比 */
    consumeIntegral?: number;
    /** 过期时间 */
    expireTime?: string;
    /** 赠送金额 */
    giveMoney?: number;
    /** 会员卡图片路径 */
    img?: string;
    /** 是否开通短信服务 */
    isNote?: boolean;
    /** 赠送金额是否享受卡折扣 */
    isRecharge?: boolean;
    /** 是否设置密码 */
    isSetPwd?: number;
    /** 会员id */
    memberId?: string;
    /** 最低开卡金额 */
    minOpenMoney?: number;
    /** 最低充值金额 */
    minRechargeMoney?: number;
    /** 金额 */
    money?: number;
    /** 会员卡id */
    moneyMealId?: string;
    /** 会员卡类型id */
    moneyMealTypeId?: string;
    /** 会员卡名称 */
    name?: string;
    /** 开卡赠送金额 */
    openGiveMoney?: number;
    /** 开卡积分比 */
    openIntegral?: number;
    /** 商品折扣 */
    productDiscount?: number;
    /** 快捷充值 */
    quickRecharge?: QuickRechargeDto[];
    /** 充值赠送金额 */
    rechargeGiveMoney?: number;
    /** 充值积分比 */
    rechargeIntegral?: number;
    /** 备注 */
    remark?: string;
    /** 服务折扣 */
    serveDiscount?: number;
  };

  type MoneyMealPrice = {
    /** 会员卡模板id */
    moneyMealModelId?: string;
    /** 会员价 */
    price?: number;
  };

  type MoneyMealPriceConfigDto = {
    /** 基本价 */
    basePrice?: number;
    /** 统一会员价 */
    memberPrice?: number;
    /** 会员卡会员价 */
    prices?: MoneyMealPrice[];
    /** 项目id */
    projectId: string;
  };

  type MoneyMealPriceConfigVo = {
    /** 基本价 */
    basePrice?: number;
    /** 统一会员价 */
    memberPrice?: number;
    /** 会员卡会员价 */
    prices?: MoneyMealPrice[];
    /** 项目id */
    projectId?: string;
  };

  type MoneyMealQueryDto = {
    /** 开始日期 */
    beginTime?: string;
    /** 当前页 */
    current: number;
    /** 结束日期 */
    endTime?: string;
    /** 套餐名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态(-1全部0停售1可售2过期) */
    status?: number;
  };

  type moneyMealTopUpDetailUsingPOSTParams = {
    /** orderId */
    orderId: number;
  };

  type MoneyMealVo = {
    /** 信息来源 */
    channel?: string;
    /** 套餐id */
    id: string;
    /** 是否开启短信服务0不开启1开启 */
    isNote?: boolean;
    /** 入会费 */
    joinMoney?: number;
    /** 最低开卡金额 */
    minOpenMoney?: number;
    /** 最低充值金额 */
    minRechargeMoney?: number;
    /** 套餐名称 */
    name?: string;
    /** 开卡赠送金额 */
    openGiveMoney?: number;
    /** 开卡积分比 */
    openIntegral?: number;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品折扣 */
    productDiscount?: number;
    /** 充值赠送金额 */
    rechargeGiveMoney?: number;
    /** 充值积分比 */
    rechargeIntegral?: number;
    /** 服务折扣 */
    serveDiscount?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type MsgAccountDetail = {
    /** 短信剩余条数 */
    msgBalance?: number;
    /** 签名 */
    signature?: string;
  };

  type MsgAccountRecord = {
    /** 变更时间 */
    createTime?: string;
    /** id */
    id?: string;
    /** 数量 */
    msgBalanceOperation?: number;
    /** 短信发送记录Id */
    msgSendRecordId?: string;
    /** 操作类型1充值2赠送3扣除4发送 */
    operation?: number;
  };

  type MsgAccountRecordVo = {
    /** 短信剩余条数 */
    msgBalance?: number;
    page?: PageMsgAccountRecord_;
    /** 签名 */
    signature?: string;
    /** 成功条数 */
    succeed?: number;
  };

  type MsgSendDetail = {
    /** 计费条数 */
    chargingCount?: number;
    /** 内容 */
    content?: string;
    /** 内容长度 */
    contentLength?: number;
    /** 失败条数 */
    failCount?: number;
    /** 失败原因 */
    failReason?: string;
    /** 号码数量 */
    mobileCount?: number;
    /** 手机号列表 */
    mobiles?: string;
    /** 发送时间 */
    sendTime?: string;
    /** 成功条数 */
    succeedCount?: number;
  };

  type NormalTypeListVo = {
    /** 次卡模板 */
    models?: CountMealModelVo[];
    /** 次卡模板类型名称 */
    name?: string;
  };

  type OpenRechargeRecord = {
    /** 会员卡卡号 */
    cardSn?: string;
    /** 提成 */
    commission?: number;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    /** id */
    id?: string;
    /** 卡类型 */
    moneyMealModel?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 单据号 */
    orderSn?: string;
    /** 业绩 */
    performance?: number;
    /** 充值金额 */
    rechargeAmount?: number;
    /** 充值类型3开卡充值4续卡充值 */
    rechargeType?: number;
  };

  type openRechargeRecordUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 员工id */
    employeeId: number;
    /** 结束时间 */
    endDate: string;
    /** 关键字(单据号,顾客姓名,卡号,卡类型) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 充值类型-1全部3开卡充值4续卡充值 */
    rechargeType?: number;
  };

  type OpenRechargeRecordVo = {
    /** 提成(当页合计) */
    commissionCurrentSum?: number;
    /** 提成(总合计) */
    commissionSum?: number;
    page?: PageOpenRechargeRecord_;
    /** 业绩(当页合计) */
    performanceCurrentSum?: number;
    /** 业绩(总合计) */
    performanceSum?: number;
    /** 充值金额(当页合计) */
    rechargeAmountCurrentSum?: number;
    /** 充值金额(总合计) */
    rechargeAmountSum?: number;
  };

  type OrderAmountStatistics = {
    /** 统计: 充值金额 */
    chargeAmount?: number;
    /** 统计: 次卡次数 */
    countMealNum?: number;
    /** 优惠明细 */
    couponStatistics?: OrderDetailCouponVo[];
    /** 统计: 赠送金额 */
    givingAmount?: number;
    /** 统计: 支付金额 */
    paymentAmountStatistics?: number;
    /** 统计: 结算明细 */
    paymentStatistics?: OrderStatisticsPaymentDetailVo[];
  };

  type OrderBaseInfoEmployee = {
    employeeId?: number;
    employeeName?: string;
  };

  type OrderBaseInfosDto = {
    /** 当前页 */
    current: number;
    /** 关键字(订单号/产品) */
    keyword?: string;
    /** 会员id */
    memberId?: number;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type OrderBaseInfosVo = {
    /** 当前页 */
    current: number;
    /** 项目名称 */
    items?: string[];
    /** 订单类别 */
    orderCategory?: number;
    /** 自定义单号 */
    orderCustomerSn?: string;
    /** 订单id */
    orderId?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 服务员工 */
    serviceEmployeeInfos?: OrderBaseInfoEmployee[];
    /** 服务员工 */
    serviceEmployeeNames?: string[];
  };

  type OrderCancelDto = {
    /** 作废订单列表 */
    orderIds?: string;
    /** 在线支付是否退回 */
    reBackOnlinePay?: number;
  };

  type OrderCancelVo = {
    /** 订单id */
    orderId?: string;
    /** 在线支付状态(1:已退款,2:退款失败) */
    paymentCancelStatus?: number;
    /** 退款状态描述 */
    paymentCancelStatusDesc?: string;
    /** 原因 */
    reason?: string;
  };

  type OrderCommonCreateDtoCreateExtensionCancellation_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: CreateExtensionCancellation;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonCreateDtoCreateExtensionReimbursement_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: CreateExtensionReimbursement;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonCreateDtoCreateExtensionTopUp_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: CreateExtensionTopUp;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonCreateDtoCreateExtensionWithdraw_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: CreateExtensionWithdraw;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonCreateDtoExtensionCountMealDelay_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionCountMealDelay;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonCreateDtoExtensionCountMealReimburse_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionCountMealReimburse;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonCreateDtoExtensionGiftExchangeDto_ = {
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionGiftExchangeDto;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 订单编号 */
    orderCustomerSn?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 支付信息 */
    paymentMethodDetailList?: PaymentMethodDetail[];
    /** 是否打印小票(0:不打印,1:打印) */
    printReceipts?: number;
    /** 订单备注 */
    remark?: string;
    /** 是否发送短信(0:不发送,1:发送) */
    sendMobileMessage?: number;
  };

  type OrderCommonQueryDto = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    /** 拓展 信息 */
    extension?: Record<string, any>;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoCreateExtensionIncomeExpense_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    extension?: CreateExtensionIncomeExpense;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoCreateExtensionTopUpListQueryDto_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    extension?: CreateExtensionTopUpListQueryDto;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoExtensionCountMealDto_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    extension?: ExtensionCountMealDto;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoExtensionCouponQueryDto_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    extension?: ExtensionCouponQueryDto;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoExtensionGiftExchangeQueryDto_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    extension?: ExtensionGiftExchangeQueryDto;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoExtensionMoneyMealDto_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    extension?: ExtensionMoneyMealDto;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCommonQueryDtoObject_ = {
    /** 审核状态(1:已审核,0:待审核) */
    audit?: number[];
    /** 制单人id */
    createBy?: number;
    /** 创建日期, 结束日期 */
    createEndTime?: string;
    /** 创建日期, 开始日期 */
    createStartTime?: string;
    /** 当前页 */
    current: number;
    /** 顾客类别(1:会员,2:散客) */
    customerCategory?: number;
    /** 拓展 信息 */
    extension?: Record<string, any>;
    /** 搜索关键字(手机,顾客名字,顾客名字首拼, 顾客车牌, 订单编号,卡号,手工单号) */
    keyword?: string;
    /** 操作人id */
    operationEmployeeId?: number;
    /** 单据日期, 结束日期 */
    orderEndTime?: string;
    /** 订单id */
    orderId?: string;
    /** 单据日期, 开始日期 */
    orderStartTime?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 支付方式id */
    paymentMethod?: string;
    /** 服务员工(员工id) */
    serviceEmployeeId?: string;
    /** 订单来源(1:web订单,2:app订单) */
    source?: number[];
    /** 订单状态(2:待支付,3:已支付,5:已作废) */
    status?: number[];
  };

  type OrderCouponInfosDto = {
    /** 状态(0:全部,1:可用,2:已过期,3:已使用) */
    activityType?: number;
    /** 优惠券类型(默认0:全部,1:项目券,2:代金券,3:折扣券) */
    couponType?: number;
    /** 优惠券名称 */
    keyword?: string;
    /** 会员id */
    memberId: string;
  };

  type OrderCouponInfosVo = {
    /** 优惠券名字 */
    couponGroupName: string;
    /** 序列号 */
    couponSn?: string;
    /** 优惠券类型 */
    couponType?: string;
    /** 优惠券值类型(1:项目券,2:代金券,3:折扣券) */
    couponTypeValue?: number;
    /** 结束时间 */
    endTime?: string;
    /** 面值(代金券:100.00,折扣券:0.8) */
    faceValue?: number;
    /** 面值描述 */
    faceValueDesc?: string;
    /** 赠送类型(1:开卡,2:充值,3:消费,4:微信互动,5:其他) */
    hivingTypeValue?: string;
    /** 优惠券id */
    id: string;
    /** 激活状态,0代表不是,没有,否, 1代表是, 有值, 真(接口约定, 今后不再说明) */
    isActivation?: number;
    /** 是否被使用(0:未使用,1:已使用) */
    isChecked?: number;
    projectInfo?: CreateProjectCouponItemDto;
    /** 开始时间 */
    startTime?: string;
  };

  type OrderCouponInfosVoApp = {
    /** 优惠券名字 */
    couponGroupName: string;
    /** 序列号 */
    couponSn?: string;
    /** 优惠券类型 */
    couponType?: string;
    /** 优惠券值类型(1:项目券,2:代金券,3:折扣券) */
    couponTypeValue?: number;
    /** 结束时间 */
    endTime?: string;
    /** 面值(代金券:100.00,折扣券:0.8) */
    faceValue?: number;
    /** 面值描述 */
    faceValueDesc?: string;
    /** 赠送类型(1:开卡,2:充值,3:消费,4:微信互动,5:其他) */
    hivingTypeValue?: string;
    /** 优惠券id */
    id: string;
    /** 激活状态,0代表不是,没有,否, 1代表是, 有值, 真(接口约定, 今后不再说明) */
    isActivation?: number;
    /** 是否被使用(0:未使用,1:已使用) */
    isChecked?: number;
    /** 限额 */
    limitPreferential?: number;
    /** 项目信 息 */
    projectInfo?: CreateProjectCouponItemDto[];
    /** 门槛 */
    requirementsPrice?: number;
    /** 开始时间 */
    startTime?: string;
  };

  type OrderCouponSettleInfosVo = {
    /** 是否有效(1:有效,0:无效) */
    canBeUse?: number;
    /** 优惠券名字 */
    couponGroupName: string;
    /** 优惠券类型 */
    couponType?: number;
    /** 有效期剩余天数 */
    dayNum?: number;
    /** 有效期 */
    endTime?: string;
    /** 面值 */
    faceValue?: number;
    /** 优惠券id */
    id: string;
    /** 不可用原因 */
    reason?: string;
  };

  type OrderCreateAuditDto = {
    /** 订单id列表 */
    orderIds: string;
    /** 审计状态(1,审核,0反审核,不传值默认为1审核) */
    status?: number;
  };

  type OrderDetailAmountDoc = {
    couponAmount?: number;
    needPaymentAmount?: number;
    originTotalAmount?: number;
    paymentAmount?: number;
  };

  type OrderDetailAmountInfoVo = {
    /** 优惠总额(所有优惠的累加) */
    couponAmount?: number;
    /** 应付金额(实际应该支付的金额) */
    needPaymentAmount?: number;
    /** 订单原价(不含任何优惠) */
    originTotalAmount?: number;
    /** 支付金额 */
    paymentAmount?: number;
  };

  type OrderDetailAuditDoc = {
    createBy?: string;
    createByEmployeeName?: string;
    settleByEmployeeId?: string;
    settleByEmployeeName?: string;
  };

  type OrderDetailBaseDoc = {
    activationStatus?: number;
    audit?: number;
    createTime?: string;
    femaleCustomerNum?: number;
    maleCustomerNum?: number;
    orderCategory?: number;
    orderCategoryDesc?: string;
    orderCustomerSn?: string;
    orderDate?: string;
    orderSn?: string;
    remark?: string;
    serviceEmployeeId?: string;
    source?: number;
    sourceDesc?: string;
    status?: number;
    statusDesc?: string;
    storeId?: string;
  };

  type OrderDetailCommonDocDelayExtensionRecordsQueryVo_ = {
    amountInfo?: OrderDetailAmountDoc;
    auditInfo?: OrderDetailAuditDoc;
    baseInfo?: OrderDetailBaseDoc;
    commissionInfos?: ExtensionProjectCommissionItemDoc[];
    couponInfos?: OrderDetailCouponDoc[];
    extension?: ExtensionRecordsQueryVo;
    id?: string;
    memberInfo?: OrderDetailMemberDoc;
    moneyMealInfo?: OrderDetailMoneyMealDoc;
    orderId?: string;
    paymentInfo?: OrderPayMethodDoc[];
  };

  type OrderDetailCommonVoExtensionGiftExchangeVo_ = {
    amountInfo?: OrderDetailAmountInfoVo;
    auditInfo?: OrderDetailOperationInfoVo;
    baseInfo?: OrderDetailVo;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 次卡信息 */
    countMealInfo?: ExtensionCountMealDetailVo[];
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    extension?: ExtensionGiftExchangeVo;
    memberInfo?: OrderDetailMemberInfoVo;
    moneyMealInfo?: OrderDetailMoneyMealInfoVo;
    /** 支付信息 */
    paymentInfo?: PaymentMethodDetail[];
  };

  type OrderDetailCommonVoExtensionMoneyMealDetailVo_ = {
    amountInfo?: OrderDetailAmountInfoVo;
    auditInfo?: OrderDetailOperationInfoVo;
    baseInfo?: OrderDetailVo;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 次卡信息 */
    countMealInfo?: ExtensionCountMealDetailVo[];
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    extension?: ExtensionMoneyMealDetailVo;
    memberInfo?: OrderDetailMemberInfoVo;
    moneyMealInfo?: OrderDetailMoneyMealInfoVo;
    /** 支付信息 */
    paymentInfo?: PaymentMethodDetail[];
  };

  type OrderDetailCommonVoListExtensionCountMealDetailVo_ = {
    amountInfo?: OrderDetailAmountInfoVo;
    auditInfo?: OrderDetailOperationInfoVo;
    baseInfo?: OrderDetailVo;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 次卡信息 */
    countMealInfo?: ExtensionCountMealDetailVo[];
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 扩展信息 */
    extension?: ExtensionCountMealDetailVo[];
    memberInfo?: OrderDetailMemberInfoVo;
    moneyMealInfo?: OrderDetailMoneyMealInfoVo;
    /** 支付信息 */
    paymentInfo?: PaymentMethodDetail[];
  };

  type OrderDetailCommonVoListExtensionCouponDetailVo_ = {
    amountInfo?: OrderDetailAmountInfoVo;
    auditInfo?: OrderDetailOperationInfoVo;
    baseInfo?: OrderDetailVo;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 次卡信息 */
    countMealInfo?: ExtensionCountMealDetailVo[];
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 扩展信息 */
    extension?: ExtensionCouponDetailVo[];
    memberInfo?: OrderDetailMemberInfoVo;
    moneyMealInfo?: OrderDetailMoneyMealInfoVo;
    /** 支付信息 */
    paymentInfo?: PaymentMethodDetail[];
  };

  type OrderDetailCommonVoListExtensionProjectItemDetailVo_ = {
    amountInfo?: OrderDetailAmountInfoVo;
    auditInfo?: OrderDetailOperationInfoVo;
    baseInfo?: OrderDetailVo;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 次卡信息 */
    countMealInfo?: ExtensionCountMealDetailVo[];
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 扩展信息 */
    extension?: ExtensionProjectItemDetailVo[];
    memberInfo?: OrderDetailMemberInfoVo;
    moneyMealInfo?: OrderDetailMoneyMealInfoVo;
    /** 支付信息 */
    paymentInfo?: PaymentMethodDetail[];
  };

  type OrderDetailCommonVoObject_ = {
    amountInfo?: OrderDetailAmountInfoVo;
    auditInfo?: OrderDetailOperationInfoVo;
    baseInfo?: OrderDetailVo;
    /** 提成信息 */
    commissionInfos?: ExtensionProjectItemCommissionVo[];
    /** 次卡信息 */
    countMealInfo?: ExtensionCountMealDetailVo[];
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 扩展信息 */
    extension?: Record<string, any>;
    memberInfo?: OrderDetailMemberInfoVo;
    moneyMealInfo?: OrderDetailMoneyMealInfoVo;
    /** 支付信息 */
    paymentInfo?: PaymentMethodDetail[];
  };

  type OrderDetailCouponDoc = {
    discountAmount?: number;
    discountCategory?: number;
    discountName?: string;
    sort?: number;
  };

  type OrderDetailCouponVo = {
    /** 优惠金额 */
    discountAmount?: number;
    /** 优惠类别 */
    discountCategory?: number;
    /** 优惠方式名称 */
    discountName?: string;
    /** 排序 */
    sort?: number;
  };

  type OrderDetailMemberDoc = {
    activationStatus?: number;
    creditAmountBalance?: number;
    creditOperationAmount?: number;
    /** 顾客姓名首拼 */
    firstLetter: string;
    integralBalance?: number;
    integralOperation?: number;
    /** 会员性别 */
    memberGender?: string;
    /** 会员id */
    memberId?: string;
    /** 会员电话 */
    memberMobile?: string;
    /** 顾客姓名 */
    memberName?: string;
    /** 会员名称首拼 */
    memberNameHead?: string;
  };

  type OrderDetailMemberInfoVo = {
    /** 挂账操作金额 */
    creditAmountBalance?: number;
    /** 挂账剩余 */
    creditOperationAmount?: number;
    /** 积分余额 */
    integralBalance?: number;
    /** 积分变动数 */
    integralOperation?: number;
    /** 会员性别 */
    memberGender?: number;
    /** 会员id */
    memberId?: string;
    /** 会员电话 */
    memberMobile?: string;
    /** 顾客姓名 */
    memberName?: string;
  };

  type OrderDetailMoneyMealDoc = {
    givenAmountBalance?: number;
    givenOperationAmount?: number;
    moneyMealCardId?: string;
    moneyMealCardName?: string;
    moneyMealId?: number;
    moneyMealModelId?: number;
    paidInAmountBalance?: number;
    paidInOperationAmount?: number;
  };

  type OrderDetailMoneyMealInfoVo = {
    /** 赠送金额余额 */
    givenAmountBalance?: number;
    /** 赠送变动金额 */
    givenOperationAmount?: number;
    /** 金额卡卡号 */
    moneyMealCardId?: string;
    /** 金额卡名称(卡类型) */
    moneyMealCardName?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 金额卡模板id */
    moneyMealModelId?: string;
    /** 实收账户余额 */
    paidInAmountBalance?: number;
    /** 实收变动金额 */
    paidInOperationAmount?: number;
  };

  type OrderDetailOperationCountMealVo = {
    /** 优惠总额(所有优惠的累加) */
    couponAmount?: number;
    /** 优惠明细 */
    couponInfoList?: CouponInfo[];
    /** 优惠券明细列表 */
    couponSettleInfosVos?: OrderCouponSettleInfosVo[];
    /** 应付金额(实际应该支付的金额) */
    needPaymentAmount?: number;
    /** 订单原价(不含任何优惠) */
    originTotalAmount?: number;
  };

  type OrderDetailOperationInfoVo = {
    /** 创建人id */
    createBy?: string;
    /** 创建人员工名字 */
    createByEmployeeName?: string;
    /** 结算人id */
    settleByEmployeeId?: string;
    /** 结算人员工姓名 */
    settleByEmployeeName?: string;
  };

  type OrderDetailOperationItemDto = {
    /** 分类id */
    categoryId?: string;
    /** 提成设置 */
    commissionInfos?: ProjectCommissionItem[];
    /** 次卡id */
    countMealId?: string;
    /** 自定义价格基准(1:零售价,2:折扣,3:折扣后金额,0或null:不使用促销优惠 */
    customerKey?: number;
    /** 自定义折扣后金额 */
    customerProjectAmount?: number;
    /** 自定义项目折扣 */
    customerProjectDiscount?: number;
    /** 自定义零售价 */
    customerProjectPrice?: number;
    /** 前端用 */
    id?: string;
    /** 项目券id */
    projectCouponInstanceId?: string;
    /** 项目id */
    projectId: string;
    /** 项目数量 */
    projectNum: number;
    /** 类别(1:商品,2:服务) */
    projectType: number;
  };

  type OrderDetailOperationItemVo = {
    /** 分类id */
    categoryId?: string;
    /** 次卡id */
    countMealId?: string;
    /** 次卡模板id */
    countMealModelId?: string;
    /** 次卡抵扣数 */
    countMealNum?: number;
    /** 最终优惠金额 */
    couponAmount?: number;
    /** 结算优惠均摊 */
    customCouponShare?: number;
    /** 折扣券均摊 */
    discountCouponShare?: number;
    /** 购物车项目唯一id */
    id: string;
    /** 项目图片 */
    img?: string;
    /** 订单原价 */
    originAmount?: number;
    /** 商品id */
    productId?: string;
    /** 项目券id */
    projectCouponInstanceId?: string;
    /** 项目券抵扣数 */
    projectCouponInstanceNum?: number;
    /** 项目折扣 */
    projectDiscount?: number;
    /** 折扣后金额 */
    projectDiscountedPrice?: number;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 最终折扣后金额 */
    projectNeedPayAmount?: number;
    /** 项目数量 */
    projectNum?: number;
    /** 项目原价 */
    projectOriginAmount?: number;
    /** 零售价 */
    projectPrice?: number;
    /** 项目规格 */
    projectSpecification?: string;
    /** 类别(1:商品,2:服务) */
    projectType?: number;
    /** 代金券均摊 */
    vouchersCouponShare?: number;
  };

  type OrderDetailOperationServiceDto = {
    couponInfoDto?: CouponInfoDto;
    /** 订单明细 */
    items: OrderDetailOperationItemDto[];
    /** 会员id */
    memberId?: string;
  };

  type OrderDetailOperationVo = {
    /** 优惠总额(所有优惠的累加) */
    couponAmount?: number;
    /** 优惠明细 */
    couponInfoList?: CouponInfo[];
    /** 优惠券明细列表 */
    couponSettleInfosVos?: OrderCouponSettleInfosVo[];
    /** 订单明细 */
    items?: OrderDetailOperationItemVo[];
    /** 应付金额(实际应该支付的金额) */
    needPaymentAmount?: number;
    /** 订单原价(不含任何优惠) */
    originTotalAmount?: number;
  };

  type OrderDetailVo = {
    /** 激活状态0散客1正式会员 */
    activationStatus?: number;
    /** 审核状态(0:未审核,1:审核) */
    audit?: number;
    /** 创建时间 */
    createTime?: string;
    /** 女客数量 */
    femaleCustomerNum?: number;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeId?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源 */
    source?: number;
    /** 订单来源描述 */
    sourceDesc?: string;
    /** 订单状态(1:挂单, 2:已支付, 3:已审核),4:已结账,5:已作废 */
    status?: number;
    /** 订单状态描述 */
    statusDesc?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OrderListCommonVoExtensionCountMealBuyItemVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionCountMealBuyItemVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionCountMealDelayVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionCountMealDelayVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionCouponHivingVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionCouponHivingVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionGiftItemVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionGiftItemVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionIncomeExpenseVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionIncomeExpenseVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionMemberReimbursementItemVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionMemberReimbursementItemVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionMoneyMealCreateListVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionMoneyMealCreateListVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderListCommonVoExtensionProjectItemVo_ = {
    /** 审核状态(1:审核,0:未审核) */
    audit?: number;
    /** 制单人员工id */
    createBy?: string;
    /** 制单人员工姓名 */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客电话 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    extension?: ExtensionProjectItemVo;
    /** 订单id */
    id?: string;
    /** 积分 */
    integralOperation?: number;
    /** 会员id */
    memberId?: string;
    /** 消费时使用的金额卡卡号 */
    moneyMealCardId?: string;
    /** 结算人员工id */
    operationEmployeeId?: string;
    /** 结算人员工姓名 */
    operationEmployeeName?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 账单日 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付方式列表 */
    paymentMethodDesc?: string[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源描述(app订单) */
    sourceDes?: string;
    /** 订单状态 */
    status?: number;
    /** 订单状态描述 */
    statusDes?: string;
  };

  type OrderPayMethodDoc = {
    moneyMealId?: number;
    paymentAmount?: number;
    paymentId?: string;
    paymentMethodType?: number;
    paymentPlatform?: number;
    type?: number;
  };

  type OrderStatisticProfitDto = {
    /** 查询日期 */
    date?: string;
  };

  type OrderStatisticProfitVo = {
    /** 时间 */
    date?: string;
    /** 支出 */
    expend?: number;
    /** 收入 */
    income?: number;
    /** 环比 */
    monthOnMonth?: number;
    /** 利润 */
    profit?: number;
    /** 工资 */
    salaryExpend?: number;
    /** 同比 */
    yearOnYear?: number;
  };

  type OrderStatisticsCashVo = {
    /** 现金支出 */
    expendCashAmount?: number;
    /** 现金收入 */
    incomeCashAmount?: number;
    /** 总和 */
    total?: number;
  };

  type OrderStatisticsChargeExtension = {
    /** 充值金额 */
    chargeAmount?: number;
    /** 充值类型 */
    chargeTypeDesc?: string;
    /** 赠送金额 */
    givingAmount?: number;
    /** 金额卡名称 */
    moneyMealName?: string;
  };

  type OrderStatisticsCountMealExtension = {
    /** 次卡名称 */
    countMealName?: string[];
    /** 次数 */
    countMealNum?: number;
    /** 项目列表 */
    projects?: string[];
  };

  type OrderStatisticsCustomerEmotionVo = {
    description?: OrderStatisticsCustomerEmotionVoAgg;
    /** 明细列表 */
    items?: OrderStatisticsCustomerEmotionVoItem[];
  };

  type OrderStatisticsCustomerEmotionVoAgg = {
    /** 女客人数 */
    femaleCount?: number;
    /** 女客业绩 */
    femalePerformance?: number;
    /** 男客人数 */
    maleCount?: number;
    /** 男客业绩 */
    malePerformance?: number;
    /** 非指定人数 */
    nonePointCount?: number;
    /** 非指定业绩 */
    nonePointPerformance?: number;
    /** 指定人数 */
    pointCount?: number;
    /** 指定业绩 */
    pointPerformance?: number;
  };

  type OrderStatisticsCustomerEmotionVoItem = {
    /** 客数 */
    clientCount?: number;
    /** 客单价 */
    clientPer?: number;
    /** 扩展信息 */
    extension?: Record<string, any>;
    /** 订单类别 */
    orderCategory?: number;
    /** 业绩 */
    performance?: number;
  };

  type OrderStatisticsDetailVoOrderStatisticsChargeExtension_ = {
    items?: PageOrderStatisticsItemsVoOrderStatisticsChargeExtension_;
    statistics?: OrderAmountStatistics;
  };

  type OrderStatisticsDetailVoOrderStatisticsCountMealExtension_ = {
    items?: PageOrderStatisticsItemsVoOrderStatisticsCountMealExtension_;
    statistics?: OrderAmountStatistics;
  };

  type OrderStatisticsDetailVoOrderStatisticsProjectExtension_ = {
    items?: PageOrderStatisticsItemsVoOrderStatisticsProjectExtension_;
    statistics?: OrderAmountStatistics;
  };

  type OrderStatisticsExpend = {
    /** 分类名称 */
    categoryName?: string;
    /** 订单数 */
    orderNum?: number;
    /** 支付统计 */
    paymentDetailVos?: OrderStatisticsPaymentDetailVo[];
    /** 汇总 */
    total?: number;
  };

  type OrderStatisticsItemsVoExtensionCountMealStatistics_ = {
    /** 顾客类型 */
    activationStatusDesc?: string;
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 制单人id */
    createById?: string;
    /** 制单人姓名 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    extention?: ExtensionCountMealStatistics;
    /** 会员id */
    memberId?: string;
    /** 顾客姓名 */
    memberName?: string;
    /** 金额卡卡号 */
    moneyMealCardId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单编号 */
    orderId?: string;
    /** 订单支付金额 */
    orderPaymentAmount?: number;
    /** 订单编号 */
    orderSn?: string;
    /** 结算明细 */
    paymentInfos?: OrderStatisticsPaymentDetailVo[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工姓名 */
    serviceEmployeeNames?: string[];
  };

  type OrderStatisticsItemsVoOrderStatisticsChargeExtension_ = {
    /** 顾客类型 */
    activationStatusDesc?: string;
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 制单人id */
    createById?: string;
    /** 制单人姓名 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    extention?: OrderStatisticsChargeExtension;
    /** 会员id */
    memberId?: string;
    /** 顾客姓名 */
    memberName?: string;
    /** 金额卡卡号 */
    moneyMealCardId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单编号 */
    orderId?: string;
    /** 订单支付金额 */
    orderPaymentAmount?: number;
    /** 订单编号 */
    orderSn?: string;
    /** 结算明细 */
    paymentInfos?: OrderStatisticsPaymentDetailVo[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工姓名 */
    serviceEmployeeNames?: string[];
  };

  type OrderStatisticsItemsVoOrderStatisticsCountMealExtension_ = {
    /** 顾客类型 */
    activationStatusDesc?: string;
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 制单人id */
    createById?: string;
    /** 制单人姓名 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    extention?: OrderStatisticsCountMealExtension;
    /** 会员id */
    memberId?: string;
    /** 顾客姓名 */
    memberName?: string;
    /** 金额卡卡号 */
    moneyMealCardId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单编号 */
    orderId?: string;
    /** 订单支付金额 */
    orderPaymentAmount?: number;
    /** 订单编号 */
    orderSn?: string;
    /** 结算明细 */
    paymentInfos?: OrderStatisticsPaymentDetailVo[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工姓名 */
    serviceEmployeeNames?: string[];
  };

  type OrderStatisticsItemsVoOrderStatisticsProjectExtension_ = {
    /** 顾客类型 */
    activationStatusDesc?: string;
    /** 优惠明细 */
    couponInfos?: OrderDetailCouponVo[];
    /** 制单人id */
    createById?: string;
    /** 制单人姓名 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    extention?: OrderStatisticsProjectExtension;
    /** 会员id */
    memberId?: string;
    /** 顾客姓名 */
    memberName?: string;
    /** 金额卡卡号 */
    moneyMealCardId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 自定义订单 编 号 */
    orderCustomerSn?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单编号 */
    orderId?: string;
    /** 订单支付金额 */
    orderPaymentAmount?: number;
    /** 订单编号 */
    orderSn?: string;
    /** 结算明细 */
    paymentInfos?: OrderStatisticsPaymentDetailVo[];
    /** 订单备注 */
    remark?: string;
    /** 服务员工姓名 */
    serviceEmployeeNames?: string[];
  };

  type OrderStatisticsPaymentDetailVo = {
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付id,唯一 */
    paymentId?: string;
    /** 支付类型 */
    paymentMethodType?: number;
    /** 支付名称 */
    paymentName?: string;
  };

  type OrderStatisticsPaymentStatistics = {
    cashVo?: OrderStatisticsCashVo;
    customerEmotionVo?: OrderStatisticsCustomerEmotionVo;
    /** 支出汇总 */
    expendVo?: OrderStatisticsExpend[];
    takingVo?: OrderStatisticsTakingVo;
  };

  type OrderStatisticsProjectExtension = {
    projectNames?: string[];
  };

  type OrderStatisticsQueryDto = {
    /** 当前页 */
    current: number;
    /** 日期聚合类别(1:年,2:月,3:日,4:时,5:分) */
    dateType?: number;
    /** 结束时间,默认为今天结束时间 */
    endTime?: string;
    /** 关键字 */
    keyword?: string;
    /** 金额卡模板id */
    moneyMealModelId?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 结算方式 */
    paymentId?: string;
    /** 项目类别(1商品,2服务) */
    projectType?: number;
    /** 开始时间,默认为今天开始时间 */
    startTime?: string;
  };

  type OrderStatisticsTakingItemVo = {
    /** 订单类别Key */
    orderCategory?: number;
    /** 订单类别名称 */
    orderCategoryName?: string;
    /** 订单类别总收入 */
    orderCategoryPaymentAmount?: number;
    /** 结算明细 */
    paymentInfos?: OrderStatisticsPaymentDetailVo[];
  };

  type OrderStatisticsTakingTrend = {
    /** 营业支出 */
    expendTotal?: number;
    /** 营业收入 */
    incomeTotal?: number;
    /** 营收趋势 */
    items?: OrderStatisticsTakingTrendIterm[];
  };

  type OrderStatisticsTakingTrendIterm = {
    /** 日期 */
    date?: string;
    /** 金额 */
    trendAmount?: number;
  };

  type OrderStatisticsTakingVo = {
    /** 营业收入明细列表 */
    items?: OrderStatisticsTakingItemVo[];
    /** 支付方式统计 */
    paymentStatistics?: OrderStatisticsPaymentDetailVo[];
    /** 服务业绩合计 */
    serviceTotalAmount?: number;
    /** 入会费合计 */
    totalJoinAmount?: number;
    /** 总营业收入 */
    totalTakingSum?: number;
  };

  type PageAccountBalanceRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AccountBalanceRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAccountChangeRecordVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AccountChangeRecordVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageBusinessAnalyseVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: BusinessAnalyseVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChannelVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ChannelVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommissionSummary_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommissionSummary[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommissionTypeSummary_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommissionTypeSummary[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCountMealDoc_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CountMealDoc[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCountMealSaleRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CountMealSaleRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCountMealTypeSummary_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CountMealTypeSummary[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCountMealVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CountMealVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCouponInfos_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CouponInfos[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCustomerRecordVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CustomerRecordVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type pageDeleteEmployeeUsingGETParams = {
    /** 是否参与提成(提成选择员工时传入) */
    commission?: number;
    /** 当前页 */
    current: number;
    /** 部门id-1全部 */
    deptId?: number;
    /** 名称,昵称,手机号 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 职位id-1全部 */
    postId?: number;
    /** 状态-1全部1在职0离职 */
    status?: number;
  };

  type PageEmployeeVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: EmployeeVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageExtendTemplateVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ExtendTemplateVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageGiftVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: GiftVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageHandVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: HandVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageIntegralChangeRecordVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: IntegralChangeRecordVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMemberDoc_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MemberDoc[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMemberForSmsVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MemberForSmsVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMemberVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MemberVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMoneyMealDoc_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MoneyMealDoc[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMsgAccountRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MsgAccountRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOpenRechargeRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OpenRechargeRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderBaseInfosVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderBaseInfosVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderDetailCommonDocDelayExtensionRecordsQueryVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderDetailCommonDocDelayExtensionRecordsQueryVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionCountMealBuyItemVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionCountMealBuyItemVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionCountMealDelayVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionCountMealDelayVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionCouponHivingVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionCouponHivingVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionGiftItemVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionGiftItemVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionIncomeExpenseVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionIncomeExpenseVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionMemberReimbursementItemVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionMemberReimbursementItemVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionMoneyMealCreateListVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionMoneyMealCreateListVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderListCommonVoExtensionProjectItemVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderListCommonVoExtensionProjectItemVo_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderStatisticsItemsVoExtensionCountMealStatistics_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderStatisticsItemsVoExtensionCountMealStatistics_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderStatisticsItemsVoOrderStatisticsChargeExtension_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderStatisticsItemsVoOrderStatisticsChargeExtension_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderStatisticsItemsVoOrderStatisticsCountMealExtension_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderStatisticsItemsVoOrderStatisticsCountMealExtension_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderStatisticsItemsVoOrderStatisticsProjectExtension_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderStatisticsItemsVoOrderStatisticsProjectExtension_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageProductVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ProductVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageProjectAnalyse_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ProjectAnalyse[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageProjectDoc_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ProjectDoc[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageProjectSaleRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ProjectSaleRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type pageRecordUsingGETParams = {
    /** 开始日期 */
    beginTime?: string;
    /** 当前页 */
    current: number;
    /** 操作员工Id */
    employeeId?: number;
    /** 结束日期 */
    endTime?: string;
    /** 次卡id */
    mealId: number;
    /** 次卡类型(1单项计次2整体计次3不限计次) */
    mealType: number;
    /** 次卡/项目名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 项目id */
    projectId: number;
    /** 变更类型(-1全部1购买2消费3退卡) */
    type?: number;
  };

  type PageReimbursementRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ReimbursementRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageRoomVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: RoomVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSalaryRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SalaryRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageServeVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ServeVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSysRoleVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SysRoleVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type pageUsingGET10Params = {
    /** 当前页 */
    current: number;
    /** 支付方式名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态(-1全部0禁用1启用) */
    status?: number;
    /** 支付类型(-1:全部,1:现金,2:非现金) */
    type?: number;
  };

  type pageUsingGET11Params = {
    /** 名称 */
    name?: string;
  };

  type pageUsingGET13Params = {
    /** 分类ID:-1全部 */
    categoryId?: number;
    /** 查询条件（名称检索码） */
    condition?: string;
    /** 当前页 */
    current: number;
    /** 排序规则(desc,asc) */
    order?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态:-1全部,0正常,1禁用 */
    status?: number;
  };

  type pageUsingGET14Params = {
    /** 名称 */
    name?: string;
  };

  type pageUsingGET15Params = {
    /** 当前页 */
    current: number;
    /** 名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type pageUsingGET16Params = {
    /** 名称 */
    name?: string;
  };

  type pageUsingGET17Params = {
    /** 房间分类id -1全部 */
    categoryId?: number;
    /** 当前页 */
    current: number;
    /** 名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态(-1全部0空闲1使用中) */
    status?: number;
  };

  type pageUsingGET18Params = {
    /** 分类ID:-1全部 */
    categoryId?: number;
    /** 查询条件（名称检索码） */
    condition?: string;
    /** 当前页 */
    current: number;
    /** 排序规则(desc,asc) */
    order?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态:-1全部,0正常,1禁用 */
    status?: number;
  };

  type pageUsingGET1Params = {
    /** 当前页 */
    current: number;
    /** 名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type pageUsingGET20Params = {
    /** 查询条件（名称） */
    name?: string;
    /** 状态:-1全部,0正常,1禁用 */
    status?: number;
  };

  type pageUsingGET21Params = {
    /** 商品规格属性id */
    specsKeyId: number;
  };

  type pageUsingGET22Params = {
    /** 名称 */
    name?: string;
  };

  type pageUsingGET23Params = {
    /** 名称 */
    name?: string;
  };

  type pageUsingGET2Params = {
    /** 当前页 */
    current: number;
    /** 次卡名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态(-1全部0停售1可售2过期) */
    status?: number;
    /** 次卡类型(-1全部1单项计次2整体计次3不限计次) */
    type?: number;
  };

  type pageUsingGET3Params = {
    /** 当前页 */
    current: number;
    /** 会员id */
    memberId: number;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type pageUsingGET4Params = {
    /** 名称 */
    name?: string;
  };

  type pageUsingGET5Params = {
    /** 是否参与提成(提成选择员工时传入) */
    commission?: number;
    /** 当前页 */
    current: number;
    /** 部门id-1全部 */
    deptId?: number;
    /** 名称,昵称,手机号 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 职位id-1全部 */
    postId?: number;
    /** 状态-1全部1在职0离职 */
    status?: number;
  };

  type pageUsingGET6Params = {
    /** 当前页 */
    current: number;
    /** 扩展模板名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态-1全部0正常1停用 */
    status?: number;
  };

  type pageUsingGET7Params = {
    /** 当前页 */
    current: number;
    /** 礼品名称 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态-1全部0正常1停用 */
    status?: number;
  };

  type pageUsingGET8Params = {
    /** 当前页 */
    current: number;
    /** 编号 */
    number?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态(-1全部0空闲1使用中) */
    status?: number;
  };

  type pageUsingGET9Params = {
    /** 手艺人id */
    craftId?: number;
    /** 当前页 */
    current: number;
    /** 会员性别 1：男，2：女，-1：全部 */
    gender?: number;
    /** 名称,手机号,车牌号 */
    name?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 状态-1全部0正常1停用 */
    status?: number;
  };

  type pageUsingGETParams = {
    /** 名称 */
    name?: string;
  };

  type PaymentDto = {
    /** 图标 */
    icon?: string;
    /** 支付方式id */
    id: string;
    /** 支付方式名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 支付类型1:现金,2:非现金 */
    type: number;
  };

  type PaymentMethodDetail = {
    /** 金额卡id */
    moneyMealId?: number;
    /** 支付金额 */
    paymentAmount?: number;
    /** 支付码(如果是金额卡, 这里是金额卡密码) */
    paymentCode?: string;
    /** 支付金额 */
    paymentId?: string;
    /** 支付方式(1:现金,2:微信,3:支付宝,4:卡金,5:赠送卡金,6:银行卡,7:美团,8:免单,9:挂账) */
    paymentMethodType?: number;
    /** 支付方式名称 */
    paymentName: string;
  };

  type PaymentMethodVo = {
    /** 是否需要授权, 0:不需要, 1:需要 */
    hasPermission?: number;
    /** 是否计入营业额, 0:不计入, 1:计入 */
    isTurnover?: number;
    /** 支付类别1:现金,2非现金 */
    paymentCategory?: number;
    /** 支付方式图标 */
    paymentIcon?: string;
    /** 支付方式id */
    paymentId?: string;
    /** 支付方式名称 */
    paymentName?: string;
    /** 支付类型 */
    paymentType?: number;
    /** 支付请求地址 */
    paymentUrl?: string;
  };

  type PendingCategory = {
    /** 房间分类id */
    roomCategoryId?: string;
    /** 房间分类名称 */
    roomCategoryName?: string;
    /** 房间详情 */
    roomDetail?: RoomDetailVo[];
  };

  type PendingDeleteDto = {
    /** 挂单id列表 */
    pendingIds?: string;
  };

  type PendingInfos = {
    /** 优惠金额(折扣/优惠的总额) */
    couponAmount?: number;
    /** 创建人id */
    createBy?: string;
    /** 应付金额(实际应该支付的金额) */
    createByEmployeeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerNameHead?: string;
    /** 女客数量 */
    femaleCustomer?: number;
    /** 订单id */
    id?: string;
    /** 男客数量 */
    maleCustomerNum?: number;
    /** 会员id */
    memberId?: string;
    /** 金额卡卡号(会员卡卡号) */
    moneyMealCarId?: string;
    /** 金额卡id */
    moneyMealId?: string;
    /** 应付金额(实际应该支付的金额) */
    needPaymentAmount?: number;
    /** 手工单号 */
    orderCustomerSn?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 订单原价(不含任何优惠) */
    originTotalAmount?: number;
    /** 支付金额(实际支付的金额) */
    paymentAmount?: number;
    /** 消费项目 */
    projects?: string[];
    /** 订单备注 */
    remark?: string;
    /** 请求体 */
    requestInfo?: Record<string, any>;
    /** 服务员工id */
    serviceEmployeeIds?: string;
    /** 服务员工姓名 */
    serviceEmployeeName?: string;
    /** 订单来源(1:web订单,2:app订单) */
    sourceType?: number;
    /** 订单来源描述 */
    sourceTypeDesc?: string;
    /** 门店id */
    storeId?: string;
  };

  type pendingOrderDetailUsingGETParams = {
    /** pendingOrderId */
    pendingOrderId: number;
  };

  type PendingRoomDto = {
    /** 分类id */
    categoryId?: number;
    /** 房间名称 */
    keyword?: string;
    /** 房间状态 */
    status?: number;
  };

  type PerformanceCommissionValueDto = {
    /** 类型(1固定2比例) */
    type: number;
    /** 值 */
    value: number;
  };

  type PerformanceCommissionVo = {
    /** 提成率 */
    commissionRate?: number;
    /** 提成 */
    commissionValue?: number;
    /** 页面自定义id */
    id?: string;
    /** 业绩率 */
    performanceRate?: number;
    /** 业绩 */
    performanceValue?: number;
  };

  type PostDto = {
    /** 是否参与提成 */
    commission?: number;
    /** 岗位id */
    id: string;
    /** 岗位名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 是否允许预约 */
    subscribe?: number;
  };

  type PostTreeVo = {
    /** 员工列表 */
    employees?: EmployeeNameVo[];
    /** 岗位id */
    id?: string;
    /** 岗位名称 */
    name?: string;
  };

  type PostVo = {
    /** 是否参与提成 */
    commission?: number;
    /** 员工数 */
    employeeTotal?: number;
    /** 岗位id */
    id?: string;
    /** 岗位名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 是否允许预约 */
    subscribe?: number;
  };

  type PrintConfigDto = {
    /** 打印数量 */
    count?: number;
    /** 设备名称 */
    deviceName?: string;
    /** 设备sn */
    deviceSn?: string;
    /** 拓展信息 */
    extend?: string;
    /** 小票页脚内容 */
    footer?: string;
    /** 打印方式(1:直接打印2:打印前提示3:不打印) */
    mode?: number;
    /** 类型(1:消费小票,2:开卡小票,3:充值小票,4:套餐小票,5公共参数) */
    type: number;
  };

  type PrintConfigVo = {
    /** 打印数量 */
    count?: number;
    /** 设备名称 */
    deviceName?: string;
    /** 设备sn */
    deviceSn?: string;
    /** 拓展信息 */
    extend?: string;
    /** 小票页脚内容 */
    footer?: string;
    /** 打印方式(1:直接打印2:打印前提示3:不打印) */
    mode?: number;
    /** 类型(1:消费小票,2:开卡小票,3:充值小票,4:套餐小票,5公共参数) */
    type?: number;
  };

  type processMessageUsingGETParams = {
    /** orderId */
    orderId: number;
    /** type */
    type: number;
  };

  type ProductBaseVo = {
    /** 分类id */
    categoryId?: string;
    /** 商品id */
    productId?: string;
    /** 商品名称 */
    productName?: string;
    /** 规格类型1单规格2多规格 */
    specsType?: number;
    /** 商品规格 */
    specsValueBaseVos?: SpecsValueBaseVo[];
  };

  type ProductDetailVo = {
    /** 产地 */
    address?: string;
    /** 条形码 */
    barCode?: string;
    /** 商品分类id */
    categoryId?: string;
    /** 商品id */
    id?: string;
    /** 商品图片 */
    img?: string;
    /** 商品名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品编号 */
    productCode?: string;
    /** 商品PLU */
    productPlu?: string;
    /** 搜索码 */
    searchCode?: string;
    /** 是否是特价0否1是 */
    specialOffer?: number;
    /** 商品规格详情 */
    specsDetailVos?: SpecsDetailVo[];
    /** 商品规格属性 */
    specsKeyDetailVos?: SpecsKeyDetailVo[];
    /** 规格类型1单规格2多规格 */
    specsType?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 销项税率 */
    taxRate?: string;
    /** 商品单位id */
    unitId?: string;
    /** 有效期类型(1年2月3日期) */
    validTimeType?: number;
    /** 有效期 */
    validTimeValue?: number;
  };

  type ProductDto = {
    /** 产地 */
    address?: string;
    /** 条形码 */
    barCode?: string;
    /** 商品分类 */
    categoryId: string;
    /** 商品id(新增时不填) */
    id: string;
    /** 商品图片 */
    img?: string;
    /** 商品名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品编号 */
    productCode?: string;
    /** 商品PLU */
    productPlu?: string;
    /** 是否是特价0否1是 */
    specialOffer?: number;
    /** 规格类型1单规格2多规格 */
    specsType: number;
    /** 商品规格 */
    specsValuesDto: SpecsValuesDto[];
    /** 状态(1正常0停用) */
    status?: number;
    /** 销项税率 */
    taxRate?: string;
    /** 商品单位 */
    unitId: string;
    /** 有效期类型(1年2月3日期) */
    validTimeType?: number;
    /** 有效期 */
    validTimeValue?: number;
  };

  type ProductVo = {
    /** 分类id */
    categoryId: string;
    /** 分类名称 */
    categoryName: string;
    /** 商品id */
    id: string;
    /** 商品图片 */
    img: string;
    /** 商品名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品价格 */
    salePrice: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type profitSummaryUsingPOSTParams = {
    /** store_id */
    store_id?: number;
  };

  type ProjectAnalyse = {
    /** 单数 */
    orderCount?: number;
    /** 业绩 */
    performance?: number;
    /** 业绩占比 */
    performanceProportion?: number;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 单价 */
    projectPrice?: number;
    /** 客单价 */
    projectUnitPrice?: number;
    /** 排序 */
    sortValue?: number;
  };

  type projectAnalyseTrendUsingGETParams = {
    /** 项目Id */
    projectId?: number;
    /** 类型1日趋势2月趋势 */
    type: number;
  };

  type ProjectAnalyseTrendVo = {
    /** 日期 */
    date?: string;
    /** 业绩 */
    performance?: number;
  };

  type projectAnalyseUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 结束时间 */
    endDate: string;
    /** 排序规则(desc,asc) */
    order?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** 项目类型-1全部1产品2服务 */
    projectType?: number;
    /** 排序(performance,orderCount,projectUnitPrice) */
    sort?: string;
  };

  type ProjectAnalyseVo = {
    page?: PageProjectAnalyse_;
    /** 总业绩 */
    performanceTotal?: number;
    /** 产品总业绩 */
    projectPerformanceTotal?: number;
    /** 服务总业绩 */
    servePerformanceTotal?: number;
  };

  type ProjectAppVo = {
    /** 过期时间 */
    expireTime?: string;
    /** 是否已激活(0未激活1已激活) */
    isActivation?: number;
    /** 项目id */
    projectId: string;
    /** 项目图片 */
    projectImg: string;
    /** 项目名称 */
    projectName: string;
    /** 项目类型(1商品,2服务) */
    projectType: number;
    /** 状态(-1全部0正常1已使用2已退卡3已过期) */
    status?: number;
  };

  type ProjectBaseDto = {
    /** 数量 */
    count: number;
    /** 售价 */
    price: number;
    /** 商品id */
    productId?: string;
    /** 项目id */
    projectId: string;
    /** 项目图片 */
    projectImg: string;
    /** 项目名称 */
    projectName: string;
    /** 项目类型(1商品SKU,2服务) */
    projectType: number;
  };

  type ProjectCommissionItem = {
    /** 激活状态0散客1正式会员 */
    activationStatus: number;
    /** 提成率 */
    commissionRate?: number;
    /** 提成 */
    commissionValue?: number;
    /** 提成员工id */
    employeeId?: string;
    /** 提成员工姓名 */
    employeeName?: string;
    /** 提成id */
    id?: string;
    /** 是否指定0不指定1指定 */
    isAppoint: number;
    /** 业绩率 */
    performanceRate?: number;
    /** 业绩 */
    performanceValue?: number;
    /** 岗位id */
    postId?: string;
    /** 岗位名称 */
    postName?: string;
  };

  type ProjectConfigDto = {
    /** 提成基数(1:原价,2:实收,3:业绩) */
    commissionBase?: number;
    /** 次卡id(只有选择次卡内项目时才需要填入) */
    countMealModelId?: string;
    deductCost: PerformanceCommissionValueDto;
    distinguishAll?: DistinguishAll;
    distinguishAllNot?: DistinguishAllNot;
    distinguishAppoint?: DistinguishAppoint;
    /** 区分指定非指定(0不区分1区分) */
    distinguishAppointType?: number;
    distinguishMember?: DistinguishMember;
    /** 区分会员散客(0不区分1区分) */
    distinguishMemberType?: number;
    /** 会员卡模板id(-1全部) */
    moneyMealModelId: string;
    /** 职位id(-1全部) */
    postId: string;
    /** 项目id(选择分类时为分类id) */
    projectId: string;
    /** 类型(1:项目提成,2:项目业绩) */
    type: number;
  };

  type ProjectConfigVo = {
    /** 提成基数(1:原价,2:实收,3:业绩) */
    commissionBase?: number;
    /** 次卡id(只有选择次卡内项目时才会返回) */
    countMealModelId?: string;
    deductCost?: PerformanceCommissionValueDto;
    distinguishAll?: DistinguishAll;
    distinguishAllNot?: DistinguishAllNot;
    distinguishAppoint?: DistinguishAppoint;
    /** 区分指定非指定(0不区分1区分) */
    distinguishAppointType?: number;
    distinguishMember?: DistinguishMember;
    /** 区分会员散客(0不区分1区分) */
    distinguishMemberType?: number;
    /** 会员卡模板id(-1全部) */
    moneyMealModelId?: string;
    /** 职位id(-1全部) */
    postId?: string;
    /** 项目id(选择分类时为分类id) */
    projectId?: string;
  };

  type ProjectDoc = {
    /** 检索码 */
    barCode?: string;
    /** 分类id */
    categoryId?: string;
    /** 项目id */
    id?: string;
    /** 图片路径 */
    img?: string;
    /** 序号 */
    orderNum?: number;
    /** 价格 */
    price?: string;
    /** 项目名称 */
    projectName?: string;
    /** 是否是特价0否1是 */
    specialOffer?: number;
    /** 规格列表 */
    specsDetailVos?: EsSpecsDetailVo[];
    /** 可选规格 */
    specsKeyDetailVos?: EsSpecsKeyDetailVo[];
    /** 类别(1:商品,2:服务) */
    type?: number;
  };

  type ProjectDto = {
    /** 项目id */
    projectId: string;
    /** 项目名称 */
    projectName: string;
    /** 项目类型(1商品SKU,2服务) */
    projectType: number;
  };

  type ProjectSaleRecord = {
    /** 0散客1会员 */
    activationStatus?: number;
    /** 金额 */
    amount?: number;
    /** 会员卡号 */
    cardSn?: string;
    /** 提成 */
    commission?: number;
    /** 次卡名称 */
    countMealName?: string;
    /** 次卡类型(1单项2整体3不限) */
    countMealType?: number;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    /** id */
    id?: string;
    /** 是否指定 */
    isAppoint?: number;
    /** 单据日期 */
    orderDate?: string;
    /** 单据号 */
    orderSn?: string;
    /** 业绩 */
    performance?: number;
    /** 项目名称 */
    projectName?: string;
    /** 项目数量 */
    projectNum?: number;
  };

  type projectSaleRecordUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 员工id */
    employeeId: number;
    /** 结束时间 */
    endDate: string;
    /** 关键字(单据号,顾客姓名,卡号,项目名称) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
    /** -1全部项目类型1商品2服务 */
    projectType?: number;
  };

  type ProjectSaleRecordVo = {
    /** 金额(当页合计) */
    amountCurrentSum?: number;
    /** 金额(总合计) */
    amountSum?: number;
    /** 提成(当页合计) */
    commissionCurrentSum?: number;
    /** 提成(总合计) */
    commissionSum?: number;
    page?: PageProjectSaleRecord_;
    /** 业绩(当页合计) */
    performanceCurrentSum?: number;
    /** 业绩(总合计) */
    performanceSum?: number;
    /** 项目数量(当页合计) */
    projectNumCurrentSum?: number;
    /** 项目数量(合计) */
    projectNumSum?: number;
  };

  type queryOrderResultUsingPOSTParams = {
    /** orderId */
    orderId: number;
  };

  type QueryProjectPerformanceCommissionDto = {
    /** 激活状态0散客1正式会员 */
    activationStatus: number;
    /** 分类id */
    categoryId: string;
    /** 自定义提成率 */
    commissionRateCustom?: number;
    /** 售价 */
    costPrice: number;
    /** 次卡模板id */
    countMealModelId: string;
    /** 页面自定义id */
    id: string;
    /** 是否指定0不指定1指定 */
    isAppoint: number;
    /** 会员卡模板id(没有时传-1) */
    moneyMealModelId: string;
    /** 实收金额 */
    paidInAmount: number;
    /** 自定义业绩率 */
    performanceRateCustom?: number;
    /** 自定义业绩 */
    performanceValueCustom?: number;
    /** 职位id */
    postId: string;
    /** 项目id */
    projectId: string;
    /** 项目数量 */
    projectNum?: number;
    /** 项目类型1商品2服务3次卡 */
    projectType: number;
  };

  type QueryRechargePerformanceCommissionDto = {
    /** 自定义提成率 */
    commissionRateCustom?: number;
    /** 赠送卡金 */
    giveMoney: number;
    /** 页面自定义id */
    id: string;
    /** 会员卡模板id */
    moneyMealModelId: string;
    /** 实收卡金 */
    paidInMoney: number;
    /** 自定义业绩率 */
    performanceRateCustom?: number;
    /** 自定义业绩 */
    performanceValueCustom?: number;
    /** 职位id */
    postId: string;
    /** 项目数量 */
    projectNum?: number;
    /** 类型1开卡2充值 */
    type: number;
  };

  type QuerySalePerformanceCommissionDto = {
    /** 自定义提成率 */
    commissionRateCustom?: number;
    /** 次卡模板id */
    countMealModelId: string;
    /** 次卡类型1单项计次2整体计次3不限计次 */
    countMealModelType: number;
    /** 页面自定义id */
    id: string;
    /** 实收金额 */
    paidInAmount: number;
    /** 自定义业绩率 */
    performanceRateCustom?: number;
    /** 自定义业绩 */
    performanceValueCustom?: number;
    /** 职位id */
    postId: string;
    /** 项目数量 */
    projectNum?: number;
  };

  type QuickRechargeDto = {
    /** 实收金额 */
    exactlyMoney: number;
    /** 赠送金额 */
    giveMoney: number;
    /** 类型1门店2会员小程序 */
    type: number[];
  };

  type RechargeConfigDto = {
    /** 提成基数(1:业绩,2:实收,3:实收金额+赠送金额) */
    commissionBase?: number;
    /** 会员卡模板id(-1全部) */
    moneyMealModelId: string;
    open: PerformanceCommissionValueDto;
    /** 业绩基数(1:实收金额,2:实收金额+赠送金额) */
    performanceBase?: number;
    /** 职位id(-1全部) */
    postId: string;
    recharge: PerformanceCommissionValueDto;
    /** 类型(1:次卡销售提成,2次卡销售业绩) */
    type: number;
  };

  type RechargeConfigVo = {
    /** 提成基数(1:业绩,2:实收,3:实收金额+赠送金额) */
    commissionBase?: number;
    /** 会员卡模板id(-1全部) */
    moneyMealModelId?: string;
    open?: PerformanceCommissionValueDto;
    /** 业绩基数(1:实收金额,2:实收金额+赠送金额) */
    performanceBase?: number;
    /** 职位id(-1全部) */
    postId?: string;
    recharge?: PerformanceCommissionValueDto;
  };

  type RecordCategoryDto = {
    /** 顾客记录分类id(新增时不传) */
    id: string;
    /** 顾客记录分类名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type RecordCategoryVo = {
    /** 顾客记录分类ID */
    id?: string;
    /** 顾客记录分类名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type recoverDeleteEmployeeUsingGETParams = {
    /** employeeId */
    employeeId: number;
  };

  type registerUsingPOSTParams = {
    /** code */
    code: string;
    /** mobile */
    mobile: string;
    /** password */
    password: string;
  };

  type ReimbursementRecord = {
    /** 提成 */
    commission?: number;
    /** 顾客手机 */
    customerMobile?: string;
    /** 顾客姓名 */
    customerName?: string;
    /** id */
    id?: string;
    /** 单据日期 */
    orderDate?: string;
    /** 单据号 */
    orderSn?: string;
    /** 业绩 */
    performance?: number;
    /** 还款金额 */
    reimbursementAmount?: number;
  };

  type reimbursementRecordUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 员工id */
    employeeId: number;
    /** 结束时间 */
    endDate: string;
    /** 关键字(单据号,顾客姓名,卡号,卡类型) */
    keyword?: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type ReimbursementRecordVo = {
    /** 提成(当页合计) */
    commissionCurrentSum?: number;
    /** 提成(总合计) */
    commissionSum?: number;
    page?: PageReimbursementRecord_;
    /** 业绩(当页合计) */
    performanceCurrentSum?: number;
    /** 业绩(总合计) */
    performanceSum?: number;
    /** 还款金额(当页合计) */
    reimbursementAmountCurrentSum?: number;
    /** 还款金额(总合计) */
    reimbursementAmountSum?: number;
  };

  type ResponseResultDtoAccountBalanceRecordVo_ = {
    code?: string;
    data?: AccountBalanceRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoAsyncVo_ = {
    code?: string;
    data?: AsyncVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoBoolean_ = {
    code?: string;
    data?: boolean;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCheckMobileVo_ = {
    code?: string;
    data?: CheckMobileVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCommissionConfigVo_ = {
    code?: string;
    data?: CommissionConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCommissionSummaryVo_ = {
    code?: string;
    data?: CommissionSummaryVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCommissionTypeSummaryVo_ = {
    code?: string;
    data?: CommissionTypeSummaryVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoConsumeSummaryInfo_ = {
    code?: string;
    data?: ConsumeSummaryInfo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCountMealDetailVo_ = {
    code?: string;
    data?: CountMealDetailVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCountMealSaleRecordVo_ = {
    code?: string;
    data?: CountMealSaleRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCountMealTotalVo_ = {
    code?: string;
    data?: CountMealTotalVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCountMealTypeSummaryVo_ = {
    code?: string;
    data?: CountMealTypeSummaryVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoCreateOrderDto_ = {
    code?: string;
    data?: CreateOrderDto;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoEditOrderDiscountCouponVo_ = {
    code?: string;
    data?: EditOrderDiscountCouponVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoEditOrderVouchersCouponVo_ = {
    code?: string;
    data?: EditOrderVouchersCouponVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoEditProjectCouponGroupVo_ = {
    code?: string;
    data?: EditProjectCouponGroupVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoEmployeeDetailVo_ = {
    code?: string;
    data?: EmployeeDetailVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoExtendVo_ = {
    code?: string;
    data?: ExtendVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoHomePageVo_ = {
    code?: string;
    data?: HomePageVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoIntegralBalanceVo_ = {
    code?: string;
    data?: IntegralBalanceVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoIntegralConfigVo_ = {
    code?: string;
    data?: IntegralConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListBrandVo_ = {
    code?: string;
    data?: BrandVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListBusinessAnalyseTrendVo_ = {
    code?: string;
    data?: BusinessAnalyseTrendVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCategoryBaseVo_ = {
    code?: string;
    data?: CategoryBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCategoryProductTree_ = {
    code?: string;
    data?: CategoryProductTree[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCategoryServeTree_ = {
    code?: string;
    data?: CategoryServeTree[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCategoryTreeSelect_ = {
    code?: string;
    data?: CategoryTreeSelect[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListChannelVo_ = {
    code?: string;
    data?: ChannelVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCountMealBaseVo_ = {
    code?: string;
    data?: CountMealBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCountMealTypeBaseVo_ = {
    code?: string;
    data?: CountMealTypeBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListCouponModelInfosVo_ = {
    code?: string;
    data?: CouponModelInfosVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListDeptTreeSelect_ = {
    code?: string;
    data?: DeptTreeSelect[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListEmployeeBaseVo_ = {
    code?: string;
    data?: EmployeeBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListEmployeeNameVo_ = {
    code?: string;
    data?: EmployeeNameVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListExtendTemplateVo_ = {
    code?: string;
    data?: ExtendTemplateVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListGiftVo_ = {
    code?: string;
    data?: GiftVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListIndustryDetail_ = {
    code?: string;
    data?: IndustryDetail[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListLadderConfigVo_ = {
    code?: string;
    data?: LadderConfigVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListMealTypeBaseVo_ = {
    code?: string;
    data?: MealTypeBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListMemberCountMealAppVo_ = {
    code?: string;
    data?: MemberCountMealAppVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListMemberCountMealVo_ = {
    code?: string;
    data?: MemberCountMealVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListMessageTemplateVo_ = {
    code?: string;
    data?: MessageTemplateVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListMoneyMealMemberVo_ = {
    code?: string;
    data?: MoneyMealMemberVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListMoneyMealVo_ = {
    code?: string;
    data?: MoneyMealVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListNormalTypeListVo_ = {
    code?: string;
    data?: NormalTypeListVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListOrderCancelVo_ = {
    code?: string;
    data?: OrderCancelVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListOrderCouponInfosVo_ = {
    code?: string;
    data?: OrderCouponInfosVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListOrderCouponInfosVoApp_ = {
    code?: string;
    data?: OrderCouponInfosVoApp[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListOrderStatisticProfitVo_ = {
    code?: string;
    data?: OrderStatisticProfitVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPaymentMethodVo_ = {
    code?: string;
    data?: PaymentMethodVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPendingCategory_ = {
    code?: string;
    data?: PendingCategory[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPendingInfos_ = {
    code?: string;
    data?: PendingInfos[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPerformanceCommissionVo_ = {
    code?: string;
    data?: PerformanceCommissionVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPostTreeVo_ = {
    code?: string;
    data?: PostTreeVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPostVo_ = {
    code?: string;
    data?: PostVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListPrintConfigVo_ = {
    code?: string;
    data?: PrintConfigVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListProjectAnalyseTrendVo_ = {
    code?: string;
    data?: ProjectAnalyseTrendVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListProjectConfigVo_ = {
    code?: string;
    data?: ProjectConfigVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListRechargeConfigVo_ = {
    code?: string;
    data?: RechargeConfigVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListRecordCategoryVo_ = {
    code?: string;
    data?: RecordCategoryVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListRoomCategoryVo_ = {
    code?: string;
    data?: RoomCategoryVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSaleConfigVo_ = {
    code?: string;
    data?: SaleConfigVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListServeBaseVo_ = {
    code?: string;
    data?: ServeBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSpecsKeyDetailVo_ = {
    code?: string;
    data?: SpecsKeyDetailVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSpecsKeyVo_ = {
    code?: string;
    data?: SpecsKeyVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSpecsValueBaseVo_ = {
    code?: string;
    data?: SpecsValueBaseVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSpecsValueVo_ = {
    code?: string;
    data?: SpecsValueVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSpendCategoryVo_ = {
    code?: string;
    data?: SpendCategoryVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListStoreList_ = {
    code?: string;
    data?: StoreList[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListString_ = {
    code?: string;
    data?: string[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSysMenuTree_ = {
    code?: string;
    data?: SysMenuTree[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListSysRoleVo_ = {
    code?: string;
    data?: SysRoleVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListTurnoverConfigVo_ = {
    code?: string;
    data?: TurnoverConfigVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoListUnitVo_ = {
    code?: string;
    data?: UnitVo[];
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMapStringObject_ = {
    code?: string;
    data?: Record<string, any>;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMapStringString_ = {
    code?: string;
    data?: Record<string, any>;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMealBaseVo_ = {
    code?: string;
    data?: MealBaseVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMemberDetailVo_ = {
    code?: string;
    data?: MemberDetailVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMessageConfigVo_ = {
    code?: string;
    data?: MessageConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMoneyMealDetailVo_ = {
    code?: string;
    data?: MoneyMealDetailVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMoneyMealDiscountConfigVo_ = {
    code?: string;
    data?: MoneyMealDiscountConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMoneyMealDocVo_ = {
    code?: string;
    data?: MoneyMealDocVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMoneyMealMemberVo_ = {
    code?: string;
    data?: MoneyMealMemberVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMoneyMealPriceConfigVo_ = {
    code?: string;
    data?: MoneyMealPriceConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMsgAccountDetail_ = {
    code?: string;
    data?: MsgAccountDetail;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMsgAccountRecordVo_ = {
    code?: string;
    data?: MsgAccountRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoMsgSendDetail_ = {
    code?: string;
    data?: MsgSendDetail;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoObject_ = {
    code?: string;
    data?: Record<string, any>;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOpenRechargeRecordVo_ = {
    code?: string;
    data?: OpenRechargeRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailCommonVoExtensionGiftExchangeVo_ = {
    code?: string;
    data?: OrderDetailCommonVoExtensionGiftExchangeVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailCommonVoExtensionMoneyMealDetailVo_ = {
    code?: string;
    data?: OrderDetailCommonVoExtensionMoneyMealDetailVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailCommonVoListExtensionCountMealDetailVo_ = {
    code?: string;
    data?: OrderDetailCommonVoListExtensionCountMealDetailVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailCommonVoListExtensionCouponDetailVo_ = {
    code?: string;
    data?: OrderDetailCommonVoListExtensionCouponDetailVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailCommonVoListExtensionProjectItemDetailVo_ = {
    code?: string;
    data?: OrderDetailCommonVoListExtensionProjectItemDetailVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailCommonVoObject_ = {
    code?: string;
    data?: OrderDetailCommonVoObject_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailOperationCountMealVo_ = {
    code?: string;
    data?: OrderDetailOperationCountMealVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderDetailOperationVo_ = {
    code?: string;
    data?: OrderDetailOperationVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderStatisticsDetailVoOrderStatisticsChargeExtension_ = {
    code?: string;
    data?: OrderStatisticsDetailVoOrderStatisticsChargeExtension_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderStatisticsDetailVoOrderStatisticsCountMealExtension_ = {
    code?: string;
    data?: OrderStatisticsDetailVoOrderStatisticsCountMealExtension_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderStatisticsDetailVoOrderStatisticsProjectExtension_ = {
    code?: string;
    data?: OrderStatisticsDetailVoOrderStatisticsProjectExtension_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderStatisticsPaymentStatistics_ = {
    code?: string;
    data?: OrderStatisticsPaymentStatistics;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoOrderStatisticsTakingTrend_ = {
    code?: string;
    data?: OrderStatisticsTakingTrend;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageAccountChangeRecordVo_ = {
    code?: string;
    data?: PageAccountChangeRecordVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageBusinessAnalyseVo_ = {
    code?: string;
    data?: PageBusinessAnalyseVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageChannelVo_ = {
    code?: string;
    data?: PageChannelVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageCountMealDoc_ = {
    code?: string;
    data?: PageCountMealDoc_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageCountMealVo_ = {
    code?: string;
    data?: PageCountMealVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageCouponInfos_ = {
    code?: string;
    data?: PageCouponInfos_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageCustomerRecordVo_ = {
    code?: string;
    data?: PageCustomerRecordVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageEmployeeVo_ = {
    code?: string;
    data?: PageEmployeeVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageExtendTemplateVo_ = {
    code?: string;
    data?: PageExtendTemplateVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageGiftVo_ = {
    code?: string;
    data?: PageGiftVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageHandVo_ = {
    code?: string;
    data?: PageHandVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageIntegralChangeRecordVo_ = {
    code?: string;
    data?: PageIntegralChangeRecordVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageMemberDoc_ = {
    code?: string;
    data?: PageMemberDoc_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageMemberForSmsVo_ = {
    code?: string;
    data?: PageMemberForSmsVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageMemberVo_ = {
    code?: string;
    data?: PageMemberVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderBaseInfosVo_ = {
    code?: string;
    data?: PageOrderBaseInfosVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderDetailCommonDocDelayExtensionRecordsQueryVo_ = {
    code?: string;
    data?: PageOrderDetailCommonDocDelayExtensionRecordsQueryVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionCountMealBuyItemVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionCountMealBuyItemVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionCountMealDelayVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionCountMealDelayVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionCouponHivingVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionCouponHivingVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionGiftItemVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionGiftItemVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionIncomeExpenseVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionIncomeExpenseVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionMemberReimbursementItemVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionMemberReimbursementItemVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionMoneyMealCreateListVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionMoneyMealCreateListVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderListCommonVoExtensionProjectItemVo_ = {
    code?: string;
    data?: PageOrderListCommonVoExtensionProjectItemVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageOrderStatisticsItemsVoExtensionCountMealStatistics_ = {
    code?: string;
    data?: PageOrderStatisticsItemsVoExtensionCountMealStatistics_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageProductVo_ = {
    code?: string;
    data?: PageProductVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageProjectDoc_ = {
    code?: string;
    data?: PageProjectDoc_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageRoomVo_ = {
    code?: string;
    data?: PageRoomVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageServeVo_ = {
    code?: string;
    data?: PageServeVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoPageSysRoleVo_ = {
    code?: string;
    data?: PageSysRoleVo_;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoProductDetailVo_ = {
    code?: string;
    data?: ProductDetailVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoProjectAnalyseVo_ = {
    code?: string;
    data?: ProjectAnalyseVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoProjectConfigVo_ = {
    code?: string;
    data?: ProjectConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoProjectDoc_ = {
    code?: string;
    data?: ProjectDoc;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoProjectSaleRecordVo_ = {
    code?: string;
    data?: ProjectSaleRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoRechargeConfigVo_ = {
    code?: string;
    data?: RechargeConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoReimbursementRecordVo_ = {
    code?: string;
    data?: ReimbursementRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoSalaryRecordVo_ = {
    code?: string;
    data?: SalaryRecordVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoSaleConfigVo_ = {
    code?: string;
    data?: SaleConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoSpecsBaseVo_ = {
    code?: string;
    data?: SpecsBaseVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoStoreDetailInfo_ = {
    code?: string;
    data?: StoreDetailInfo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoString_ = {
    code?: string;
    data?: string;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoSysRoleAuthorityDTO_ = {
    code?: string;
    data?: SysRoleAuthorityDTO;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type ResponseResultDtoSystemConfigVo_ = {
    code?: string;
    data?: SystemConfigVo;
    message?: string;
    module?: string;
    possibleReason?: string;
    suggestMeasure?: string;
    traceId?: string;
  };

  type RoleSaveDTO = {
    /** 描述 */
    describe?: string;
    /** 主键 */
    id?: number;
    /** 菜单ID */
    menuIdList?: number[];
    /** 名称 */
    name: string;
    /** 备注 */
    remark?: string;
    /** 资源id */
    resourceIdList?: number[];
    /** 状态 */
    status?: boolean;
  };

  type RoomCategoryDto = {
    /** 房间分类id(新增时不填) */
    id: string;
    /** 分类名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type RoomCategoryVo = {
    /** 房间分类id */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    roomNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type RoomDetailVo = {
    /** 挂单id */
    pendingId?: string;
    /** 房间id */
    roomId?: string;
    /** 房间名称 */
    roomName?: string;
    /** 房间状态 */
    roomStatus?: number;
    /** 状态描述 */
    roomStatusDesc?: string;
  };

  type RoomDto = {
    /** 分类id */
    categoryId: string;
    /** 房间id(新增时不填) */
    id: string;
    /** 房间名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 备注 */
    remark?: string;
    /** 状态(0空闲1使用中) */
    status?: number;
  };

  type RoomVo = {
    /** 分类id */
    categoryId?: string;
    /** 分类名称 */
    categoryName?: string;
    /** 房间id */
    id?: string;
    /** 房间名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 备注 */
    remark?: string;
    /** 状态(0空闲1使用中) */
    status?: number;
  };

  type SalaryRecord = {
    /** 员工基本薪资 */
    baseSalary?: number;
    /** 员工id */
    employeeId?: string;
    /** 员工名称 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 阶梯提成 */
    ladderCommission?: number;
    /** 次卡销售提成 */
    mealSaleCommission?: number;
    /** 开卡提成 */
    openCommission?: number;
    /** 产品提成 */
    productCommission?: number;
    /** 充值提成 */
    rechargeCommission?: number;
    /** 还款提成 */
    reimbursementCommission?: number;
    /** 打赏提成 */
    rewardCommission?: number;
    /** 奖惩金额 */
    rewardsPunishments?: number;
    /** 服务提成 */
    serveCommission?: number;
    /** 合计 */
    total?: number;
    /** 店营业额提成 */
    turnoverCommission?: number;
  };

  type salaryRecordUsingGETParams = {
    /** 开始时间 */
    beginDate: string;
    /** 当前页 */
    current: number;
    /** 员工id */
    employeeIds: number[];
    /** 结束时间 */
    endDate: string;
    /** 每页显示记录数 */
    pageSize: number;
  };

  type SalaryRecordVo = {
    /** 员工基本薪资(合计) */
    baseSalarySum?: number;
    /** 是否已结算 */
    isSettle?: number;
    /** 阶梯提成(合计) */
    ladderCommissionSum?: number;
    /** 次卡销售提成(合计) */
    mealSaleCommissionSum?: number;
    /** 开卡提成(合计) */
    openCommissionSum?: number;
    page?: PageSalaryRecord_;
    /** 产品提成(合计) */
    productCommissionSum?: number;
    /** 充值提成(合计) */
    rechargeCommissionSum?: number;
    /** 还款提成(合计) */
    reimbursementCommissionSum?: number;
    /** 打赏提成(合计) */
    rewardCommissionSum?: number;
    /** 奖惩金额(合计) */
    rewardsPunishmentsSum?: number;
    /** 服务提成(合计) */
    serveCommissionSum?: number;
    /** 合计(合计) */
    totalSum?: number;
    /** 店营业额提成(合计) */
    turnoverCommissionSum?: number;
  };

  type SaleConfigDto = {
    /** 提成基数(1:业绩,2实收) */
    commissionBase?: number;
    /** 次卡模板id(选择次卡类型时(1单项计次2整体计次3不限计次)) */
    countMealModelId: string;
    deductCost: PerformanceCommissionValueDto;
    /** 职位id(-1全部) */
    postId: string;
    sale: PerformanceCommissionValueDto;
    /** 类型(1:次卡销售提成,2次卡销售业绩) */
    type: number;
  };

  type SaleConfigVo = {
    /** 提成基数(1:业绩,2实收) */
    commissionBase?: number;
    /** 次卡模板id */
    countMealModelId?: string;
    deductCost?: PerformanceCommissionValueDto;
    /** 职位id(-1全部) */
    postId?: string;
    sale?: PerformanceCommissionValueDto;
  };

  type SectionConfig = {
    base: PerformanceCommissionValueDto;
    /** 提成区段起始 */
    sectionBegin: number;
    /** 提成区段结束 */
    sectionEnd: number;
  };

  type ServeBaseVo = {
    /** 分类id */
    categoryId?: string;
    /** 售价 */
    price: number;
    /** 服务id */
    serveId: string;
    /** 服务名称 */
    serveName: string;
  };

  type ServeDto = {
    /** 复购周期 */
    buybackDay?: number;
    /** 服务类别id */
    categoryId: string;
    /** 服务成本 */
    cost?: number;
    /** 服务id(新增时不填) */
    id: string;
    /** 服务图片路径 */
    img?: string;
    /** 最低售价 */
    miniPrice?: number;
    /** 服务名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 售价 */
    price: number;
    /** 回访天数 */
    repayDay?: number;
    /** 检索码 */
    searchCode?: string;
    /** 是否是特价0否1是 */
    specialOffer?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 是否允许预约0不允许1允许 */
    subscribe?: number;
    /** 工时 */
    workHours?: number;
    /** 工时费用类型(1比例2固定) */
    workHoursType?: number;
    /** 工时费用 */
    workHoursValue?: number;
  };

  type ServeVo = {
    /** 复购周期 */
    buybackDay?: number;
    /** 服务类别id */
    categoryId: string;
    /** 服务类别名称 */
    categoryName: string;
    /** 服务成本 */
    cost?: number;
    /** 服务id */
    id: string;
    /** 服务图片路径 */
    img: string;
    /** 最低售价 */
    miniPrice?: number;
    /** 服务名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 售价 */
    price?: number;
    /** 回访天数 */
    repayDay?: number;
    /** 检索码 */
    searchCode?: string;
    /** 是否是特价0否1是 */
    specialOffer?: number;
    /** 状态(1正常0停用) */
    status?: number;
    /** 是否允许预约0不允许1允许 */
    subscribe?: number;
    /** 工时 */
    workHours?: number;
    /** 工时费用类型(1比例2固定) */
    workHoursType?: number;
    /** 工时费用 */
    workHoursValue?: number;
  };

  type setActivateUsingPOSTParams = {
    /** 优惠券id */
    id: number;
    /** 优惠券模板状态(0:不可用,1:可用) */
    type: number;
  };

  type SetDefaultDto = {
    /** 主键id */
    id: string;
  };

  type SettleOrderMealDto = {
    countMeal?: CountMealBuyDto;
    couponInfoDto?: CouponInfoDto;
    moneyMeal?: MoneyMealBuyDto;
  };

  type settleSalaryUsingGETParams = {
    /** 开始时间 */
    beginDate?: string;
    /** 结束时间 */
    endDate?: string;
  };

  type ShopinfoVo = {
    /** 详细地址 */
    address?: string;
    /** 营业时间 */
    businessHours?: string;
    /** 市 */
    city?: string;
    /** 国家 */
    country?: string;
    /** 区 */
    district?: string;
    /** 主键id（编辑时必传） */
    id?: string;
    /** 行业id */
    industryId: string;
    introduce?: IntroduceDto;
    /** 纬度 */
    latitude?: number;
    /** 店铺logo */
    logoUrl?: string;
    /** 经度 */
    longitude?: number;
    /** 店铺名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 负责人id */
    principalId: string;
    /** 省 */
    province?: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 店铺电话 */
    telphone?: string;
  };

  type SpecsBaseVo = {
    /** 售价 */
    price: number;
    /** 商品规格id */
    specsId: string;
  };

  type SpecsDetailVo = {
    /** 运输费 */
    freight: number;
    /** 包装费 */
    packing: number;
    /** 售价 */
    price: number;
    /** 条形码 */
    specsBarCode?: string;
    /** 商品规格id */
    specsId: string;
    /** 商品规格值 */
    specsValueDetailVos: SpecsValueDetailVo[];
  };

  type SpecsKeyDetailVo = {
    /** 商品规格属性id */
    id?: string;
    /** 商品规格属性名称 */
    name?: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 商品规格属性值列表 */
    valueVos?: SpecsValueVo[];
  };

  type SpecsKeyDto = {
    /** 商品规格属性id(新增时不填) */
    id: string;
    /** 商品规格属性名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type SpecsKeyVo = {
    /** 创建时间 */
    createTime?: string;
    /** 商品规格属性id */
    id: string;
    /** 商品规格属性名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type SpecsValueBaseVo = {
    /** 显示顺序 */
    orderNum?: number;
    /** 售价 */
    price: number;
    /** 商品id */
    productId: string;
    /** 商品名称 */
    productName: string;
    /** 商品规格id */
    specsId: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 商品规格属性值 */
    value: string;
  };

  type SpecsValueDetailVo = {
    /** 显示顺序 */
    orderNum?: number;
    /** 商品规格属性id */
    specsKeyId: string;
    /** 商品规格属性名称 */
    specsKeyName: string;
    /** 商品规格属性值id */
    specsValueId: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 商品规格属性值 */
    value: string;
  };

  type SpecsValueDto = {
    /** 商品规格属性值id(新增时不填) */
    id: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品规格属性id */
    specsKeyId: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 商品规格属性值 */
    value: string;
  };

  type SpecsValuesDto = {
    /** 条形码 */
    barCode?: string;
    /** 运输费 */
    freight?: number;
    /** 包装费 */
    packing?: number;
    /** 售价 */
    price: number;
    /** 商品规格id */
    specsId?: string;
    /** 商品规格属性值id集合(逗号分割) */
    specsValueIds: string[];
  };

  type SpecsValueVo = {
    /** 商品规格属性值id */
    id: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 商品规格属性id */
    specsKeyId: string;
    /** 状态(1正常0停用) */
    status?: number;
    /** 商品规格属性值 */
    value: string;
  };

  type SpendCategoryDto = {
    /** 信息来源 */
    channel?: string;
    /** 收支分类id(新增时不填) */
    id: string;
    /** 分类名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 备注 */
    remark?: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type SpendCategoryVo = {
    /** 信息来源 */
    channel?: string;
    /** 创建时间 */
    createTime?: string;
    /** 收支分类id */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 备注 */
    remark?: string;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type StoreDetailInfo = {
    address?: string;
    businessHours?: string;
    city?: string;
    country?: string;
    district?: string;
    id?: string;
    industryId?: string;
    industryName?: string;
    introduce?: IntroduceDto;
    isDisable?: boolean;
    latitude?: number;
    logoUrl?: string;
    longitude?: number;
    name?: string;
    principalId?: string;
    principalMobile?: string;
    principalName?: string;
    province?: string;
    telphone?: string;
  };

  type StoreList = {
    /** 到期时间 */
    expireTime?: string;
    /** 店铺id */
    id?: string;
    isDisable?: boolean;
    /** 店铺logo */
    logoUrl?: string;
    /** 店铺名称 */
    name: string;
  };

  type SysMenuTree = {
    children?: SysMenuTree[];
    /** 描述 */
    describe?: string;
    /** 图标 */
    icon?: string;
    id?: string;
    name?: string;
    parentId?: string;
    /** 地址栏地址 */
    path?: string;
    /** 菜单类型 */
    resourceType?: number;
    /** 资源 */
    resources?: SysResourceTree[];
    tempParentId?: string;
  };

  type SysResourceTree = {
    /** 编码 */
    code: string;
    /** 资源id */
    id: string;
    /** 名称 */
    name: string;
  };

  type SysRoleAuthorityDTO = {
    /** 资源ID */
    menuIdList?: string;
    resourceIdList?: string;
    /** 角色id */
    roleId?: number;
  };

  type SysRoleVo = {
    /** 人数 */
    count?: number;
    /** 描述 */
    describe?: string;
    /** 角色id */
    id?: string;
    /** 角色名称 */
    name?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 内置角色 */
    readonly?: boolean;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type SystemConfigDto = {
    /** 消费单据自动生产手工单号 */
    autoCustomerSn: number;
    /** 实收卡金不足时自动使用赠送卡金支付 */
    autoGiveMoneyPay: number;
    /** 顾客卡金不足时自动使用微信结算 */
    autoWechatPay: number;
    /** 开卡和充值不允许修改金额 */
    cardNotEditPrice: number;
    /** 跨零点营业时前台单据日期扎账 */
    checkOut: number;
    /** 跨零点营业时前台单据日期扎账时间 */
    checkOutTime?: string;
    /** 前台收银关闭挂单功能 */
    closePendingOrder: number;
    /** 次卡消费时,选择服务项目默认用次数结算 */
    consumeDefaultMealCount: number;
    /** 消费积分比 */
    consumeIntegral?: number;
    /** 会员卡消费需要验证密码 */
    consumeVerifyPassword: number;
    /** 前台收银默认显示产品列表 */
    defaultShowProject: number;
    /** 允许在会员价基础上打折 */
    enableFoldUp: number;
    /** 开卡时启用补老卡功能 */
    enableOldCard: number;
    /** 前台收银允许整单打折 */
    enableWholeDiscount: number;
    /** 前台收银加密显示手机号 */
    encryptionMobile: number;
    /** 会员卡到期允许消费1不允许2允许使用非卡金账户消费3允许消费 */
    expireConsume: number;
    /** 主键id */
    id: string;
    /** 不允许修改单据日期 */
    notEditBillDate: number;
    /** 次卡销售不允许修改次数和金额 */
    notEditCountPrice: number;
    /** 不允许修改入会费 */
    notEditJoinMoney: number;
    /** 不允许修改价格 */
    notEditPrice: number;
    /** 是否显示前台数据 */
    showData: number;
  };

  type SystemConfigVo = {
    /** 消费单据自动生产手工单号 */
    autoCustomerSn?: number;
    /** 实收卡金不足时自动使用赠送卡金支付 */
    autoGiveMoneyPay?: number;
    /** 顾客卡金不足时自动使用微信结算 */
    autoWechatPay?: number;
    /** 开卡和充值不允许修改金额 */
    cardNotEditPrice?: number;
    /** 跨零点营业时前台单据日期扎账 */
    checkOut?: number;
    /** 跨零点营业时前台单据日期扎账时间 */
    checkOutTime?: string;
    /** 前台收银关闭挂单功能 */
    closePendingOrder?: number;
    /** 次卡消费时,选择服务项目默认用次数结算 */
    consumeDefaultMealCount?: number;
    /** 会员卡消费需要验证密码 */
    consumeVerifyPassword?: number;
    /** 前台收银默认显示产品列表 */
    defaultShowProject?: number;
    /** 允许在会员价基础上打折 */
    enableFoldUp?: number;
    /** 开卡时启用补老卡功能 */
    enableOldCard?: number;
    /** 前台收银允许整单打折 */
    enableWholeDiscount?: number;
    /** 前台收银加密显示手机号 */
    encryptionMobile?: number;
    /** 会员卡到期允许消费1不允许2允许使用非卡金账户消费3允许消费 */
    expireConsume?: number;
    /** 主键id */
    id?: string;
    /** 不允许修改单据日期 */
    notEditBillDate?: number;
    /** 次卡销售不允许修改次数和金额 */
    notEditCountPrice?: number;
    /** 不允许修改入会费 */
    notEditJoinMoney?: number;
    /** 不允许修改价格 */
    notEditPrice?: number;
    /** 是否显示前台数据 */
    showData?: number;
  };

  type SysUserRoleDto = {
    /** 员工id */
    employeeId?: string;
    /** 员工id集合 */
    employeeIds?: string;
    /** 角色ID */
    roleId?: string;
    /** 角色id集合 */
    roleIds?: string;
  };

  type TurnoverConfigDto = {
    /** 提成计算方式1落段2逐段 */
    calculation: number;
    /** id(新增时不填) */
    id?: string;
    /** 业绩类型(1:服务业绩,2:产品业绩,3:开卡业绩,4:充值业绩,5次卡业绩) */
    performanceTypes: number[];
    /** 职位id */
    postId: string;
    /** 区段设置 */
    sections: SectionConfig[];
  };

  type TurnoverConfigVo = {
    /** 提成计算方式1落段2逐段 */
    calculation?: number;
    /** id */
    id?: string;
    /** 业绩类型(1:服务业绩,2:产品业绩,3:开卡业绩,4:充值业绩,5次卡业绩) */
    performanceTypes?: number[];
    /** 职位id */
    postId?: string;
    /** 区段设置 */
    sections?: SectionConfig[];
  };

  type UnitDto = {
    /** 单位id */
    id: string;
    /** 单位名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type UnitVo = {
    /** 单位id */
    id: string;
    /** 单位名称 */
    name: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 状态(1正常0停用) */
    status?: number;
  };

  type UpdateBatchCategoryDto = {
    /** 分类id */
    categoryId: string;
    /** id集合 */
    ids: string;
  };

  type UpdateBatchStatusDto = {
    /** id集合 */
    ids: string;
    /** 状态(1正常0停用) */
    status: number;
  };

  type UpdateCardNumDto = {
    /** 卡号 */
    cardNum: string;
    /** 会员卡id */
    moneyMealId: string;
    /** 备注 */
    remark?: string;
  };

  type UpdateExpireTimeDto = {
    /** 过期时间 */
    expireTime: string;
    /** 会员卡id */
    moneyMealId: string;
    /** 备注 */
    remark?: string;
  };

  type UpdateIntegralDto = {
    /** 积分(减少传入负数) */
    integral: number;
    /** 会员id */
    memberId: string;
    /** 备注 */
    remark?: string;
  };

  type UpdateNoteDto = {
    /** 是否开通短信服务 */
    isNote: boolean;
    /** 会员卡id */
    moneyMealId: string;
  };

  type UpdateOrderBaseDto = {
    /** id */
    id: string;
    /** 排序 */
    orderNum: number;
  };

  type UpdatePasswordDto = {
    /** 验证码 */
    code: string;
    /** 确认密码 */
    confirmPassword: string;
    /** 手机号 */
    mobile: string;
    /** 密码 */
    password: string;
  };

  type UpdateProfileDto = {
    /** 会员id(新增时不传) */
    id: string;
    /** 会员头像 */
    profile?: string;
  };

  type UpdatePwdDto = {
    /** 确认密码 */
    confirmPassword: string;
    /** 会员卡id */
    moneyMealId: string;
    /** 密码 */
    password: string;
    /** 备注 */
    remark?: string;
  };

  type UpdateRemarkDto = {
    /** 会员卡id */
    moneyMealId: string;
    /** 备注 */
    remark: string;
  };

  type UpdateStatusBaseDto = {
    /** id */
    id: string;
    /** 状态(1正常0停用) */
    status: number;
  };

  type UpdateTurnoverDto = {
    /** id */
    id: string;
    /** 是否计入营业额 */
    isTurnover: boolean;
  };

  type UpdateTypeDto = {
    /** 会员卡id */
    moneyMealId: string;
    /** 会员卡类型Id */
    moneyMealTypeId: number;
    /** 备注 */
    remark?: string;
  };

  type verifyPersonDto = {
    /** 验证码 */
    code: string;
    /** 手机号 */
    mobile: string;
  };

  type verifyPersonUsingPOSTParams = {
    /** store_id */
    store_id: number;
  };
}

import request from '@/utils/request'

// section 部门 http://192.168.0.134:8089/v1/condition/index
export function getSection() {
  return request({
    url: '/condition/department',
    method: 'get'
  })
}

export function getSecDepartment() {
  return request({
    url: '/condition/sec-department',
    method: 'get'
  })
}

// platform 平台 http://192.168.0.134:8089/v1/condition/plat
export function getPlatform() {
  return request({
    url: '/condition/plat',
    method: 'get'
  })
}
export function getHistoryPlat() {
  return request({
    url: '/report/history-plat',
    method: 'get'
  })
}
// member 销售员 http://192.168.0.134:8089/v1/condition/member
export function getMember() {
  return request({
    url: '/condition/member',
    method: 'get'
  })
}
// 全部开发
export function getDeveloper() {
  return request({
    url: '/oa-goods/developer',
    method: 'get'
  })
}
export function getRuleDeveloper() {
  return request({
    url: '/products-engine/recommend-developer',
    method: 'get'
  })
}
// 没有权限的人员
export function getUsers() {
  return request({
    url: '/condition/member?flag=true',
    method: 'get'
  })
}
// store 仓库 http://192.168.0.134:8089/v1/condition/store

export function getStore() {
  return request({
    url: '/condition/store',
    method: 'get'
  })
}

// account 账号 http://192.168.0.134:8089/v1/condition/account

export function getAccount() {
  return request({
    url: '/condition/account',
    method: 'get'
  })
}

export function getExchange() {
  return request({
    url: '/settings/exchange',
    method: 'get'
  })
}
export function getExpress() {
  return request({
    url: '/tiny-tool/express',
    method: 'get'
  })
}
export function getStock(filters) {
  return request({
    url:
      '/data-center/out-of-stock-info?page=' +
      filters.page +
      '&pageSize=' +
      filters.pageSize,
    method: 'get'
  })
}
export function getBrandcountry() {
  return request({
    url: '/condition/brand-country',
    method: 'get'
  })
}
export function getBrandcategory() {
  return request({
    url: '/condition/brand-category',
    method: 'get'
  })
}
export function getGoodsstatus() {
  return request({
    url: '/condition/goods-status',
    method: 'get'
  })
}
export function getGoodscats() {
  return request({
    url: '/condition/goods-cats',
    method: 'get'
  })
}
export function getPerformlogistics() {
  return request({
    url: '/perform/logistics',
    method: 'get'
  })
}
// name:sales method:post url:http://192.168.0.134:8089/v1/report/sales

export function getSales(param) {
  const data = { condition: param }
  return request({
    url: '/report/sales',
    method: 'post',
    data
  })
}

export function getDevelop(param) {
  const data = { condition: param }
  return request({
    url: '/report/develop',
    method: 'post',
    data
  })
}

export function getPurchase(param) {
  const data = { condition: param }
  return request({
    url: '/report/purchase',
    method: 'post',
    data
  })
}

export function getDevLimit(param) {
  const data = { condition: param }
  return request({
    url: '/report/dev-limit',
    method: 'post',
    data
  })
}

export function getDevGoodsProfit(param) {
  const data = { condition: param }
  return request({
    url: '/report/dev-goods-profit?page=' + param.page + '&sort=' + param.sort,
    method: 'post',
    data
  })
}

export function getProfitDetail(param) {
  const data = { condition: param }
  return request({
    url: '/report/dev-goods-profit-detail',
    method: 'post',
    data
  })
}

export function getPossess(param) {
  const data = { condition: param }
  return request({
    url: '/report/possess',
    method: 'post',
    data
  })
}
export function getEbaysales(param) {
  const data = { condition: param }
  return request({
    url: '/report/ebay-sales',
    method: 'post',
    data
  })
}
export function getSalestrend(param) {
  const data = { condition: param }
  return request({
    url: '/report/sales-trend',
    method: 'post',
    data
  })
}
export function getHistoryRank(param) {
  const data = { condition: param }
  return request({
    url: '/report/history-rank',
    method: 'post',
    data
  })
}
export function getHistorySalesProfit(param) {
  const data = { condition: param }
  return request({
    url: '/report/history-sales-profit',
    method: 'post',
    data
  })
}
export function getHistoryProfit(param) {
  const data = { condition: param }
  return request({
    url: '/report/history-profit',
    method: 'post',
    data
  })
}
export function getProfitReport(param) {
  const data = { condition: param }
  return request({
    url: '/report/profit-trend',
    method: 'post',
    data
  })
}
export function getArtist(param) {
  const data = { condition: param }
  return request({
    url: '/report/artist',
    method: 'post',
    data
  })
}
export function getaccount(param) {
  const data = { condition: param }
  return request({
    url: '/report/account?sort=' + param.sort,
    method: 'post',
    data
  })
}

export function getSalesdeadfee(param) {
  const data = { condition: param }
  return request({
    url: '/upload/sales-dead-fee',
    method: 'post',
    data
  })
}
export function getUpdateexchange(param) {
  const data = { condition: param }
  return request({
    url: '/settings/exchange',
    method: 'post',
    data
  })
}
export function getToolaccount(param) {
  const data = { condition: param }
  return request({
    url: '/tool/account',
    method: 'post',
    data
  })
}
export function getToolsite() {
  return request({
    url: '/tool/site',
    method: 'post'
  })
}
export function getToolsize() {
  return request({
    url: '/tool/size',
    method: 'post'
  })
}
export function getToolcolor() {
  return request({
    url: '/tool/color',
    method: 'post'
  })
}
export function geteBaytemplate(param) {
  const data = { condition: param }
  return request({
    url: '/tool/ebay-template',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}

export function geteBaysku(param) {
  const data = { condition: param }
  return request({
    url: '/tool/ebaysku',
    method: 'post',
    data
  })
}

export function geteBayskutemplate(param) {
  const data = { condition: param }
  return request({
    url: '/tool/ebaysku-template',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}
export function getsmtsku(param) {
  const data = { condition: param }
  return request({
    url: '/tool/smtsku',
    method: 'post',
    data
  })
}
export function getsmtskutemplate(param) {
  const data = { condition: param }
  return request({
    url: '/tool/smtsku-template',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}
export function getwishsku(param) {
  const data = { condition: param }
  return request({
    url: '/tool/wishsku',
    method: 'post',
    data
  })
}
export function getwishskutemplate(param) {
  const data = { condition: param }
  return request({
    url: '/tool/wishsku-template',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}
export function getIntroduce(param) {
  const data = { condition: param }
  return request({
    url: '/report/introduce',
    method: 'post',
    data
  })
}
export function getBrand(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/brand?page=' + param.page,
    method: 'post',
    data
  })
}
export function getGoodspicture(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/goods-picture?page=' + param.page,
    method: 'post',
    data
  })
}
export function getOtherDeadFee(param) {
  const data = { condition: param }
  return request({
    url: '/report/other-dead-fee?page=' + param.page,
    method: 'post',
    data
  })
}
export function getPerform(param) {
  const data = { condition: param }
  return request({
    url: '/perform/perform',
    method: 'post',
    data
  })
}
export function getPsales(param) {
  const data = { condition: param }
  return request({
    url: '/perform/sales?page=' + param.page,
    method: 'post',
    data
  })
}
export function getSalesChange(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/sales-change?page=' + param.page + '&sort=' + param.sort,
    method: 'post',
    data
  })
}
export function priceTrend(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/price-trend',
    method: 'post',
    data
  })
}
export function getPerformcost(param) {
  const data = { condition: param }
  return request({
    url: '/perform/cost',
    method: 'post',
    data
  })
}
// 定价器
export function getUkfic(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/uk-fic',
    method: 'post',
    data
  })
}
export function getUkfic2(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/uk-fic2',
    method: 'post',
    data
  })
}
export function getExpressTracking(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/express-tracking',
    method: 'post',
    data
  })
}
export function getUK(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/uk',
    method: 'post',
    data
  })
}
export function getAU(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/au',
    method: 'post',
    data
  })
}
export function getOrder(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/declared-value',
    method: 'post',
    data
  })
}
export function getPaypal(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/exception-pay-pal',
    method: 'post',
    data
  })
}
export function getEdition(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/exception-edition',
    method: 'post',
    data
  })
}
export function getRefund(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund?page=' + param.page,
    method: 'post',
    data
  })
}
export function getRefundAnalysisPlat(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund-analysis-plat',
    method: 'post',
    data
  })
}
export function getRefundAnalysisSuffix(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund-analysis-suffix',
    method: 'post',
    data
  })
}
export function getRefundAnalysisExpress(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund-analysis-express',
    method: 'post',
    data
  })
}
export function getRefundAnalysisGoods(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund-analysis-goods',
    method: 'post',
    data
  })
}
export function getRefundExpressRate(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund-express-rate',
    method: 'post',
    data
  })
}
export function getRefundSuffixRate(param) {
  const data = { condition: param }
  return request({
    url: '/report/refund-suffix-rate',
    method: 'post',
    data
  })
}
export function getDeadFee(param) {
  const data = { condition: param }
  return request({
    url: '/report/dead-fee?page=' + param.page,
    method: 'post',
    data
  })
}
export function getExtraFee(param) {
  const data = { condition: param }
  return request({
    url: '/report/extra-fee?page=' + param.page,
    method: 'post',
    data
  })
}
// 订单量走势
export function APIOrderCount(param) {
  const data = { condition: param }
  return request({
    url: '/report/order-count',
    method: 'post',
    data
  })
}
// 销售数量走势
export function APISkuCount(param) {
  const data = { condition: param }
  return request({
    url: '/report/sku-count',
    method: 'post',
    data
  })
}
// 获取属性信息包装规格
export function getAttributeInfoPackName() {
  return request({
    url: 'oa-goodsinfo/attribute-info-pack-name',
    method: 'get'
  })
}
// 获取属性信息特殊属性
export function getAttributeInfoSpecialAttribute() {
  return request({
    url: 'oa-goodsinfo/attribute-info-special-attribute',
    method: 'get'
  })
}
// 获取属性信息仓库
export function getAttributeInfoStoreName() {
  return request({
    url: 'oa-goodsinfo/attribute-info-store-name',
    method: 'get'
  })
}
// 获取属性信息季节
export function getAttributeInfoSeason() {
  return request({
    url: 'oa-goodsinfo/attribute-info-season',
    method: 'get'
  })
}
// 获取属性信息禁售平台
export function getAttributeInfoPlat() {
  return request({
    url: 'oa-goodsinfo/attribute-info-plat',
    method: 'get'
  })
}
export function getForbidPlat() {
  return request({
    url: 'oa-goodsinfo/plat-forbid-plat',
    method: 'get'
  })
}
// 获取属性信息对应销售
export function getAttributeInfoSalesman() {
  return request({
    url: 'oa-goodsinfo/attribute-info-salesman',
    method: 'get'
  })
}
// 获取属性信息主类目
export function getAttributeInfoCat() {
  return request({
    url: 'oa-goodsinfo/attribute-info-cat',
    method: 'get'
  })
}
// 获取属性信息子类目
export function getAttributeInfoSubCat() {
  return request({
    url: 'oa-goodsinfo/attribute-info-sub-cat',
    method: 'get'
  })
}
// 获取平台信息产品状态
export function getPlatGoodsStatus() {
  return request({
    url: 'oa-goodsinfo/plat-goods-status',
    method: 'get'
  })
}
// 获取平台信息完善的平台
export function getPlatCompletedPlat() {
  return request({
    url: 'oa-goodsinfo/plat-completed-plat',
    method: 'get'
  })
}
// 获取平台信息所有账号
export function getPlatEbayAccount() {
  return request({
    url: 'oa-goodsinfo/plat-ebay-account',
    method: 'get'
  })
}
// 获取平台信息所有仓储
export function getPlatEbayStore() {
  return request({
    url: 'oa-goodsinfo/plat-ebay-store',
    method: 'get'
  })
}
export function getPickMembe() {
  return request({
    url: 'warehouse-tools/pick-member',
    method: 'get'
  })
}
export function APIPick(param) {
  const data = { condition: param }
  return request({
    url: 'warehouse-tools/pick',
    method: 'post',
    data
  })
}
// 获取平台信息站点
export function getEbaySite() {
  return request({
    url: 'oa-goodsinfo/ebay-site',
    method: 'get'
  })
}
export function getEbayVirtualStore(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/ebay-virtual-store?page=' + param.page,
    method: 'post',
    data
  })
}
export function getExpressExpired() {
  return request({
    url: 'tiny-tool/express-expired',
    method: 'get'
  })
}
export function getUkReplenish(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/uk-replenish?page=' + param.page,
    method: 'post',
    data
  })
}
export function getUkVirtual(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/uk-virtual-replenish?page=' + param.page,
    method: 'post',
    data
  })
}
export function getUkRealReplenish(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/au-real-replenish?page=' + param.page,
    method: 'post',
    data
  })
}
export function getAuRealReplenish(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/uk-real-replenish?page=' + param.page,
    method: 'post',
    data
  })
}
export function getStackStatus(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/stock-status',
    method: 'post',
    data
  })
}

export function getStockStatusDetail(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/stock-status-detail',
    method: 'post',
    data
  })
}

export function getStockDeveloperDetail(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/stock-developer-detail',
    method: 'post',
    data
  })
}

export function getStockDepartDetail(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/stock-depart-detail',
    method: 'post',
    data
  })
}

export function getKeywordAnalysis(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/keyword-analysis?page=' + param.currentPage,
    method: 'post',
    data
  })
}
export function getKeywordInfo(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/update-keyword-info',
    method: 'post',
    data
  })
}
export function getKeywordList(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/keyword-list?page=' + param.currentPage,
    method: 'post',
    data
  })
}

export function getkeywordExport(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/keyword-export',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}

export function getJoomCate() {
  return request({
    url: 'oa-data-mine/joom-cate',
    method: 'get'
  })
}

export function getSubscribeJoomCate(param) {
  const data = { condition: param }
  return request({
    url: '/oa-data-mine/subscribe-joom-cate',
    method: 'post',
    data
  })
}

export function getSubscribeJoomList() {
  return request({
    url: 'oa-data-mine/subscribe-joom-list',
    method: 'get'
  })
}

export function APIJoomCateProduct(param) {
  const data = { condition: param }
  return request({
    url: '/oa-data-mine/joom-cate-product?page=' + param.page + '&sort=' + param.sort,
    method: 'post',
    data
  })
}

export function getEbayBalanceConditon() {
  return request({
    url: '/tiny-tool/ebay-balance-condition',
    method: 'get'
  })
}

export function getJoomSubscribed() {
  return request({
    url: 'oa-data-mine/joom-store-subscribed',
    method: 'get'
  })
}

export function getSubscribeJoomStore(param) {
  const data = { condition: param }
  return request({
    url: '/oa-data-mine/subscribe-joom-store',
    method: 'post',
    data
  })
}

export function APIJoomStoreProduct(param) {
  const data = { condition: param }
  return request({
    url: '/oa-data-mine/joom-store-product?page=' + param.page + '&sort=' + param.sort,
    method: 'post',
    data
  })
}

export function getStockDepart(param) {
  const data = { condition: param }
  return request({
    url: 'data-center/stock-depart-detail',
    method: 'post',
    data
  })
}

export function getStockDepartStatusDetail(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/stock-depart-status-detail',
    method: 'post',
    data
  })
}

export function getStockDepartDeveloperDetail(param) {
  const data = { condition: param }
  return request({
    url: '/data-center/stock-depart-developer-detail',
    method: 'post',
    data
  })
}

export function getEbayXp(param) {
  return request({
    url: '/products-engine/recommend?plat=ebay&type=new&marketplace=' + param.marketplace + '&page=' + param.page + '&recommendStatus=' + param.recommendStatus + '&pageSize=' + param.pageSize + '&sort=' + param.sort + '&ruleName=' + param.ruleName,
    method: 'get'
  })
}

export function getEbayRx(param) {
  return request({
    url: '/products-engine/recommend?plat=ebay&type=hot&marketplace=' + param.marketplace + '&page=' + param.page + '&recommendStatus=' + param.recommendStatus + '&pageSize=' + param.pageSize + '&sort=' + param.sort + '&ruleName=' + param.ruleName,
    method: 'get'
  })
}
export function getWishXp(param) {
  return request({
    url: '/products-engine/recommend?plat=wish&marketplace=' + param.marketplace + '&page=' + param.page + '&recommendStatus=' + param.recommendStatus + '&pageSize=' + param.pageSize + '&sort=' + param.sort + '&ruleName=' + param.ruleName,
    method: 'get'
  })
}

export function getWishRx(param) {
  return request({
    url: '/products-engine/recommend?plat=wish&type=hot&marketplace=' + param.marketplace + '&page=' + param.page + '&recommendStatus=' + param.recommendStatus + '&pageSize=' + param.pageSize + '&sort=' + param.sort,
    method: 'get'
  })
}
export function getEbayXpMind(param) {
  return request({
    url: '/products-engine/mind-recommend?plat=ebay&type=new&marketplace=' + param.marketplace + '&page=' + param.page + '&pageSize=' + param.pageSize + '&sort=' + param.sort,
    method: 'get'
  })
}

export function getEbayRxMind(param) {
  return request({
    url: '/products-engine/mind-recommend?plat=ebay&type=hot&marketplace=' + param.marketplace + '&page=' + param.page + '&pageSize=' + param.pageSize + '&sort=' + param.sort,
    method: 'get'
  })
}

export function getWishRxMind(param) {
  return request({
    url: '/products-engine/mind-recommend?plat=wish&marketplace=' + param.marketplace + '&page=' + param.page + '&pageSize=' + param.pageSize + '&sort=' + param.sort,
    method: 'get'
  })
}

export function getShopeeMind(param) {
  return request({
    url: '/products-engine/mind-recommend?plat=shopee&marketplace=' + param.marketplace + '&page=' + param.page + '&pageSize=' + param.pageSize + '&sort=' + param.sort,
    method: 'get'
  })
}

export function gethwckcsku(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/sku?page=' + param.page,
    method: 'post',
    data
  })
}

export function getShopeePro(param) {
  return request({
    url: '/products-engine/recommend?plat=shopee&page=' + param.page + '&recommendStatus=' + param.recommendStatus + '&pageSize=' + param.pageSize + '&sort=' + param.sort,
    method: 'get'
  })
}

export function changePassword(param) {
  const data = { condition: param }
  return request({
    url: '/tiny-tool/set-password',
    method: 'post',
    data
  })
}

export function getMemberCk() {
  return request({
    url: '/warehouse-tools/freight-men',
    method: 'get'
  })
}

export function getDevProfitDetail(param) {
  const data = { condition: param }
  return request({
    url: '/report/develop-profit-detail?page=' + param.page,
    method: 'post',
    data
  })
}

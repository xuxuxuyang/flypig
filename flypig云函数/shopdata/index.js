// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  traceUser: true,
  env: 'donghualigongdaxue-7drb78b870209'
}
)
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const result = await db.collection('Commodity').where({
    _openid: wxContext.OPENID
  }).get()
  console.log(result)
  return{
    result
  }
}
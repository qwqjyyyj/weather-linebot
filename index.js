import 'dotenv/config'
import linebot from 'linebot'
import commandSS from './commands/ss.js'
import commandXY from './commands/xy.js'
import commandDA from './commands/da.js'
import commandZS from './commands/zs.js'
import commandZZ from './commands/zz.js'
import commandDT from './commands/dt.js'
import commandWH from './commands/wh.js'
import commandWS from './commands/ws.js'
import commandNG from './commands/ng.js'
import commandNH from './commands/nh.js'
import commandSL from './commands/sl.js'
import commandBT from './commands/bt.js'
import commandINFO from './commands/info.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === '松山' || event.message.text === '松山區') {
      commandSS(event)
    } else if (event.message.text === '信義' || event.message.text === '信義區') {
      commandXY(event)
    } else if (event.message.text === '大安' || event.message.text === '大安區') {
      commandDA(event)
    } else if (event.message.text === '中山' || event.message.text === '中山區') {
      commandZS(event)
    } else if (event.message.text === '中正' || event.message.text === '中正區') {
      commandZZ(event)
    } else if (event.message.text === '大同' || event.message.text === '大同區') {
      commandDT(event)
    } else if (event.message.text === '萬華' || event.message.text === '萬華區') {
      commandWH(event)
    } else if (event.message.text === '文山' || event.message.text === '文山區') {
      commandWS(event)
    } else if (event.message.text === '南港' || event.message.text === '南港區') {
      commandNG(event)
    } else if (event.message.text === '內湖' || event.message.text === '內湖區') {
      commandNH(event)
    } else if (event.message.text === '士林' || event.message.text === '士林區') {
      commandSL(event)
    } else if (event.message.text === '北投' || event.message.text === '北投區') {
      commandBT(event)
    } else if (event.message.text === '說明') {
      commandINFO(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

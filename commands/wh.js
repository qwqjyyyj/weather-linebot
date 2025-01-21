import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 萬華區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[6].LocationName = 萬華區
    // data.records.Locations[0].Location[6].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 萬華區第一個溫度
    // 一到六溫度
    const WanHuaTemp = data.records.Locations[0].Location[6].WeatherElement[0]
    const WanHuaFirstTemp = WanHuaTemp.Time[0].ElementValue[0].Temperature.toString()
    const WanHuaSecondTemp = WanHuaTemp.Time[1].ElementValue[0].Temperature.toString()
    const WanHuaThirdTemp = WanHuaTemp.Time[2].ElementValue[0].Temperature.toString()
    const WanHuaForthTemp = WanHuaTemp.Time[3].ElementValue[0].Temperature.toString()
    const WanHuaFifthTemp = WanHuaTemp.Time[4].ElementValue[0].Temperature.toString()
    const WanHuaSixthTemp = WanHuaTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = WanHuaTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SecondTime = WanHuaTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = SecondDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ThirdTime = WanHuaTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = ThirdDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ForthTime = WanHuaTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = ForthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const FifthTime = WanHuaTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = FifthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SixthTime = WanHuaTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = SixthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const result = await event.reply(
      showFirstTime + '時，攝氏' + WanHuaFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + WanHuaSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + WanHuaThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + WanHuaForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + WanHuaFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + WanHuaSixthTemp + '度'
    )
    // console.log(WanHuaFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 中正區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[4].LocationName = 中正區
    // data.records.Locations[0].Location[4].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 中正區第一個溫度
    // 一到六溫度
    const ZhongZhengTemp = data.records.Locations[0].Location[4].WeatherElement[0]
    const ZhongZhengFirstTemp = ZhongZhengTemp.Time[0].ElementValue[0].Temperature.toString()
    const ZhongZhengSecondTemp = ZhongZhengTemp.Time[1].ElementValue[0].Temperature.toString()
    const ZhongZhengThirdTemp = ZhongZhengTemp.Time[2].ElementValue[0].Temperature.toString()
    const ZhongZhengForthTemp = ZhongZhengTemp.Time[3].ElementValue[0].Temperature.toString()
    const ZhongZhengFifthTemp = ZhongZhengTemp.Time[4].ElementValue[0].Temperature.toString()
    const ZhongZhengSixthTemp = ZhongZhengTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = ZhongZhengTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei', // 指定台灣時區
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // 使用 24 小時制
    })
    const SecondTime = ZhongZhengTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = `${String(SecondDate.getHours() + 8).padStart(2, '0')}:${String(SecondDate.getMinutes()).padStart(2, '0')}`
    const ThirdTime = ZhongZhengTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = `${String(ThirdDate.getHours() + 8).padStart(2, '0')}:${String(ThirdDate.getMinutes()).padStart(2, '0')}`
    const ForthTime = ZhongZhengTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = `${String(ForthDate.getHours() + 8).padStart(2, '0')}:${String(ForthDate.getMinutes()).padStart(2, '0')}`
    const FifthTime = ZhongZhengTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = `${String(FifthDate.getHours() + 8).padStart(2, '0')}:${String(FifthDate.getMinutes()).padStart(2, '0')}`
    const SixthTime = ZhongZhengTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = `${String(SixthDate.getHours() + 8).padStart(2, '0')}:${String(SixthDate.getMinutes()).padStart(2, '0')}`

    const result = await event.reply(
      showFirstTime + '時，攝氏' + ZhongZhengFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + ZhongZhengSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + ZhongZhengThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + ZhongZhengForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + ZhongZhengFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + ZhongZhengSixthTemp + '度'
    )
    // console.log(ZhongZhengFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

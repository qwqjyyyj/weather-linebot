import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 中山區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[3].LocationName = 中山區
    // data.records.Locations[0].Location[3].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 中山區第一個溫度
    // 一到六溫度
    const ZhongShanTemp = data.records.Locations[0].Location[3].WeatherElement[0]
    const ZhongShanFirstTemp = ZhongShanTemp.Time[0].ElementValue[0].Temperature.toString()
    const ZhongShanSecondTemp = ZhongShanTemp.Time[1].ElementValue[0].Temperature.toString()
    const ZhongShanThirdTemp = ZhongShanTemp.Time[2].ElementValue[0].Temperature.toString()
    const ZhongShanForthTemp = ZhongShanTemp.Time[3].ElementValue[0].Temperature.toString()
    const ZhongShanFifthTemp = ZhongShanTemp.Time[4].ElementValue[0].Temperature.toString()
    const ZhongShanSixthTemp = ZhongShanTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = ZhongShanTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SecondTime = ZhongShanTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = SecondDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ThirdTime = ZhongShanTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = ThirdDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ForthTime = ZhongShanTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = ForthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const FifthTime = ZhongShanTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = FifthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SixthTime = ZhongShanTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = SixthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const result = await event.reply(
      showFirstTime + '時，攝氏' + ZhongShanFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + ZhongShanSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + ZhongShanThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + ZhongShanForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + ZhongShanFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + ZhongShanSixthTemp + '度'
    )
    // console.log(ZhongShanFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

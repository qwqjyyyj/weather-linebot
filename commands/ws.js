import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 文山區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[7].LocationName = 文山區
    // data.records.Locations[0].Location[7].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 文山區第一個溫度
    // 一到六溫度
    const WenShanTemp = data.records.Locations[0].Location[7].WeatherElement[0]
    const WenShanFirstTemp = WenShanTemp.Time[0].ElementValue[0].Temperature.toString()
    const WenShanSecondTemp = WenShanTemp.Time[1].ElementValue[0].Temperature.toString()
    const WenShanThirdTemp = WenShanTemp.Time[2].ElementValue[0].Temperature.toString()
    const WenShanForthTemp = WenShanTemp.Time[3].ElementValue[0].Temperature.toString()
    const WenShanFifthTemp = WenShanTemp.Time[4].ElementValue[0].Temperature.toString()
    const WenShanSixthTemp = WenShanTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = WenShanTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SecondTime = WenShanTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = SecondDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ThirdTime = WenShanTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = ThirdDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ForthTime = WenShanTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = ForthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const FifthTime = WenShanTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = FifthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SixthTime = WenShanTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = SixthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const result = await event.reply(
      showFirstTime + '時，攝氏' + WenShanFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + WenShanSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + WenShanThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + WenShanForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + WenShanFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + WenShanSixthTemp + '度'
    )
    // console.log(WenShanFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

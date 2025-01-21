import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 南港區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[8].LocationName = 南港區
    // data.records.Locations[0].Location[8].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 南港區第一個溫度
    // 一到六溫度
    const NanGangTemp = data.records.Locations[0].Location[8].WeatherElement[0]
    const NanGangFirstTemp = NanGangTemp.Time[0].ElementValue[0].Temperature.toString()
    const NanGangSecondTemp = NanGangTemp.Time[1].ElementValue[0].Temperature.toString()
    const NanGangThirdTemp = NanGangTemp.Time[2].ElementValue[0].Temperature.toString()
    const NanGangForthTemp = NanGangTemp.Time[3].ElementValue[0].Temperature.toString()
    const NanGangFifthTemp = NanGangTemp.Time[4].ElementValue[0].Temperature.toString()
    const NanGangSixthTemp = NanGangTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = NanGangTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SecondTime = NanGangTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = SecondDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ThirdTime = NanGangTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = ThirdDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ForthTime = NanGangTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = ForthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const FifthTime = NanGangTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = FifthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SixthTime = NanGangTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = SixthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const result = await event.reply(
      showFirstTime + '時，攝氏' + NanGangFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + NanGangSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + NanGangThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + NanGangForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + NanGangFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + NanGangSixthTemp + '度'
    )
    // console.log(NanGangFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

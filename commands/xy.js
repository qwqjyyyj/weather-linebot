import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 信義區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[1].LocationName = 信義區
    // data.records.Locations[0].Location[1].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 信義區第一個溫度
    // 一到六溫度
    const XinYiTemp = data.records.Locations[0].Location[1].WeatherElement[0]
    const XinYiFirstTemp = XinYiTemp.Time[0].ElementValue[0].Temperature.toString()
    const XinYiSecondTemp = XinYiTemp.Time[1].ElementValue[0].Temperature.toString()
    const XinYiThirdTemp = XinYiTemp.Time[2].ElementValue[0].Temperature.toString()
    const XinYiForthTemp = XinYiTemp.Time[3].ElementValue[0].Temperature.toString()
    const XinYiFifthTemp = XinYiTemp.Time[4].ElementValue[0].Temperature.toString()
    const XinYiSixthTemp = XinYiTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = XinYiTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SecondTime = XinYiTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = SecondDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ThirdTime = XinYiTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = ThirdDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ForthTime = XinYiTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = ForthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const FifthTime = XinYiTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = FifthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SixthTime = XinYiTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = SixthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const result = await event.reply(
      showFirstTime + '時，攝氏' + XinYiFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + XinYiSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + XinYiThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + XinYiForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + XinYiFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + XinYiSixthTemp + '度'
    )
    // console.log(XinYiFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

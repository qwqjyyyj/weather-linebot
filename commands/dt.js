import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 大同區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[5].LocationName = 大同區
    // data.records.Locations[0].Location[5].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 大同區第一個溫度
    // 一到六溫度
    const DaTongTemp = data.records.Locations[0].Location[5].WeatherElement[0]
    const DaTongFirstTemp = DaTongTemp.Time[0].ElementValue[0].Temperature.toString()
    const DaTongSecondTemp = DaTongTemp.Time[1].ElementValue[0].Temperature.toString()
    const DaTongThirdTemp = DaTongTemp.Time[2].ElementValue[0].Temperature.toString()
    const DaTongForthTemp = DaTongTemp.Time[3].ElementValue[0].Temperature.toString()
    const DaTongFifthTemp = DaTongTemp.Time[4].ElementValue[0].Temperature.toString()
    const DaTongSixthTemp = DaTongTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = DaTongTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = FirstDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SecondTime = DaTongTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = SecondDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ThirdTime = DaTongTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = ThirdDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const ForthTime = DaTongTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = ForthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const FifthTime = DaTongTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = FifthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const SixthTime = DaTongTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = SixthDate.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const result = await event.reply(
      showFirstTime + '時，攝氏' + DaTongFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + DaTongSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + DaTongThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + DaTongForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + DaTongFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + DaTongSixthTemp + '度'
    )
    // console.log(DaTongFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

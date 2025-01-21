import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 士林區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[10].LocationName = 士林區
    // data.records.Locations[0].Location[10].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 士林區第一個溫度
    // 一到六溫度
    const ShiLinTemp = data.records.Locations[0].Location[10].WeatherElement[0]
    const ShiLinFirstTemp = ShiLinTemp.Time[0].ElementValue[0].Temperature.toString()
    const ShiLinSecondTemp = ShiLinTemp.Time[1].ElementValue[0].Temperature.toString()
    const ShiLinThirdTemp = ShiLinTemp.Time[2].ElementValue[0].Temperature.toString()
    const ShiLinForthTemp = ShiLinTemp.Time[3].ElementValue[0].Temperature.toString()
    const ShiLinFifthTemp = ShiLinTemp.Time[4].ElementValue[0].Temperature.toString()
    const ShiLinSixthTemp = ShiLinTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = ShiLinTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = `${String(FirstDate.getHours()).padStart(2, '0')}:${String(FirstDate.getMinutes()).padStart(2, '0')}`
    const SecondTime = ShiLinTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = `${String(SecondDate.getHours()).padStart(2, '0')}:${String(SecondDate.getMinutes()).padStart(2, '0')}`
    const ThirdTime = ShiLinTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = `${String(ThirdDate.getHours()).padStart(2, '0')}:${String(ThirdDate.getMinutes()).padStart(2, '0')}`
    const ForthTime = ShiLinTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = `${String(ForthDate.getHours()).padStart(2, '0')}:${String(ForthDate.getMinutes()).padStart(2, '0')}`
    const FifthTime = ShiLinTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = `${String(FifthDate.getHours()).padStart(2, '0')}:${String(FifthDate.getMinutes()).padStart(2, '0')}`
    const SixthTime = ShiLinTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = `${String(SixthDate.getHours()).padStart(2, '0')}:${String(SixthDate.getMinutes()).padStart(2, '0')}`

    const result = await event.reply(
      showFirstTime + '時，攝氏' + ShiLinFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + ShiLinSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + ShiLinThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + ShiLinForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + ShiLinFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + ShiLinSixthTemp + '度'
    )
    // console.log(ShiLinFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

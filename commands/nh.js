import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 內湖區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[9].LocationName = 內湖區
    // data.records.Locations[0].Location[9].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 內湖區第一個溫度
    // 一到六溫度
    const NeiHuTemp = data.records.Locations[0].Location[9].WeatherElement[0]
    const NeiHuFirstTemp = NeiHuTemp.Time[0].ElementValue[0].Temperature.toString()
    const NeiHuSecondTemp = NeiHuTemp.Time[1].ElementValue[0].Temperature.toString()
    const NeiHuThirdTemp = NeiHuTemp.Time[2].ElementValue[0].Temperature.toString()
    const NeiHuForthTemp = NeiHuTemp.Time[3].ElementValue[0].Temperature.toString()
    const NeiHuFifthTemp = NeiHuTemp.Time[4].ElementValue[0].Temperature.toString()
    const NeiHuSixthTemp = NeiHuTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = NeiHuTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = `${String(FirstDate.getHours()).padStart(2, '0')}:${String(FirstDate.getMinutes()).padStart(2, '0')}`
    const SecondTime = NeiHuTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = `${String(SecondDate.getHours()).padStart(2, '0')}:${String(SecondDate.getMinutes()).padStart(2, '0')}`
    const ThirdTime = NeiHuTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = `${String(ThirdDate.getHours()).padStart(2, '0')}:${String(ThirdDate.getMinutes()).padStart(2, '0')}`
    const ForthTime = NeiHuTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = `${String(ForthDate.getHours()).padStart(2, '0')}:${String(ForthDate.getMinutes()).padStart(2, '0')}`
    const FifthTime = NeiHuTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = `${String(FifthDate.getHours()).padStart(2, '0')}:${String(FifthDate.getMinutes()).padStart(2, '0')}`
    const SixthTime = NeiHuTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = `${String(SixthDate.getHours()).padStart(2, '0')}:${String(SixthDate.getMinutes()).padStart(2, '0')}`

    const result = await event.reply(
      showFirstTime + '時，攝氏' + NeiHuFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + NeiHuSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + NeiHuThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + NeiHuForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + NeiHuFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + NeiHuSixthTemp + '度'
    )
    // console.log(NeiHuFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314')
    // 松山區
    // data.records.Locations[0].LocationsName = 台北市
    // data.records.Locations[0].Location[0].LocationName = 松山區
    // data.records.Locations[0].Location[0].WeatherElement[0].Time[0].ElementValue[0].Temperature.toString() = 松山區第一個溫度
    // 一到六溫度
    const SongShanTemp = data.records.Locations[0].Location[0].WeatherElement[0]
    const SongShanFirstTemp = SongShanTemp.Time[0].ElementValue[0].Temperature.toString()
    const SongShanSecondTemp = SongShanTemp.Time[1].ElementValue[0].Temperature.toString()
    const SongShanThirdTemp = SongShanTemp.Time[2].ElementValue[0].Temperature.toString()
    const SongShanForthTemp = SongShanTemp.Time[3].ElementValue[0].Temperature.toString()
    const SongShanFifthTemp = SongShanTemp.Time[4].ElementValue[0].Temperature.toString()
    const SongShanSixthTemp = SongShanTemp.Time[5].ElementValue[0].Temperature.toString()

    // 一到六時間
    const FirstTime = SongShanTemp.Time[0].DataTime
    const FirstDate = new Date(FirstTime)
    const showFirstTime = `${String(FirstDate.getHours()).padStart(2, '0')}:${String(FirstDate.getMinutes()).padStart(2, '0')}`
    const SecondTime = SongShanTemp.Time[1].DataTime
    const SecondDate = new Date(SecondTime)
    const showSecondTime = `${String(SecondDate.getHours()).padStart(2, '0')}:${String(SecondDate.getMinutes()).padStart(2, '0')}`
    const ThirdTime = SongShanTemp.Time[2].DataTime
    const ThirdDate = new Date(ThirdTime)
    const showThirdTime = `${String(ThirdDate.getHours()).padStart(2, '0')}:${String(ThirdDate.getMinutes()).padStart(2, '0')}`
    const ForthTime = SongShanTemp.Time[3].DataTime
    const ForthDate = new Date(ForthTime)
    const showForthTime = `${String(ForthDate.getHours()).padStart(2, '0')}:${String(ForthDate.getMinutes()).padStart(2, '0')}`
    const FifthTime = SongShanTemp.Time[4].DataTime
    const FifthDate = new Date(FifthTime)
    const showFifthTime = `${String(FifthDate.getHours()).padStart(2, '0')}:${String(FifthDate.getMinutes()).padStart(2, '0')}`
    const SixthTime = SongShanTemp.Time[5].DataTime
    const SixthDate = new Date(SixthTime)
    const showSixthTime = `${String(SixthDate.getHours()).padStart(2, '0')}:${String(SixthDate.getMinutes()).padStart(2, '0')}`

    const result = await event.reply(
      showFirstTime + '時，攝氏' + SongShanFirstTemp + '度\n' +
      showSecondTime + '時，攝氏' + SongShanSecondTemp + '度\n' +
      showThirdTime + '時，攝氏' + SongShanThirdTemp + '度\n' +
      showForthTime + '時，攝氏' + SongShanForthTemp + '度\n' +
      showFifthTime + '時，攝氏' + SongShanFifthTemp + '度\n' +
      showSixthTime + '時，攝氏' + SongShanSixthTemp + '度'
    )
    // console.log(SongShanFirstTemp)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

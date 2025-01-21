export default async event => {
  event.reply({
    type: 'text',
    text: '你想了解什麼資訊',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            text: '輸入所在臺北市行政區，例如：「中山」或「中山區」，即可獲得此時所屬之 凌晨/上午/下午/晚間 的每小時溫度',
            label: '使用說明再看一次'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '松山、信義、大安、中山、中正、大同、萬華、文山、南港、內湖、士林、北投',
            label: '臺北市行政區有什麼我忘了'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            uri: 'https://data.gov.tw/dataset/9293',
            label: '資料來源API'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '沒有ㄌ',
            label: '還有ㄇ'
          }
        }
      ]
    }
  })
}

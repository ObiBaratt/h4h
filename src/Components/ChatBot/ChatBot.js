import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

const primary = "#231E23"
const secondary = "#39A6A3"
const tertiary = "#DEEEEA"
const quaternary = "#BF1363"

const theme = {
  background: tertiary,
  botBubbleColor: quaternary,
  botFontColor: tertiary,
}

// background: '#DEEEEA',
// fontFamily: 'Helvetica Neue',
// headerBgColor: '#EF6C00',
// headerFontColor: '#231E23',
// headerFontSize: '15px',
// botBubbleColor: '#BF1363',
// botFontColor: '#fff',
// userBubbleColor: '#fff',
// userFontColor: '#4a4a4a',

const steps = [
    {
      id: '1',
      message: 'You can add custom components',
      trigger: '2',
    },
    {
      id: '2',
      component: (
        <div className="blue-bg">
            <h1>Meetup Info</h1>
            <p>Text about meetup info</p>
            <a href="/">Link</a>
        </div>

      ),
      end: true,
    },
  ]

const ChatBotComponent = () => {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    )
}

export default ChatBotComponent;

import ChatBot from 'react-simple-chatbot';

const chatbotSteps = [
    {
      id: '1',
      message: 'You can add custom components',
      trigger: '2',
    },
    {
      id: '2',
      component: (
        <div>
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
        <ChatBot steps={chatbotSteps} />
    )
}

export default ChatBotComponent;

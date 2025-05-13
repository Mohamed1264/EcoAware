// Local responses for different environmental topics

// Function to find the best matching response
const findBestResponse = (question) => {
  const lowerQuestion = question.toLowerCase();

  for (const category in LOCAL_RESPONSES) {
    const questions = LOCAL_RESPONSES[category].questions;
    const answers = LOCAL_RESPONSES[category].answers;

    for (let i = 0; i < questions.length; i++) {
      const keywords = questions[i].toLowerCase().split(" ");

      // Check if ANY keyword exists in the question
      const found = keywords.some(word => lowerQuestion.includes(word));

      if (found) {
        return {
          success: true,
          response: answers[i]
        };
      }
    }
  }

  // Default response if no match found
  return {
    success: true,
    response: "I'm an environmental assistant. Please ask me about climate change, forests, water conservation, or general environmental topics. I can provide information about causes, effects, and solutions to environmental issues."
  };
};


export const getChatResponse = async (message, language) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Get response based on the message
    const response = findBestResponse(message);
    
    return response;
  } catch (error) {
    console.error('Error getting chat response:', error);
    return {
      success: false,
      error: "I'm having trouble processing your request. Please try asking about environmental topics like climate change, forests, or water conservation."
    };
  }
}; 
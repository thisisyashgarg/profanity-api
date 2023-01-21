const userMessage: string = "m**c**d ";
const hindiCussWords: Array<string> = [
  "madarchod/mc",
  "gandu",
  "behen ke lode",
  "bhosdike",
  "chut",
];

export const openAIPrompt: string = `
These are the flag words in our api : ${hindiCussWords.join(", ")}.

Read the following messages and see if user is trying to use these words by changing the spelling a little bit or by using special characters or by using abbreviated forms. 
Answer : 
1) yes or no with a reason. 
2) mention how many cuss words have been used .

Messages : ${userMessage}
`;

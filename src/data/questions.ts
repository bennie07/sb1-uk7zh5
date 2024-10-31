export type Question = {
  scenario: string;
  prompt: string;
  options: Record<string, string>;
  correctAnswer: string;
  feedback: string;
};

export const questions: Question[] = [
  {
    scenario: "You're in a team meeting, and a colleague criticizes your recent project proposal.",
    prompt: "How do you respond?",
    options: {
      a: "Immediately defend your proposal and dismiss their criticism.",
      b: "Feel hurt and withdraw from the discussion.",
      c: "Listen carefully, ask for specific feedback, and consider if there's merit in their critique.",
      d: "Agree with everything they say to avoid conflict."
    },
    correctAnswer: "c",
    feedback: "Option c) shows self-awareness by demonstrating openness to feedback, emotional regulation, and a willingness to consider other perspectives – all key aspects of self-awareness in professional settings."
  },
  {
    scenario: "Your manager asks you to take on a new responsibility that you're not sure you can handle.",
    prompt: "What's your reaction?",
    options: {
      a: "Accept reluctantly, planning to figure it out as you go along.",
      b: "Reflect on your skills, discuss your concerns with your manager, and explore how you might develop the necessary capabilities.",
      c: "Confidently accept without hesitation, even if you're unsure.",
      d: "Decline immediately, citing your current workload."
    },
    correctAnswer: "b",
    feedback: "Option b) demonstrates self-awareness through honest self-assessment and proactive communication. It shows the ability to recognize both current limitations and growth potential while maintaining professional dialogue."
  },
  {
    scenario: "You notice that you often interrupt others during meetings.",
    prompt: "What do you do?",
    options: {
      a: "Stop speaking up in meetings altogether to avoid interrupting.",
      b: "Feel guilty but don't change your behavior.",
      c: "Continue as usual – it's just your enthusiastic personality.",
      d: "Acknowledge this habit, apologize when you catch yourself doing it, and actively work on listening more."
    },
    correctAnswer: "d",
    feedback: "Option d) shows self-awareness through recognition of personal behavioral patterns, taking responsibility for them, and actively working to improve."
  },
  {
    scenario: "A client seems dissatisfied with your service, but hasn't directly complained.",
    prompt: "How do you handle this?",
    options: {
      a: "Offer them a discount or freebie to smooth things over.",
      b: "Feel anxious about it but don't address it directly.",
      c: "Ignore it – if there's a real problem, they'll speak up.",
      d: "Reflect on recent interactions, proactively reach out to the client, and ask for honest feedback."
    },
    correctAnswer: "d",
    feedback: "Option d) reflects self-awareness through the ability to pick up on subtle cues, take initiative in addressing potential issues, and maintain open communication channels."
  },
  {
    scenario: "You realize you've made a mistake that affects your team's project.",
    prompt: "What's your next step?",
    options: {
      a: "Panic and consider asking a colleague to cover for you.",
      b: "Try to fix it quietly without telling anyone.",
      c: "Blame it on circumstances or other team members.",
      d: "Admit the mistake to your team, take responsibility, and work on finding a solution together."
    },
    correctAnswer: "d",
    feedback: "Option d) demonstrates self-awareness through accountability, transparency, and collaborative problem-solving."
  }
];
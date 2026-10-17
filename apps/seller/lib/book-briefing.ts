export type ChatMessage = {
    id: string
    role: "user" | "assistant"
    content: string
  }
  
  export const SUGGESTED_QUESTIONS = [
    "What is this book about?",
    "Who is it written for?",
    "What will I learn?",
    "Why is it worth the price?",
  ]
  
  // Dummy grounded responses keyed by product id + question — replace with a real
  // RAG call against the product's actual description/chapters once wired up.
  export function getBriefingAnswer(productAbout: string, question: string): string {
    // Placeholder: echoes the product's "about" copy, lightly reworded per question.
    // Swap for a real API call: POST /api/products/:id/ask { question }
    return productAbout
  }
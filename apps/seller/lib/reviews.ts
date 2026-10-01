export type Review = {
    id: string
    buyerName: string
    isAnonymous?: boolean
    rating: number // 1–5
    productTitle: string
    date: string
    title: string
    body: string
    visible: boolean
    reply?: string
  }
  
  export const REVIEWS: Review[] = [
    {
      id: "1",
      buyerName: "Anonymous Buyer",
      isAnonymous: true,
      rating: 2,
      productTitle: "The Bootstrap Playbook",
      date: "1 Sept 2026",
      title: "Not what I expected",
      body: "I thought this would cover more about fundraising and investor relations. It is mostly about bootstrapping without external funding, which is not what I was looking for.",
      visible: false,
    },
    {
      id: "2",
      buyerName: "Chioma Okafor",
      rating: 5,
      productTitle: "The Bootstrap Playbook",
      date: "1 Sept 2026",
      title: "Exactly what I needed to launch",
      body: "I had been stuck on pricing and distribution for months. This playbook gave me a clear framework and I made my first ₦150K within two weeks of applying the strategies. The AI chat feature is a bonus — it helped me pull relevant quotes for my pitch deck.",
      visible: true,
      reply: "Thank you, Chioma! So glad the framework clicked for you. Wishing you massive success with the launch.",
    },
    {
      id: "3",
      buyerName: "Amaka Eze",
      rating: 5,
      productTitle: "Engineering Your Career",
      date: "1 Sept 2026",
      title: "Landed a senior role after reading this",
      body: "The chapter on negotiating offers was worth 10x the price. I used the exact scripts and got a 40% bump from my initial offer. Cannot recommend this enough for mid-level engineers in Lagos.",
      visible: true,
      reply: "This made my day, Amaka! Congratulations on the new role — that negotiation result is incredible.",
    },
    {
      id: "4",
      buyerName: "Ngozi Ibrahim",
      rating: 4,
      productTitle: "Engineering Your Career",
      date: "1 Sept 2026",
      title: "Great for mid-level, less for juniors",
      body: "Really strong content for engineers with 3-7 years of experience. As a junior dev, some of the negotiation and leadership chapters felt premature, but I know I will come back to them in a year or two.",
      visible: true,
      reply: "Fair point, Ngozi! I am working on a companion guide specifically for early-career engineers. Stay tuned.",
    },
  ]
  
  export function getReviewStats(reviews: Review[]) {
    const total = reviews.length
    const avgRating = total === 0 ? 0 : reviews.reduce((sum, r) => sum + r.rating, 0) / total
    const visible = reviews.filter((r) => r.visible).length
    const awaitingReply = reviews.filter((r) => !r.reply).length
  
    return { avgRating, total, visible, awaitingReply }
  }
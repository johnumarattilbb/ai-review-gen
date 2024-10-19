import { notFound } from "next/navigation";
import { Product } from "./types";

export function getProduct(id: string) {
  const product = sampleProductsReviews[id] as Product;
  if (!product) {
    notFound();
  }
  return product;
}

export const sampleProductsReviews: Record<string, Product> = {
  mower: {
    name: "AI Reviews Generator",
    reviews: [
      {
        review:
          "The TriEye Tablet is beyond amazing! As soon as I placed it on my forehead, I could feel a new level of awareness. It feels like I have an internal guide providing me with clarity in decision-making. Absolutely life-changing.",
        authorName: "Nina W.",
        date: "2024-08-15",
        stars: 5,
      },
      {
        review:
          "I've been using the TriEye Tablet for a month now, and I can confidently say it’s given me a deeper sense of intuition. It's a unique product that actually works. My only complaint is that it takes some time to adjust to the third eye activation.",
        authorName: "Robert T.",
        date: "2024-07-28",
        stars: 4,
      },
      {
        review:
          "Interesting experience with the TriEye Tablet. It does open up a sense of inner wisdom, but I haven’t noticed drastic changes in day-to-day clarity. It seems to work better in meditative states. Still, it's a decent purchase for the curious.",
        authorName: "Mia K.",
        date: "2024-07-10",
        stars: 3,
      },
      {
        review:
          "I had high expectations for the TriEye Tablet, but it didn't deliver as much as I hoped. While the third eye sensation is real, the wisdom boost felt underwhelming. The setup instructions were clear, but the long-term effects haven't impressed me yet.",
        authorName: "Daniel S.",
        date: "2024-06-20",
        stars: 3,
      },
      {
        review:
          "The TriEye Tablet does what it says—opens a third eye and enhances perception. However, it takes time to fully activate and integrate with your senses. The concept is brilliant, but the execution could be refined for faster results.",
        authorName: "Sophia P.",
        date: "2024-07-05",
        stars: 3,
      },
      {
        review:
          "Not sure if I was ready for the TriEye Tablet experience. While it did provide a new sense of awareness, I struggled with the overwhelming insights it brought. This might work better for someone with more experience in mindfulness.",
        authorName: "Kyle L.",
        date: "2024-08-03",
        stars: 2,
      },
      {
        review:
          "The TriEye Tablet had limited effects for me. I followed the instructions, but the third eye activation was inconsistent. It also made me feel light-headed at times, so I decided to stop using it. Not the wisdom boost I was expecting.",
        authorName: "Elena J.",
        date: "2024-05-15",
        stars: 2,
      },
      {
        review:
          "I was really excited about the TriEye Tablet, but I’ve been disappointed. It didn't open the third eye as advertised, and customer support wasn't very helpful in troubleshooting. I wish I could say it worked better for me.",
        authorName: "Harold B.",
        date: "2024-07-22",
        stars: 1,
      },
      {
        review:
          "The TriEye Tablet is a fascinating product. It took a few uses to really feel the third eye opening, but once it did, I could sense subtle shifts in my perception and judgment. It's a great tool for those looking to explore deeper mental clarity.",
        authorName: "Zoe C.",
        date: "2024-08-05",
        stars: 4,
      },
      {
        review:
          "Overall, the TriEye Tablet is a good product. It helps improve focus and provides moments of profound insight. The forehead placement is a bit uncomfortable at first, but it’s worth it for the mental benefits. I just wish it came with a longer battery life.",
        authorName: "Samuel G.",
        date: "2024-06-19",
        stars: 4,
      },
    ],
  },
};


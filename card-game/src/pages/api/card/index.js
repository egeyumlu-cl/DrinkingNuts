import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const { method, body } = req;
  
  switch (method) {
    case "POST":
        try {
            const deck = await prisma.card.create({
                data: {
                    title : body.title,
                }
            })

            res.status(200).json(deck);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
        
        

    case "GET":
        try {
            const deck = await prisma.deck.findUnique({
                where: {
                  title: body.title,
                },
                include: {
                    cards: true,
                }
            });

            res.status(200).json(deck);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    
  }
}

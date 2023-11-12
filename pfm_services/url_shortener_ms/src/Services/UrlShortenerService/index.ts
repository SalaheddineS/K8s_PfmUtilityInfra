import { Request, Response } from "express";
import prisma from "../../Database/PrismaClient";



/*const redirectLinks = (req:Request,res:Response) => {
  const { incrementableId } = req.params;
  if (Urls.hasOwnProperty(incrementableId)) {
    const originalUrl = Urls[incrementableId];
    if (!originalUrl.startsWith("https://") || !originalUrl.startsWith("http://")){
    res.redirect('http://'+originalUrl);}
    else if(originalUrl.startsWith("https://")) res.redirect(originalUrl)
    else if(originalUrl.startsWith("http://")) res.redirect(originalUrl)
  
  } else {
    res.status(404).json({ message: "Shortened URL not found" });
  }
}
*/
const getLinks = async (req: Request, res: Response) => {
  const everything = await prisma.shortenedUrl.findMany();
  res.status(201).json({ message: "Here's the list of the URLs:", data: everything });
}


const addLink = async (req:Request,res:Response) => {
  const url = req.body.url
  const shortenedUrl = await prisma.shortenedUrl.create({
    data: {
      originalUrl:url,
    },
  });
  res.status(201).json({'url': process.env.PROTOCOL + "://" + process.env.DOMAIN + "/api/" + shortenedUrl.shortenedUrlId });
}

const redirectLinks = async (req:Request, res:Response) => {
  const { incrementableId } = req.params;

  const link = await prisma.shortenedUrl.findUnique({
    where: {
      shortenedUrlId: parseInt(incrementableId),
    },
  });

  if (link?.originalUrl !== undefined) {
    const originalUrl = link.originalUrl;

    // Check if the URL starts with "http://" or "https://"
    if (!originalUrl.startsWith("http://") && !originalUrl.startsWith("https://")) {
      res.redirect("http://" + originalUrl);
    } else {
      res.redirect(originalUrl);
    }
  } else {
    res.status(404).json({ message: "Shortened URL not found" });
  }
};



export default {
    addLink,
    redirectLinks,
    getLinks
}
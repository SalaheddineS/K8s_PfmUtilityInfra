import UrlShortenerService from "../../Services/UrlShortenerService";
import { Router } from "express";

const router = Router();
router.post('/addUrl',UrlShortenerService.addLink)
router.get('/getLinks',UrlShortenerService.getLinks);
router.get('/getAllUrls',UrlShortenerService.getLinks);
router.get('/:incrementableId',UrlShortenerService.redirectLinks)



export default router
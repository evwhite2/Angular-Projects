import {MockWatchList} from './MockData';
import Boom from '@hapi/boom';

export const getMediaItemRoute = {
    method: 'GET', 
    path: '/api/watchlist/{id}',
    handler: (req, res)=>{
        const id = parseInt(req.params.id);
        const mediaItem =  MockWatchList.find(item => item.id === id);
        if(!mediaItem) throw Boom.notFound(`Media item is not found for ID: ${id}`);
        return mediaItem;
    }
}
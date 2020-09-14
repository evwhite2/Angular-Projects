import {MockWatchList} from './MockData';

export const getWatchListRoute = {
    method: 'GET',
    path: '/api/watchlist',
    handler: (req, res)=>{
        return MockWatchList;
    }
}
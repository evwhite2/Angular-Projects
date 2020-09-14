import Hapi from '@hapi/hapi';
import routes from './routes';

const start = async()=>{
    const server = Hapi.Server({
        port: 5200,
        host: 'localhost'
    });
    routes.forEach(route=>{
        server.route(route);
    })
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);

    process.on('unhandledRejection', err=>{
        console.log("ERROR", err);
        process.exit(1);
    })

}

start();
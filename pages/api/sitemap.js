import { connectToDatabase } from '../../util/mongodb'
 
import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
            cacheTime: 600000,
        });

        smStream.write( {url: `/servicos`, changefreq: 'daily', priority: 0.9} );
        smStream.write( {url: `/posts`, changefreq: 'daily', priority: 0.9} );
        smStream.write( {url: `/produtos`, changefreq: 'daily', priority: 0.9} );
        smStream.write( {url: `/contato`, changefreq: 'daily', priority: 0.9} );

        const { db } = await connectToDatabase()

        const posts = await db.collection('posts').aggregate({$project: { _id:0, url: 1 }}).toArray();

        posts.forEach(post => {
            smStream.write({
                url: `/post/${post.url}`,
                changefreq: 'daily',
                priority: 0.8
            });
        });

        smStream.end();

        const sitemapOutput = (await streamToPromise(smStream)).toString();

        res.writeHead(200, {
            'Content-Type': 'application/xml'
        });

        res.end(sitemapOutput);
    } catch(e) {
        console.log(e)
        res.send(JSON.stringify(e))
    }
}
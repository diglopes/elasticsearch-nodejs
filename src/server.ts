import express from 'express';
import { ElasticsearchService } from './services/elasticssearch';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const elasticsearchService = new ElasticsearchService();
    const indexName = 'test_index';
    const body = {
        user: 'kimchy',
        password: 'the_only_password',
        email: 'kimchy@email.com'
    }
    const result = await elasticsearchService.createIndex(indexName, body);
    return res.json(result);
})

app.listen(port, () => {
    console.log('Server started on port ' + port);
})
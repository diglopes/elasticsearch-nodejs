import elasticsearch from 'elasticsearch';

export class ElasticsearchService {
    private client: elasticsearch.Client;

    constructor() {
        this.client = new elasticsearch.Client({
            host: 'localhost:9200',
        });
    }

    createIndex(indexName: string, body: any) {
        return this.client.index({
            index: indexName,
            type: 'type_elastic_test',
            body
        })
    }
}
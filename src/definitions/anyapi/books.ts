class HttpResponse {
    public copyright: string;
    public num_results: number;
    public status: string;
}

class BookListItem {
    public display_name: string;
    public list_name: string;
    public list_name_encoded: string;
    public newest_published_date: string;
    public oldest_published_date: string;
    public updated: string;
}

export class BookListResult extends HttpResponse {
    public results: BookListItem[];
}

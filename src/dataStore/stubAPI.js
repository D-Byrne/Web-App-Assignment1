import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
        {
            id: 1,
            title: "Gotta Get Theroux This",
            year: 2019,
            link: "https://www.easons.com/gotta-get-theroux-this-louis-theroux-9781509880386",
            author: "Louis Theroux",
            comments: [],
            upvotes: 10
        },
        {
            id: 2,
            title: "Blue Moon",
            year: 1990,
            link: "https://www.easons.com/5637150827/all/books/fiction/crime-fiction/blue-moon-tpb/",
            author: "Lee Child",
            comments: [],
            upvotes: 14
        },
        {
            id: 3,
            title:
            "A Game of Thrones",
            year: 1996,
            link: "https://www.easons.com/a-game-of-thrones-george-r-r-martin-9780007448036",
            author: "George R. R Martin ",
            comments: [],
            upvotes: 12
        },
        {
            id: 4,
            title:
            "War And Peace",
            year: 1869,
            link: "https://www.easons.com/war-and-peace-leo-tolstoy-9780099512240",
            author: "Leo Tolstoy",
            comments: [],
            upvotes: 2
        },
        {
            id: 5,
            title: "The Count of Monte Cristo",
            year: 1844,
            link:
            "https://www.easons.com/the-count-of-monte-cristo-alexandre-dumas-9781841593203",
            author: "Alexandre Dumas",
            comments: [],
            upvotes: 8
        },
        {
            id: 6,
            title: "Ulysses",
            year: 1922,
            link: "https://www.easons.com/ulysses-james-joyce-9781847175908",
            author: "James Joyce",
            comments: [],
            upvotes: 10
        },
        {
            id: 7,
            title: "Moby-Dick",
            year: 1851,
            link: "https://www.easons.com/moby-dick-herman-melville-9780143124672",
            author: "Herman Melville",
            comments: [],
            upvotes: 20
        }
        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, year, author, link) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
        id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
        id,
        title,
        year,
        author,
        link,
        comments: [],
        upvotes: 0
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
        this.posts[index].upvotes += 1;
        return true;
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
        id = last.id + 1;
        }
        post.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
        post.comments[index].upvotes += 1;
        }
    }

    removePost(id){
        let elements = _.remove(this.posts, post => post.id === id);
        return elements;
    }
}

export default new StubAPI();
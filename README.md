# makefetchhappen

[Make Fetch Happen](makefetchhappen.herokuapp.com) is a Mean Girls quote API which provides iconic quotes from the movie [Mean Girls](https://en.wikipedia.org/wiki/Mean_Girls).

Written in node.js.

## API Endpoints

### GET /quotes

Returns an array of all the quotes.

### GET /quotes/random

Returns a single quote.


```
{
    "quote": "How many of you have ever felt personally victimised by Regina George?"
}

```

### GET /quotes/{count}

Returns an array containing {count} quotes. e.g. /quotes/2 returns 2 quotes.

```
[
    {
          "quote": "Four for you, Glenn Coco! You go, Glenn Coco!"
    },
    {
          "quote": "I’m sorry I called you a gap-toothed bitch. It’s not your fault you’re so gap-toothed."
    }
]
```

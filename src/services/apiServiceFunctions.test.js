import { getAuthedRequest, formatApiData } from './apiServiceFunctions';

/**
 * Test getAuthedRequest()
 */
test('getAuthedRequest returns a request object with API key and params', () => {
  const path = 'example.com',
    params = { test: 'test' },
    apiKey = '11112222';

  const authedRequest = getAuthedRequest({
    path: path,
    params: params,
    apiKey: apiKey
  });

  expect(authedRequest).toEqual(
    new Request('example.com?api_key=11112222&test=test')
  );
});

/**
 * Test formatApiData(data, "CONFIGURATION")
 */
test('formatApiData(data, "CONFIGURATION") returns formatted data', () => {
  const _dataBeforeFormat_ = {
    images: {},
    change_keys: []
  };

  const _dataAfterFormat_ = {
    images: {},
    change_keys: []
  };

  const formattedData = formatApiData(_dataBeforeFormat_, 'CONFIGURATION');

  expect(formattedData).toEqual(_dataAfterFormat_);
});

/**
 * Test formatApiData(data, "MOVIE_GENRES")
 */
test('formatApiData(data, "MOVIE_GENRES") returns formatted data', () => {
  const _dataBeforeFormat_ = {
    genres: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 16,
        name: "Animation"
      }
    ]
  };

  const _dataAfterFormat_ = {
    28: "Action",
    12: "Adventure",
    16: "Animation"
  };

  const formattedData = formatApiData(_dataBeforeFormat_, 'MOVIE_GENRES');

  expect(formattedData).toEqual(_dataAfterFormat_);
});

/**
 * Test formatApiData(data, "TV_GENRES")
 */
test('formatApiData(data, "TV_GENRES") returns formatted data', () => {
  const _dataBeforeFormat_ = {
    genres: [
      {
        id: 10759,
        name: "Action & Adventure"
      },
      {
        id: 16,
        name: "Animation"
      },
      {
        id: 35,
        name: "Comedy"
      },
    ]
  };

  const _dataAfterFormat_ = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy"
  };

  const formattedData = formatApiData(_dataBeforeFormat_, 'TV_GENRES');

  expect(formattedData).toEqual(_dataAfterFormat_);
});

/**
 * Test formatApiData(data, "SEARCH_MOVIE_RESULTS")
 */
test('formatApiData(data, "SEARCH_MOVIE_RESULTS") returns formatted data', () => {
  const _dataBeforeFormat_ = {
    "page": 1,
    "results": [
      {
        "poster_path": "/u6T9FtniX8vIvrtOuTh2gdZvwfV.jpg",
        "adult": false,
        "overview": "The director Zoran Tadic collects the work of an elderly woman in a country house, with his only companion, a goat.",
        "release_date": "1972-12-14",
        "genre_ids": [
          99
        ],
        "id": 345036,
        "original_title": "Druge",
        "original_language": "sh",
        "title": "Friends",
        "backdrop_path": null,
        "popularity": 1.0045,
        "vote_count": 2,
        "video": false,
        "vote_average": 5.5
      },
      {
        "poster_path": "/y95Bz9iRLE8l3zwxXrzzYaotsdW.jpg",
        "adult": false,
        "overview": "The Soviet classic based on the biography of one of the main October Revolution leaders - Sergey Kirov.",
        "release_date": "1939-01-01",
        "genre_ids": [
          36,
          18,
          10752
        ],
        "id": 328381,
        "original_title": "Друзья",
        "original_language": "ru",
        "title": "Friends",
        "backdrop_path": "/yRpijYA3Ur4nom4T79gK7ME15og.jpg",
        "popularity": 1.001138,
        "vote_count": 1,
        "video": false,
        "vote_average": 0
      }
    ],
    "total_results": 667,
    "total_pages": 34
  };

  const _dataAfterFormat_ = {
    page: 1,
    totalPages: 34,
    totalResults: 667,
    moviesById: {
      345036: {
        "poster_path": "/u6T9FtniX8vIvrtOuTh2gdZvwfV.jpg",
        "adult": false,
        "overview": "The director Zoran Tadic collects the work of an elderly woman in a country house, with his only companion, a goat.",
        "release_date": "1972-12-14",
        "genre_ids": [
          99
        ],
        "id": 345036,
        "original_title": "Druge",
        "original_language": "sh",
        "title": "Friends",
        "backdrop_path": null,
        "popularity": 1.0045,
        "vote_count": 2,
        "video": false,
        "vote_average": 5.5
      },
      328381: {
        "poster_path": "/y95Bz9iRLE8l3zwxXrzzYaotsdW.jpg",
        "adult": false,
        "overview": "The Soviet classic based on the biography of one of the main October Revolution leaders - Sergey Kirov.",
        "release_date": "1939-01-01",
        "genre_ids": [
          36,
          18,
          10752
        ],
        "id": 328381,
        "original_title": "Друзья",
        "original_language": "ru",
        "title": "Friends",
        "backdrop_path": "/yRpijYA3Ur4nom4T79gK7ME15og.jpg",
        "popularity": 1.001138,
        "vote_count": 1,
        "video": false,
        "vote_average": 0
      }
    }
  };

  const formattedData = formatApiData(_dataBeforeFormat_, 'SEARCH_MOVIE_RESULTS');

  expect(formattedData).toEqual(_dataAfterFormat_);
});

/**
 * Test formatApiData(data, "SEARCH_TVSHOW_RESULTS")
 */
test('formatApiData(data, "SEARCH_TVSHOW_RESULTS") returns formatted data', () => {
  const _dataBeforeFormat_ = {
    "page": 1,
    "results": [
      {
        "poster_path": "/4wgiRF7KwCkADnNaAOQV4RldrhR.jpg",
        "popularity": 3.12956,
        "id": 2710,
        "backdrop_path": "/pU4L7l5CfAnOucNusNPMKFrvQVV.jpg",
        "vote_average": 6.97,
        "overview": "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
        "first_air_date": "2005-08-04",
        "origin_country": [
          "US"
        ],
        "genre_ids": [
          35
        ],
        "original_language": "en",
        "vote_count": 52,
        "name": "It's Always Sunny in Philadelphia",
        "original_name": "It's Always Sunny in Philadelphia"
      },
      {
        "poster_path": "/9QfcfeQoCDf9egiCk5ct2ZwSJSz.jpg",
        "popularity": 1.00995,
        "id": 34812,
        "backdrop_path": "/a4ztXkU8PnWiKzKJAtIlzd9yk1H.jpg",
        "vote_average": 0,
        "overview": "Haré+Guu is a Japanese anime, based on an original manga which ran in Monthly Shōnen Gangan. Twenty-six TV episodes were made, followed by two OVA sequels: Haré+Guu DELUXE and Haré+Guu FINAL.\n\nThe surreal, comical, and occasionally serious series focuses on the story of a 10-year-old jungle boy named Haré and his misadventures with Guu, a liminal being who usually presents herself as a young girl.",
        "first_air_date": "2001-04-03",
        "origin_country": [
          "JP"
        ],
        "genre_ids": [
          16,
          35,
          10759
        ],
        "original_language": "ja",
        "vote_count": 0,
        "name": "Hare+Guu",
        "original_name": "ジャングルはいつもハレのちグゥ"
      }
    ],
    "total_results": 2,
    "total_pages": 1
  };

  const _dataAfterFormat_ = {
    page: 1,
    totalPages: 1,
    totalResults: 2,
    tvById: {
      2710: {
        "poster_path": "/4wgiRF7KwCkADnNaAOQV4RldrhR.jpg",
        "popularity": 3.12956,
        "id": 2710,
        "backdrop_path": "/pU4L7l5CfAnOucNusNPMKFrvQVV.jpg",
        "vote_average": 6.97,
        "overview": "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
        "first_air_date": "2005-08-04",
        "origin_country": [
          "US"
        ],
        "genre_ids": [
          35
        ],
        "original_language": "en",
        "vote_count": 52,
        "name": "It's Always Sunny in Philadelphia",
        "original_name": "It's Always Sunny in Philadelphia"
      },
      34812: {
        "poster_path": "/9QfcfeQoCDf9egiCk5ct2ZwSJSz.jpg",
        "popularity": 1.00995,
        "id": 34812,
        "backdrop_path": "/a4ztXkU8PnWiKzKJAtIlzd9yk1H.jpg",
        "vote_average": 0,
        "overview": "Haré+Guu is a Japanese anime, based on an original manga which ran in Monthly Shōnen Gangan. Twenty-six TV episodes were made, followed by two OVA sequels: Haré+Guu DELUXE and Haré+Guu FINAL.\n\nThe surreal, comical, and occasionally serious series focuses on the story of a 10-year-old jungle boy named Haré and his misadventures with Guu, a liminal being who usually presents herself as a young girl.",
        "first_air_date": "2001-04-03",
        "origin_country": [
          "JP"
        ],
        "genre_ids": [
          16,
          35,
          10759
        ],
        "original_language": "ja",
        "vote_count": 0,
        "name": "Hare+Guu",
        "original_name": "ジャングルはいつもハレのちグゥ"
      }
    }
  };

  const formattedData = formatApiData(_dataBeforeFormat_, 'SEARCH_TVSHOW_RESULTS');

  expect(formattedData).toEqual(_dataAfterFormat_);
});

/**
 * Test formatApiData(data, "SEARCH_ACTOR_RESULTS")
 */
test('formatApiData(data, "SEARCH_ACTOR_RESULTS") returns formatted data', () => {
  const _dataBeforeFormat_ = {
    "page": 1,
    "results": [
      {
        "profile_path": "/7wbHIn7GziFlJLPl8Zu1XVl24EG.jpg",
        "adult": false,
        "id": 1892,
        "known_for": [
          {
            "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            "adult": false,
            "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "release_date": "2014-11-05",
            "original_title": "Interstellar",
            "genre_ids": [
              12,
              18,
              878
            ],
            "id": 157336,
            "media_type": "movie",
            "original_language": "en",
            "title": "Interstellar",
            "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            "popularity": 14.345901,
            "vote_count": 5850,
            "video": false,
            "vote_average": 8.1
          },
          {
            "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
            "adult": false,
            "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
            "release_date": "2015-09-30",
            "original_title": "The Martian",
            "genre_ids": [
              18,
              12,
              878
            ],
            "id": 286217,
            "media_type": "movie",
            "original_language": "en",
            "title": "The Martian",
            "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
            "popularity": 10.235214,
            "vote_count": 4122,
            "video": false,
            "vote_average": 7.6
          },
          {
            "poster_path": "/gc7IN6bWNaWXv4vI6cxSmeB7PeO.jpg",
            "adult": false,
            "overview": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
            "release_date": "1998-07-24",
            "original_title": "Saving Private Ryan",
            "genre_ids": [
              18,
              36,
              10752
            ],
            "id": 857,
            "media_type": "movie",
            "original_language": "en",
            "title": "Saving Private Ryan",
            "backdrop_path": "/gRtLcCQOpYUI9ThdVzi4VUP8QO3.jpg",
            "popularity": 3.638191,
            "vote_count": 3144,
            "video": false,
            "vote_average": 7.65
          }
        ],
        "name": "Matt Damon",
        "popularity": 14.627847
      }
    ],
    "total_results": 1,
    "total_pages": 1
  };

  const _dataAfterFormat_ = {
    page: 1,
    totalPages: 1,
    totalResults: 1,
    peopleById: {
      1892: {
        "profile_path": "/7wbHIn7GziFlJLPl8Zu1XVl24EG.jpg",
        "adult": false,
        "id": 1892,
        "known_for": [
          {
            "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            "adult": false,
            "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "release_date": "2014-11-05",
            "original_title": "Interstellar",
            "genre_ids": [
              12,
              18,
              878
            ],
            "id": 157336,
            "media_type": "movie",
            "original_language": "en",
            "title": "Interstellar",
            "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            "popularity": 14.345901,
            "vote_count": 5850,
            "video": false,
            "vote_average": 8.1
          },
          {
            "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
            "adult": false,
            "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
            "release_date": "2015-09-30",
            "original_title": "The Martian",
            "genre_ids": [
              18,
              12,
              878
            ],
            "id": 286217,
            "media_type": "movie",
            "original_language": "en",
            "title": "The Martian",
            "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
            "popularity": 10.235214,
            "vote_count": 4122,
            "video": false,
            "vote_average": 7.6
          },
          {
            "poster_path": "/gc7IN6bWNaWXv4vI6cxSmeB7PeO.jpg",
            "adult": false,
            "overview": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
            "release_date": "1998-07-24",
            "original_title": "Saving Private Ryan",
            "genre_ids": [
              18,
              36,
              10752
            ],
            "id": 857,
            "media_type": "movie",
            "original_language": "en",
            "title": "Saving Private Ryan",
            "backdrop_path": "/gRtLcCQOpYUI9ThdVzi4VUP8QO3.jpg",
            "popularity": 3.638191,
            "vote_count": 3144,
            "video": false,
            "vote_average": 7.65
          }
        ],
        "name": "Matt Damon",
        "popularity": 14.627847
      }
    }
  };

  const formattedData = formatApiData(_dataBeforeFormat_, 'SEARCH_PEOPLE_RESULTS');

  expect(formattedData).toEqual(_dataAfterFormat_);
});
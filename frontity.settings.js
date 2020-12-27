const settings = {
  "name": "puzzleblog",
  "state": {
    "frontity": {
      "url": "server543046.nazwa.pl/wordpress/wpn_bluepuzzleblog/",
      "title": "Blue Puzzle Blog",
      "description": "Blog dla fanów puzzli"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/about/"
            ],
            [
              "Contact",
              "/contact/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://puzzleblog.local/",
          "params": {
            "per_page": 5
          },
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

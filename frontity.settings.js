const settings = {
  "name": "puzzleblog",
  "state": {
    "frontity": {
      "url": "http://puzzleblog.local/",
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
              "O mnie",
              "/o-mnie/"
            ],
            [
              "Kontakt",
              "/kontakt/"
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

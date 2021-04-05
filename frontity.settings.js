const settings = {
  "name": "puzzleblog",
  "state": {
    "frontity": {
      "url": "https://puzzletywnie.pl",
      "title": "Puzzletywnie",
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
              "Start",
              "/"
            ],
            [
              "O mnie",
              "/omnie/"
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
          "url": "https://ssl-puzzletywnie.ovh/",
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

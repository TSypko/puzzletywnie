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
            "per_page": 3
          },
        }
      }
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-PT3PVDQ",
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-193822795-1",
        },
        analytics: {
          pageviews: { googleAnalytics: true },
          events: { googleAnalytics: true }
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
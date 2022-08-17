const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://www.ljy2345.com",
      title: "LJY IT BLOG",
      description: "Another amazing WordPress site"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["日志", "/category/the-log/"],
            ["Wordpress", "/category/wordpress/"],
            ["Code", "/category/the-log/programming-code"],
            ["About Us", "/about/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          },
          autoPrefetch: "hover"
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://www.ljy2345.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

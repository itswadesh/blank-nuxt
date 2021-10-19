export const menu = [
  {
    title: 'Store management',
    items: [
      { name: 'Dashboard', link: '/' },
      {
        name: 'My Sales',
        link: 'my-sales',
        items: [
          // { name: 'Onboard', link: '/onboard' },
          { name: 'Orders', link: '/orders' },
          { name: 'Abandoned Carts', link: '/carts' },
          { name: 'Customers', link: '/customers' },
          { name: 'Order Editors', link: '/order-editors' },
          { name: 'Payments', link: '/payments' },
          { name: 'Wishlists', link: '/wishlists' },
        ],
      },
      {
        name: 'Catalog',
        link: 'catalog',
        items: [
          // { name: 'EMP LIST', link: '/emp/employees' },
          // { name: 'PAYSLIP', link: '/pratap/' },
          { name: 'Products', link: '/products' },
          { name: 'Categories', link: '/categories' },
          { name: 'Gift Cards', link: '/gift-cards' },
          { name: 'Reviews', link: '/reviews' },
          { name: 'Product Types', link: '/product-types' },
          { name: 'Global Options', link: '/globalOptions' },
          { name: 'Popular Searches', link: '/popular-searches' },
          { name: 'Brands', link: '/brands' },
          { name: 'Sizes', link: '/sizes' },
          { name: 'Colors', link: '/colors' },
          { name: 'Units', link: '/units' },
        ],
      },

      // { name: 'My Sales', link: '/sales' },
      // { name: 'Catalog', link: '/catalog' },
      {
        name: 'Monitoring',
        link: 'monitoring',
        items: [
          {
            name: 'No Stock',
            link: '/monitoring/no-stock',
            icon: 'burst_mode',
            authenticate: 'vendor',
            color: 'yellow',
            dashboard: true,
          },
          {
            name: 'No Image',
            link: '/monitoring/no-image',
            icon: 'burst_mode',
            authenticate: 'vendor',
            color: 'yellow',
            dashboard: true,
          },
          {
            name: 'No Price',
            link: '/monitoring/no-price',
            icon: 'burst_mode',
            authenticate: 'vendor',
            color: 'yellow',
            dashboard: true,
          },
          {
            name: 'Invalid Price',
            link: '/monitoring/invalid-price',
            icon: 'burst_mode',
            authenticate: 'vendor',
            color: 'yellow',
            dashboard: true,
          },
          {
            name: 'No Description',
            link: '/monitoring/no-description',
            icon: 'burst_mode',
            authenticate: 'vendor',
            color: 'yellow',
            dashboard: true,
          },
        ],
      },
      // { name: 'My Sales', link: '/sales' },
      // { name: 'Catalog', link: '/catalog' },
      {
        name: 'Marketing',
        link: 'marketing',
        items: [
          { name: 'Overview', link: '/overview' },
          { name: 'Google Ads', link: '/google-ads' },
          { name: 'Facebook Ads', link: '/facebook-ads' },
          { name: 'Discount Coupons', link: '/gift-cards' },
          { name: 'Automatic Discounts', link: '/automatic-discounts' },
          { name: 'Newsletters', link: '/news-letters' },
          { name: 'Automated Emails', link: '/automated-emails' },
        ],
      },
      {
        name: 'Reports',
        link: '/reports',
      },
      // { name: 'Billing', link: '/billing' },
      // { name: 'Products', link: '/catalog-options' },
      // { name: 'Cart', link: '/cart' },
      // { name: 'Category', link: '/category' },
      // { name: 'Customers', link: '/customers' },
      // { name: 'Marketing', link: '/marketing' },
      // // { name: 'Reports', link: '/reports' },
      // { name: 'Order Editor', link: '/order-editor' },
      // { name: 'Orders', link: '/orders' },
    ],
  },
  {
    title: 'Sales Channels',
    items: [
      { name: 'Overview', link: '/overview' },

      {
        name: 'Website',
        link: 'website',
        items: [
          { name: 'Overview', link: '/website' },
          { name: 'Design', link: '/website#design' },
          { name: 'Domain', link: '/website#domain' },
          { name: 'SEO', link: '/website#seo' },
        ],
      },

      { name: 'Facebook', link: '/facebook' },

      { name: 'Mobile', link: '/mobile' },

      {
        name: 'Other Channels',
        link: 'sell-on-instagram',
        items: [
          { name: 'Sell on Instagram', link: '/sell-on-instagram' },
          { name: 'Facebook Messenger', link: '/facebook-messenger' },
          { name: 'Google Shopping', link: '/google-shopping' },
          { name: 'eBay', link: '/ebay' },
          { name: 'Amazon', link: '/amazon' },
        ],
      },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { name: 'Design', link: '/design' },
      { name: 'Payment', link: '/payment' },
      { name: 'Shipping & Pickup', link: '/shipping-and-pickup' },
      {
        name: 'Utilities',
        icon: 'settings',
        authenticate: 'admin',
        items: [
          {
            name: 'Pages',
            link: '/pages',
            icon: 'pages',
            authenticate: 'admin',
            color: 'pink',
            dashboard: true,
          },
          {
            name: 'Blogs',
            link: '/blog',
            icon: 'book',
            authenticate: 'admin',
            color: 'yellow',
            dashboard: true,
          },
          {
            name: 'FAQ',
            link: '/faq',
            icon: 'help',
            authenticate: 'admin',
            color: 'yellow',
            dashboard: true,
          },
        ],
      },
      {
        name: 'Settings',
        link: 'settings',
        items: [
          { name: 'General', link: '/general' },
          { name: 'Banners', link: '/banners' },
          { name: 'Images', link: '/images' },
          { name: 'Deals', link: '/deals' },
          { name: 'Taxes', link: '/taxes' },
          { name: 'Legal', link: '/legal' },
          { name: 'mail', link: '/mail' },
          { name: 'Invoice', link: '/invoice' },
          { name: 'Customer Groups', link: '/customer-groups' },
          { name: 'Product Types', link: '/product-types' },
          { name: 'Product Filters', link: '/product-filters' },
          { name: 'Edit Store Lebels', link: '/edit-store-lebels' },
        ],
      },
      {
        name: 'App',
        link: '/app',
        items: [
          { name: 'App Market', link: '/app' },
          { name: 'my Apps', link: '/myapps' },
        ],
      },
      {
        name: 'My Profile',
        link: 'billing-and-plans',
        items: [
          { name: 'Billing and plans', link: '/billing-and-plans' },
          { name: 'Staff Accounts', link: '/staff-accounts' },
          { name: 'Profile', link: '/profile' },
        ],
      },
    ],
  },
]
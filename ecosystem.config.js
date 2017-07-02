module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'start',
      script    : 'start.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // // Second application
    // {
    //   name      : 'WEB',
    //   script    : 'web.js'
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '67.205.131.201',
      ref  : 'origin/master',
      repo : 'git@github.com:liulinforwork/nodeJs.git',
      path : '/var/www/production',
      'post-deploy': "npm install && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};


/** @returns {import('astro').AstroIntegration} */
export default function() {
    return {
      name: 'myadapter',
      hooks: {
        'astro:config:done': ({ setAdapter }) => {
          setAdapter({
            name: 'myadapter',
            serverEntrypoint: new URL('./server-entrypoint.mjs', import.meta.url).pathname,
            supportedAstroFeatures: {
              serverOutput: 'stable'
            },
            exports: ['manifest']
          });
        },
        'astro:build:setup': ({ vite, target }) => {
          if(target === 'server') {
            vite.build.rollupOptions.input.push('src/all.js');
          }
        }
      }
    }
  }
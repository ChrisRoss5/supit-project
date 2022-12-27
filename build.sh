# !/bin/bash
# https://developers.cloudflare.com/pages/how-to/build-commands-branches/

if [ "$CF_PAGES_BRANCH" == "vue" ]; then

  npm run build
fi
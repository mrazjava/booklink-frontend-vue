#!/bin/sh

# Replace FE_DEPLOY_ vars in JavaScript files. These should be kept to
# minimum.
#
# Adding new vars requires updates in few different places:
#  /entrypoint.sh (this file)
#  /src/deployment.js
#  /.env
#  /.aws/pre-release.json
#  [booklink sandbox project] docker-compose/*.yml
# For usage example of deploy var, see /components/MainFooter.vue

echo "Replacing env vars in JS"
for file in /usr/share/nginx/html/js/app.*.js;
do
  echo "Processing $file ...";

  # Use the existing JS file as template
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi

  envsubst '$FE_DEPLOY_ENV,$FE_DEPLOY_BE_HOST,$FE_FB_APPID,$FE_SANDBOX' < $file.tmpl.js > $file
done

echo "Starting Nginx"
nginx -g 'daemon off;'

#!/bin/sh

# Replace env vars in JavaScript files
echo "Replacing env vars in JS"
for file in /usr/share/nginx/html/js/app.*.js;
do
  echo "Processing $file ...";

  # Use the existing JS file as template
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi

  envsubst '$FE_DEPLOY_ENV,$FE_DEPLOY_BE_HOST' < $file.tmpl.js > $file
done

echo "Starting Nginx"
nginx -g 'daemon off;'

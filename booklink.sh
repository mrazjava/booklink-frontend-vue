#!/bin/bash

if [ $# -eq 0 ]
then
 SOURCE='master' 
else
 if [ $1 == 'help' ]
 then
  echo "pass only 1 argument"
  echo "  master   : pulls master branch image (from dockerhub) and runs it"
  echo "  develop  : pulls develop branch image (from dockerhub) and runs it"
  echo "  build    : builds sources, builds [local/booklink-backend], [local/booklink-web] docker images and runs them"
  echo " -build    : builds [local/booklink-backend], [local/booklink-web] docker images and runs them"
  echo "--build    : assumes [local/booklink-backend] and [local/booklink-web] images exist, runs them"
  exit
 fi

 if [ $1 == 'master' ] || [ $1 == 'develop' ] || [ $1 == 'build' ] || [ $1 == '-build' ] || [ $1 == '--build' ]
 then
  SOURCE=$1
 else
  echo "INVALID PARAMETER. Pass 1 arg only (or none). Allowed values are [master|develop|build|-build|--build|help]. DEFAULT: master"
  exit
 fi
fi

if [ $SOURCE == 'master' ]
then
 echo "--------------------------------------------------"
 echo "+ pulling latest *master* docker images"
 echo "--------------------------------------------------"
 docker-compose pull
 echo "--------------------------------------------------"
 echo "+ firing up docker images"
 echo "--------------------------------------------------"
 docker-compose up
fi

if [ $SOURCE == 'develop' ]
then
 echo "--------------------------------------------------"
 echo "+ pulling latest *develop* docker images"
 echo "--------------------------------------------------"
 echo "NOT IMPLEMENTED YET"
# docker-compose -f docker-compose-develop.yml pull
 echo "--------------------------------------------------"
 echo "+ firing up docker images"
 echo "--------------------------------------------------"
 echo "NOT IMPLEMENTED YET"
# docker-compose -f docker-compose-develop.yml up
fi

if [ $SOURCE == 'build' ]
then
 echo "--------------------------------------------------"
 echo "+ compiling booklink-backend"
 echo "--------------------------------------------------"
 mvn -f booklink-backend/pom.xml -Dmaven.test.skip=true clean package
 echo "--------------------------------------------------"
 echo "+ compiling booklink-web"
 echo "--------------------------------------------------"
 yarn --cwd booklink-web build
fi

if [ $SOURCE == 'build' ] || [ $SOURCE == '-build' ]
then
 BACKEND_LOCAL_IMAGE="local/booklink-backend:latest"
 WEB_LOCAL_IMAGE="local/booklink-web:latest"
 echo "--------------------------------------------------"
 echo "+ builidng $BACKEND_LOCAL_IMAGE docker image"
 echo "--------------------------------------------------"
 docker build booklink-backend/ -t local/booklink-backend:latest 
 echo "--------------------------------------------------"
 echo "+ building $WEB_LOCAL_IMAGE docker image"
 echo "--------------------------------------------------"
 docker build booklink-web/ -t local/booklink-web:latest
 echo "--------------------------------------------------"
 echo "+ prunning dangling images"
 echo "--------------------------------------------------"
 docker image prune -f
fi

if [ $SOURCE == 'build' ] || [ $SOURCE == '-build' ] || [ $SOURCE == '--build' ]
then
 echo "--------------------------------------------------"
 echo "+ firing up docker images"
 echo "--------------------------------------------------"
# docker-compose -f docker-compose-build.yml up
fi

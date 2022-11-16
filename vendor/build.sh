#!/bin/sh

BUILD_DIR="$(pwd)"
source ./vendor/install_openssl.sh 1.1.1b
sudo updatedb
sudo updatedb
sudo ldconfig
cd $BUILD_DIR
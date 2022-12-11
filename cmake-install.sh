#!/bin/bash
#chmod +x ./cmake-install.sh

git clone https://github.com/openssl/openssl

cd openssl
mkdir build
cd build
../Configure
make

sudo checkinstall --pkgname=libssl-dev .

cd ../..
rm -rf openssl

git clone https://github.com/Kitware/CMake

cd CMake
mkdir build
cd build
cmake ..
make

sudo checkinstall --pkgname=cmake .

cd ../..
rm -rf CMake


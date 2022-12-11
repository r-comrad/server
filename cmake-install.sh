#!/bin/bash
#chmod +x ./cmake-install.sh

git clone https://github.com/openssl/openssl

cd openssl
mkdir build
cd build
../Configure
make

sudo  make install --pkgname=libssl-dev .

cd ../..
rm -rf openssl

git clone https://github.com/Kitware/CMake

cd CMake
mkdir build
cd build
cmake ..
make

sudo  make install --pkgname=cmake .

cd ../..
rm -rf CMake


#git clone https://github.com/CrowCpp/Crow.git
#cd Crow/
#mkdir build
#cd build/
#cmake .. -DCROW_BUILD_EXAMPLES=OFF -DCROW_BUILD_TESTS=OFF
#make install
::@echo off

cd ..
git add .
git commit -m '-'
git push 

cd devops
plink.exe -ssh rcomrad@194.87.206.68 -pw 111  -m remake.comands -pw 111 > logs.out

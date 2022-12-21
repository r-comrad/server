@echo off

cd ..
git add .
git add *
git add -A
git commit -m '-'
git push 

cd devops
plink.exe -batch -ssh rcomrad@194.87.206.68 -pw 111  -m remake.comands -pw 111 > logs.out
echo FINISHED
pause
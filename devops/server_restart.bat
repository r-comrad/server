cd ..
git add .
git commit -m '-'
git push 

plink.exe -ssh rcomrad@194.87.206.68 -pw 111  -m remake.comands > logs.out
pause
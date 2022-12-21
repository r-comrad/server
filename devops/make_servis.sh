echo -e "111\n" | sudo cp KusManager.service /etc/systemd/system/KusManager.service
echo -e "111\n" | sudo chmod 640 /etc/systemd/system/KusManager.service
echo -e "111\n" | sudo systemctl daemon-reload
echo -e "111\n" | sudo systemctl restart KusManager

# sudo chmod +x ./make_servis.sh
# sudo ./make_servis.sh
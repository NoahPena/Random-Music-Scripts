#!/bin/bash
echo "mama"
if [[ -e "/Library/Application Support/Native Instruments/Komplete Kontrol/ScanApp3.app" ]]
then
	echo "yo"
	rm -R /Library/Application\ Support/Native\ Instruments/Komplete\ Kontrol/ScanApp3.old.app
	mv /Library/Application\ Support/Native\ Instruments/Komplete\ Kontrol/ScanApp3.app /Library/Application\ Support/Native\ Instruments/Komplete\ Kontrol/ScanApp3.old.app
fi

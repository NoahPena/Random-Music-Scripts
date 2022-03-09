#!/bin/bash
echo "mama"
if [[ -e "/Library/Application Support/Native Instruments/Maschine 2/ScanApp.app" ]]
then
	echo "yo"
	rm -R /Library/Application\ Support/Native\ Instruments/Maschine\ 2/ScanApp.old.app
	mv /Library/Application\ Support/Native\ Instruments/Maschine\ 2/ScanApp.app /Library/Application\ Support/Native\ Instruments/Maschine\ 2/ScanApp.old.app
fi

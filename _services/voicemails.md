---
title: "Voicemails"
date: 2018-12-28T15:14:39+10:00
weight: 4
---


The **Switchboard Cloud™** phone system allows people calling you (or someone else in your company) to leave a voice message when you are unable to answer the phone.

This is how all users of the telephone system can access a list of voice messages, left by the people who have called them, from the **Switchboard Cloud™** Dashboard.


> You just have to select the message you want to listen to by clicking on it, and it will be loaded into the player.


<p align="center">
  <img src="./../../images/docs/voicemails/voicemail.png" />
</p>


**Asterisk** internally manages 3 folders to save the audio files of an agent's voice messages. These folders are `INBOX`, `Old` and `Deleted`.

A new message is stored in _INBOX_, an already listened to message goes to _Old_, and a deleted message goes to _Deleted_, so it's possible that your network administrator, accessing the server via SSH, can recover a file that you deleted by mistake.

---
title: Music on Hold
---

*Available from SwitchBoard 1.19.0.*

Callers hear hold music while they wait in a queue, while an agent has them on hold, while they are parked, and while they wait alone in a conference. SwitchBoard plays built-in instrumental tracks until you choose your own.

Your own music is arranged in **music classes**: named playlists built from your audio files, such as one for sales, one for support and one for the holidays. You then choose where each class plays.

Music on Hold is under **Settings > Audio > Music on Hold** and is open to administrators.

Menu names on this page are those of SwitchBoard 1.21.0 and later. In 1.19.0 and 1.20.0, **Audio Files** and **Music on Hold** are under **Tools** in the menu.

## Upload your audio

Go to **Settings > Audio > Audio Files**, click **New Audio File**, give it a **Name** and upload the file, or record it in the browser.

From SwitchBoard 1.23.0, the **Name**, **Description** and **Script** are filled in once at the top of the page and shared by the **Record**, **Upload** and **Text to Speech** tabs, so switching tabs keeps what you typed. For text to speech, the Script is the text that is spoken. If a save needs a correction, such as a name that is already taken, the page comes back with everything still filled in.

![The New Audio File page with the shared Name, Description and Script fields above the Record, Upload and Text to Speech tabs](/images/docs/music_on_hold/new_audio_file.png)

*Available from SwitchBoard 1.21.0.*

Audio files can be MP3, WAV, M4A, OGG, FLAC or another common audio format, up to 20 MB and one hour long. Every upload is converted to the format phone calls use, so there is nothing to convert first.

## Create a music class

Upload the audio first: **Upload a new audio file** on the class page opens the Audio Files page and leaves the class unsaved.

1. Go to **Settings > Audio > Music on Hold** and click **New Music Class**.
2. Give it a **Name** and, if you like, a **Description**.
3. Under **Tracks**, choose a file from **Add an audio file…** and click **Add**. Repeat for each track, then drag them into the order you want.
4. Choose the **Playback order**: **In order** plays the tracks as listed, **Shuffle** picks a random track each time.
5. Click **Create**.

Changes apply to the next call that goes on hold. Nothing needs to be restarted.

A class keeps the **Class name** it was created with, so renaming it later does not disturb the queues already using it. A class with no tracks plays the built-in music, and the list marks it **No tracks**.

## Choose where it plays

### Queues

Each queue has its own **Music on Hold** setting on the queue's page. It plays while a caller waits in the queue, and while an agent has them on hold afterwards. 

### Parked calls and conferences

Open the **Where it plays** tab on the Music on Hold page:

- **Parked calls**: the class every parking slot plays. Saving reloads the parking settings, so a caller already parked may hear the music start again.
- **Conferences**: from 1.20.0, set in the **Music** field under **Settings > System > General Settings**, on the **Conferences** tab. It plays while a participant waits alone, when **Play hold music to the first person in** is on; with it off, they hear silence until someone else joins. A class with no tracks can't be chosen there. In 1.19.x, the conference class is chosen on the **Where it plays** tab. See [Conferences](/docs/switchboard/conferences/).

Anything you don't set plays the built-in class, listed as **default**.

## Change the built-in music

The **default** class is what callers hear wherever you have not chosen something else. Add your own tracks to it to replace the built-in music everywhere at once. Remove them all and the built-in music comes back. It keeps its name and cannot be deleted.

If your phone system was already using other hold music classes before 1.19.0, they are listed as **Built-in** too, and cannot be deleted either.

## Delete a music class

A class can only be deleted when nothing uses it. Its page lists what does under **Used by**, such as queue hold music, parked calls or conferences. Choose another class there first. A class can also be used by an inbound route or a find-me/follow-me setting, which no screen changes yet; ask your SwitchBoard contact to move those.

An audio file can't be deleted while a class uses it: remove it from the class first. If a track's audio is no longer on the server, the class shows it as **Missing**. Remove the track or upload the audio again.

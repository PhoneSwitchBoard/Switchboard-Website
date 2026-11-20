---
title: Music on Hold
---

*Available from SwitchBoard 1.19.0.*

Callers hear hold music while they wait in a queue, while an agent has them on hold, while they are parked, and while they wait alone in a conference. SwitchBoard plays built-in instrumental tracks until you choose your own.

Your own music is arranged in **music classes**: named playlists built from your audio files, such as one for sales, one for support and one for the holidays. You then choose where each class plays.

Music on Hold is under **Settings > Audio > Music on Hold** and is open to administrators.

## Upload your audio

Go to **Settings > Audio > Audio Files**, click **New Audio File**, give it a **Name** and upload the file, or record it in the browser.

*Available from SwitchBoard 1.21.0.*

Audio files can be MP3, WAV, M4A, OGG, FLAC or another common audio format, up to 20 MB and one hour long. Every upload is converted to the format phone calls use, so there is nothing to convert first.

## Create a music class

1. Go to **Settings > Audio > Music on Hold** and click **New Music Class**.
2. Give it a **Name** and, if you like, a **Description**.
3. Under **Tracks**, choose a file from **Add an audio file…** and click **Add**, or choose **Upload a new audio file** to add one you don't have yet. Drag the tracks into the order you want.
4. Choose the **Playback order**: **In order** plays the tracks as listed, **Shuffle** picks a random track each time.
5. Save.

Changes apply to the next call that goes on hold. Nothing needs to be restarted.

A class keeps the **Class name** it was created with, so renaming it later does not disturb the queues already using it. A class with no tracks plays the built-in music, and the list marks it **No tracks**.

## Choose where it plays

### Queues

Each queue has its own **Music on Hold** setting on the queue's page. It plays while a caller waits in the queue, and while an agent has them on hold afterwards. See [Queues](/docs/switchboard/queues/).

### Parked calls and conferences

Open the **Where it plays** tab on the Music on Hold page:

- **Parked calls**: the class every parking slot plays. Saving reloads the parking settings, so a caller already parked may hear the music start again.
- **Conferences**: set under **Settings > System > General Settings**, on the **Conferences** tab. It plays while a participant waits alone, when **Play hold music to the first person in** is on. With it off, they hear silence until someone else joins. See [Conferences](/docs/switchboard/conferences/).

Anything you don't set plays the built-in **Default** class.

## Change the built-in music

The **Default** class is what callers hear wherever you have not chosen something else. Add your own tracks to it to replace the built-in music everywhere at once. Remove them all and the built-in music comes back. The Default class keeps its name and cannot be deleted.

## Delete a music class

A class can only be deleted when nothing uses it. Its page lists what does under **Used by**, such as queue hold music, parked calls or conferences. Choose another class there first.

If a track's audio file has been deleted, the class shows it as **Missing**. Remove the track or upload the audio again.

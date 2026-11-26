---
title: "Phone Menus (IVR)"
---

A **phone menu** (IVR) greets callers with a recording and lets them press a key to reach the right place, for example *press 1 for sales, press 2 for support*. Administrators set them up under **Settings > Phone System > Phone Menus (IVR)**.

## Create a phone menu

*Available from SwitchBoard 1.23.0.*

1. Go to **Settings > Phone System > Phone Menus (IVR)** and click **New IVR**.
2. Give it a **Name**, tick **Active** and choose the **Engine**:
   - **Stasis (full features)** for menus that look up contacts, ask for a support PIN or send emails.
   - **Dialplan (lightweight)** for simple menus.
3. Choose a **Welcome Prompt**, the recording callers hear first, and optionally an **Invalid option Prompt** for a key that leads nowhere. Both are [audio files](/docs/switchboard/music_on_hold/#upload-your-audio).
4. Click **Create**. The menu opens on its edit page, ready for its options.

## Add menu options

Menu options are added and removed on the menu's edit page, under **Add Menu Option**:

1. Choose the **Digits** the caller presses.
2. Choose the **Destination Type**, such as an agent, a queue, a voicemail box or another phone menu, and then the **Destination**.
3. Click **Add Option**.

Options are saved as soon as you add or remove them, and the **Menu Options** table lists them. The menu's details page shows the options without changing them: click **Edit** to change them. If you change the **Engine**, click **Update** before adding more options.

![The edit page of a phone menu, with the Add Menu Option form and the Menu Options table](/images/docs/ivr/ivr_edit_options.png)

### Choose what callers hear at a voicemail option

When the destination is a voicemail box, choose a **Greeting**:

| Greeting | What the caller hears |
|---|---|
| **Instructions Only** (the default) | No greeting, then the "record your message after the tone" instructions and the beep. |
| **Unavailable** | The mailbox's unavailable greeting, then the beep. |
| **Busy** | The mailbox's busy greeting, then the beep. |
| **No Message** | Only the beep. |

From SwitchBoard 1.23.0, each voicemail option plays exactly the greeting chosen for it, in both kinds of phone menu.

The menu's **Fallback Destination**, where callers go after three wrong keys or no key at all, has no greeting choice. When it is a voicemail box, the mailbox's own setting decides whether callers hear the instructions.

## Rename or delete a phone menu, time condition or call flow control

*Available from SwitchBoard 1.23.0.*

Other settings send calls to a phone menu, a time condition or a call flow control by its name. So that calls never go to a name that no longer exists, SwitchBoard doesn't let you rename or delete one while anything still sends calls to it. That includes:

- inbound routes;
- phone menu options and fallback destinations;
- queue failover destinations;
- time conditions, call flow controls and announcements;
- Caller Verification steps;
- the fallback of an external number or an AI agent;
- where blocked callers go.

When you try, the form says that it can't rename or delete the item and lists every setting that still sends calls to it. Send each of those somewhere else first, then rename or delete it. A phone menu's own options that lead back to itself don't count.

Saving a setting whose destination is a phone menu that doesn't exist is also refused, with the message *No IVR found with name*.

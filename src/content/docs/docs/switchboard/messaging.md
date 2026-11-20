---
title: Messaging
---

*Available from SwitchBoard 1.20.0.*

SwitchBoard has an inbox for **SMS** and **WhatsApp** conversations with your customers. Messages arrive as conversations you can read and answer from SwitchBoard, next to your calls. Texts are sent through your own Twilio account.

:::note
Messaging is switched on per phone system. If you don't see **Messages** in the menu, ask your SwitchBoard contact to enable it.

Menu names on this page are those of SwitchBoard 1.21.0 and later. In 1.20.0, **Messages** is in the menu just below **Call Records**, and **Set up messaging** and **API Integrations** are under **Admin > Providers**.
:::

## Answer messages in the inbox

Open **Messages** in the menu. Every user can use the inbox.

### Find a conversation

The tabs at the top filter the list by channel (**All channels**, **SMS**, **WhatsApp**) and by status:

- **Open**: every conversation that isn't closed. This is where the inbox starts.
- **Unread**, **Mine** and **Unassigned**: open conversations with unread messages, assigned to you, or assigned to nobody.
- **Closed**.

The inbox updates as messages arrive, so there is no need to reload the page.

### Reply, or leave a note for your team

Select a conversation and write in the box at the bottom:

- **Reply** sends a message to the customer. Click **Send**, or press Enter (Shift+Enter starts a new line). The box shows which number the reply is sent from.
- **Internal note** adds a note only your team can see. Click **Add note**.

To send later, click the arrow next to **Send**, choose **Schedule for…**, pick the date and time and click **Schedule**. Until it is sent, **Cancel** stops a scheduled message. **Edit** cancels it and puts its text back in the box: change it, then schedule it again, because pressing Enter sends it straight away.

### Assign and close

At the top of the conversation, choose a colleague in the assignee list to make it theirs, or **Unassigned**. Click **Close** when it is dealt with, and **Reopen** to bring it back. If the customer writes again, a closed conversation reopens on its own.

### Link the conversation to a contact

A message from a number that isn't in your contacts shows **Save or link a contact**. Search for the contact, or create a person or company and click **Create and link**.

When the same contact can be reached on SMS and WhatsApp, the channel buttons at the top switch between the two conversations, or start one on the other channel.

### Start a new conversation

Click **New message**, then search your contacts or type a phone number. You can also create a contact and click **Create and message**. If you already have a conversation with that person, the message is added to it.

## Message status and failed messages

Under each message you send, SwitchBoard shows how far it got: **Queued**, **Sending…**, **Sent**, **Delivered**, **Read** or **Not delivered**.

A message that is **Not delivered** says why, for example that the number is a landline, is not valid, or that texting to that country is switched off in your Twilio account. **Send again** appears when trying again can help; **Edit and resend** is always available.

## Opt-outs

A customer who replies with only **STOP**, **STOPALL**, **UNSUBSCRIBE**, **CANCEL**, **END** or **QUIT** has opted out. Their conversation shows a notice, and you can't message them on that channel until they reply **START**, **YES** or **UNSTOP**. An opt-out on SMS doesn't stop WhatsApp, or the other way round. Carriers also block messages to numbers that opted out.

## WhatsApp's 24-hour window

WhatsApp only allows a business to send a free-form message within 24 hours of the customer's last message. The conversation shows **Reply window open until** a given time, or **Reply window closed**. The window opens again as soon as the customer writes.

Starting a WhatsApp conversation yourself usually needs the customer to have messaged you first. Approved WhatsApp message templates, which can open a conversation, are not available in SwitchBoard yet.

## Set up texting

Administrators set up messaging under **Settings > Messaging > Messaging Setup**.

### Before you start

1. Connect your Twilio account under **Settings > Integrations > API Integrations**. See the [Twilio key guide](/docs/switchboard/integrations/#twilio).
2. In Twilio, buy a number that can send texts. The setup page has the steps, and a button to **Open Twilio Console**.
3. For local US numbers, register with the US carriers. From 1.21.0 SwitchBoard guides you through it, see [Register with US carriers](#register-with-us-carriers); in 1.20.0 it is done in the Twilio Console. Toll-free numbers are verified one by one in Twilio instead.
4. In Twilio, allow the countries you want to text under Messaging, Settings, **Geo permissions**.

### Choose how SwitchBoard sends texts

*Available from SwitchBoard 1.21.0.*

SwitchBoard sends texts through a Twilio **Messaging Service**. On the **SMS** tab (when your provider offers only SMS, the page shows SMS setup without tabs):

1. If your Twilio account already has a Messaging Service registered with the carriers, click **Use this service** on it. Otherwise click **Create a SwitchBoard service**.
2. If the service you chose sends replies somewhere else, SwitchBoard asks before changing it. Click **Send replies to SwitchBoard**, so customers' replies reach the inbox.
3. Under **Numbers SwitchBoard can text from**, click **Use for texting** on each number that should send texts. A number in another Messaging Service shows **Move here**; its carrier registration stays with the other service.

The **How SwitchBoard sends texts** card then checks that replies come to SwitchBoard, that incoming texts can be verified, how many numbers send texts, and whether carriers will deliver texts from local numbers (see [Register with US carriers](#register-with-us-carriers)). If a check fails, its button fixes it, for example **Set up verification**. Until incoming texts can be verified, SwitchBoard turns every incoming text away.

To stop texting from a number, click **Remove**. The number stays in your Twilio account and keeps taking calls.

Each number shows its registration (**Approved**, **In review**, **Needs a change** or **Not registered**, or **Unknown** when Twilio doesn't report it; check that number in the Twilio Console). Open a number to see where its registration stands and what happens next. SwitchBoard reads these from Twilio about once a minute.

### WhatsApp

WhatsApp senders are created in the Twilio Console under Messaging, then Senders, and approved by Meta there. The **WhatsApp** tab shows each sender on your Twilio account and where its approval stands.

A new sender must send its messages to SwitchBoard. The **Incoming messages** card on the Messaging Setup page shows two addresses: in the Twilio Console, set the sender's incoming message address to the one ending in `twilio/inbound`, and its status address to the one ending in `twilio/status`.

## Register with US carriers

*Available from SwitchBoard 1.21.0.*

US carriers only deliver texts from local (10DLC) numbers whose business, brand and campaign are registered. Once a Messaging Service is in use, the **SMS** tab shows a card with the three steps, whether each is done, in review or needs a change, and what to do next:

1. **Business profile**: who your business is (legal name, address, tax number and an authorized contact), filled in Twilio's Trust Hub.
2. **Brand**: registered in Twilio under Messaging, Regulatory Compliance. For fewer than about 2,000 texts a day, Twilio's Low Volume Standard brand is the usual choice.
3. **Campaign**: what you will text. This step is done in SwitchBoard; see below.

Each review usually takes a few days, and the card updates on its own. If a step is not approved, the card says what to change.

### File your campaign

Click **Register the campaign** on the card (or **Continue registering** if you started before). SwitchBoard asks plain questions in eight short steps and writes the campaign from your answers:

1. **Your texts**: what kinds of texts you send, to whom, and how many a day.
2. **Your business**: your legal name and website, read from your Twilio profile, and any trade name customers know you by.
3. **How people agree**: how customers agree to receive texts, such as a keyword, a web form, a paper form or a QR code, with a link or screenshot for each.
4. **Sample messages**: examples written from your answers, which you can change or add to.
5. **Message content**: whether texts contain links, phone numbers, age-restricted content or lending offers.
6. **Privacy and terms**: the links to your privacy policy and terms, with a list of what they must say.
7. **Automatic replies**: your support contact, how often people get texts, and the replies to opting in, HELP and STOP.
8. **Review and file**: the filled-in campaign form, for a final check.

Your answers are saved as you go, so you can leave and come back to the step you reached. On the last step, confirm that the answers describe what you really send, then click **Submit for review**. Twilio charges a review fee for each submission.

If the carriers don't approve the campaign, the card shows what the reviewers said. Click **Fix and resubmit** to change your answers and file it again.

:::caution
Twilio, not SwitchBoard, sends the automatic replies to HELP and STOP. After filing, set the same replies and opt-in keywords in your Twilio Messaging Service's opt-out settings.
:::
